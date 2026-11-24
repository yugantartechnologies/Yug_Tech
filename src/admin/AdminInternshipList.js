import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminLogin from "./AdminLogin";
import { inquiryService, INQUIRY_CATEGORIES, subscribeToInquiries } from "../services/inquiryService";
import { getCurrentAdmin, hasPermission, logoutAdmin } from "./adminAuth";
import { 
  Award, Search, Trash2, Mail, Phone, User, RefreshCw, 
  Download, PlusCircle 
} from "lucide-react";

const AdminInternshipList = () => {
  const [applications, setApplications] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const [adminState, setAdminState] = useState(getCurrentAdmin());
  const navigate = useNavigate();

  useEffect(() => {
    const current = getCurrentAdmin();
    setAdminState(current);
  }, []);

  const loadApplications = async () => {
    setIsSyncing(true);
    const list = await inquiryService.fetchCategory(
      INQUIRY_CATEGORIES.INTERNSHIP.storageKey,
      INQUIRY_CATEGORIES.INTERNSHIP.endpoint,
      INQUIRY_CATEGORIES.INTERNSHIP.typeLabel,
      INQUIRY_CATEGORIES.INTERNSHIP.badgeColor,
      INQUIRY_CATEGORIES.INTERNSHIP.linkPath
    );
    setApplications(list);
    setIsSyncing(false);
  };

  useEffect(() => {
    loadApplications();
    const unsubscribe = subscribeToInquiries(() => loadApplications());
    const interval = setInterval(loadApplications, 5000);

    return () => {
      unsubscribe();
      clearInterval(interval);
    };
  }, []);

  const handleDelete = async (idToDelete) => {
    if (!hasPermission('canDeleteInquiries')) {
      alert("Your role does not have permission to delete inquiries.");
      return;
    }

    if (!window.confirm("Are you sure you want to delete this internship application record?")) return;

    await inquiryService.deleteInquiry(
      INQUIRY_CATEGORIES.INTERNSHIP.storageKey,
      INQUIRY_CATEGORIES.INTERNSHIP.endpoint,
      idToDelete
    );

    setApplications((prev) =>
      prev.filter((item) => (item._id || item.id) !== idToDelete)
    );
  };

  const handleSimulate = async () => {
    await inquiryService.simulateTestInquiry('INTERNSHIP');
    loadApplications();
  };

  const handleExport = () => {
    if (!hasPermission('canExportData')) {
      alert("Your role does not have permission to export data.");
      return;
    }
    inquiryService.exportToCSV(filteredApplications, 'yugantar_internships.csv');
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out of the admin panel?")) {
      logoutAdmin();
      navigate("/admin/login");
    }
  };

  const filteredApplications = applications.filter((app) => {
    if (!searchTerm.trim()) return true;
    const term = searchTerm.toLowerCase().trim();
    return (
      (app.name && app.name.toLowerCase().includes(term)) ||
      (app.email && app.email.toLowerCase().includes(term)) ||
      (app.phone && app.phone.toLowerCase().includes(term)) ||
      (app.internship && app.internship.toLowerCase().includes(term)) ||
      (app.experience && app.experience.toLowerCase().includes(term))
    );
  });

  if (!adminState?.isLoggedIn) {
    return <AdminLogin onLoginSuccess={() => setAdminState(getCurrentAdmin())} />;
  }

  return (
    <div className="min-h-screen bg-slate-100/70 text-slate-800 flex font-sans">
      <AdminSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        onLogout={handleLogout}
      />

      <div className="flex-1 p-4 md:p-8 overflow-x-hidden">
        {/* Mobile Header */}
        <div className="md:hidden mb-4 flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(true)}
            className="bg-white border border-slate-300 text-slate-800 px-3 py-1.5 rounded-lg shadow-2xs text-xs font-semibold"
          >
            ☰ Menu
          </button>
          <span className="px-2.5 py-0.5 rounded text-[10px] font-bold border border-blue-300 text-blue-700 bg-blue-50">
            {adminState?.roleDefinition?.badge || 'Admin'}
          </span>
        </div>

        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-7">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-purple-50 text-purple-600 border border-purple-200/80">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 flex items-center gap-2">
                <span>Internship Applications</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200 font-mono font-bold">
                  {applications.length}
                </span>
              </h1>
              <p className="text-xs text-slate-500 mt-1">
                Applications submitted for student internships and career training programs.
              </p>
            </div>
          </div>

          {/* Action Bar & Search */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full sm:w-auto">
            <button
              onClick={handleSimulate}
              className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition shadow-2xs cursor-pointer"
            >
              <PlusCircle className="w-3.5 h-3.5 text-blue-600" />
              <span>+ Simulate</span>
            </button>

            <button
              onClick={handleExport}
              className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition shadow-2xs cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-blue-600" />
              <span>Export CSV</span>
            </button>

            <button
              onClick={loadApplications}
              disabled={isSyncing}
              className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition shadow-2xs cursor-pointer"
              title="Refresh Data"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-blue-600 ${isSyncing ? "animate-spin" : ""}`} />
              <span>Refresh</span>
            </button>

            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search by applicant, phone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 pl-10 pr-4 py-2 rounded-xl text-xs outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition shadow-2xs"
              />
            </div>
          </div>
        </div>

        {filteredApplications.length === 0 ? (
          <div className="bg-white border border-dashed border-slate-200 rounded-2xl p-12 text-center text-slate-500 shadow-xs">
            <Award className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <p className="text-lg font-bold text-slate-800">No Applications Found</p>
            <p className="text-sm text-slate-500 mt-1">Submitted internship application forms will appear here.</p>
          </div>
        ) : (
          <div className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-xs">
            <table className="min-w-full divide-y divide-slate-100">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-3.5 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">
                    Applicant Name
                  </th>
                  <th className="px-6 py-3.5 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">
                    Contact Details
                  </th>
                  <th className="px-6 py-3.5 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">
                    Internship Program
                  </th>
                  <th className="px-6 py-3.5 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">
                    Experience
                  </th>
                  <th className="px-6 py-3.5 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">
                    Submitted Date
                  </th>
                  <th className="px-6 py-3.5 text-right text-xs font-bold text-slate-600 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white font-medium">
                {filteredApplications.map((app, index) => {
                  const recordId = app._id || app.id || index;
                  const dateStr = app.createdAt || app.submittedAt;
                  return (
                    <tr key={recordId} className="hover:bg-slate-50/70 transition-colors">
                      <td className="px-6 py-4 font-bold text-slate-900">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4 text-slate-400" />
                          <span>{app.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-700">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <a
                              href={`tel:${app.phone}`}
                              className="flex items-center gap-1.5 text-blue-600 hover:underline font-semibold text-xs"
                            >
                              <Phone className="w-3.5 h-3.5" />
                              <span>{app.phone}</span>
                            </a>
                            {app.phone && (
                              <a
                                href={`https://wa.me/91${app.phone.replace(/[^0-9]/g, "")}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-300 font-bold"
                              >
                                💬 WA
                              </a>
                            )}
                          </div>
                          <a
                            href={`mailto:${app.email}`}
                            className="flex items-center gap-1.5 text-slate-500 hover:text-slate-800 text-xs"
                          >
                            <Mail className="w-3.5 h-3.5" />
                            <span>{app.email}</span>
                          </a>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-xs font-semibold">
                        <span className="inline-block px-2.5 py-1 rounded-md bg-purple-50 text-purple-700 border border-purple-200">
                          {app.internship || "IT Internship"}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-xs text-slate-600">
                        {app.experience || "Fresher"}
                      </td>
                      <td className="px-6 py-4 text-xs text-slate-400">
                        {dateStr ? new Date(dateStr).toLocaleDateString() : "Recent"}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() => handleDelete(recordId)}
                          className="p-2 rounded-lg bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 transition cursor-pointer"
                          title="Delete Application"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminInternshipList;
