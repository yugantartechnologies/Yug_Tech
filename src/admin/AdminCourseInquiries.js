import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminLogin from "./AdminLogin";
import { inquiryService, INQUIRY_CATEGORIES, subscribeToInquiries } from "../services/inquiryService";
import { getCurrentAdmin, hasPermission, logoutAdmin } from "./adminAuth";
import { 
  BookOpen, Search, Trash2, Mail, Phone, User, RefreshCw, 
  Download, PlusCircle, CheckCircle 
} from "lucide-react";

const AdminCourseInquiries = () => {
  const [inquiries, setInquiries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const [adminState, setAdminState] = useState(getCurrentAdmin());
  const [toastMsg, setToastMsg] = useState("");
  const navigate = useNavigate();

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(""), 3500);
  };

  useEffect(() => {
    const current = getCurrentAdmin();
    setAdminState(current);
  }, []);

  const loadInquiries = async () => {
    setIsSyncing(true);
    const list = await inquiryService.fetchCategory(
      INQUIRY_CATEGORIES.COURSE.storageKey,
      INQUIRY_CATEGORIES.COURSE.endpoint,
      INQUIRY_CATEGORIES.COURSE.typeLabel,
      INQUIRY_CATEGORIES.COURSE.badgeColor,
      INQUIRY_CATEGORIES.COURSE.linkPath
    );
    setInquiries(list);
    setIsSyncing(false);
  };

  useEffect(() => {
    loadInquiries();
    const unsubscribe = subscribeToInquiries(() => loadInquiries());
    const interval = setInterval(loadInquiries, 5000);

    return () => {
      unsubscribe();
      clearInterval(interval);
    };
  }, []);

  const handleStatusChange = async (idToUpdate, newStatus) => {
    if (!hasPermission('canEditInquiries')) {
      alert("Your role does not have permission to update inquiry status.");
      return;
    }

    await inquiryService.updateStatus(
      INQUIRY_CATEGORIES.COURSE.storageKey,
      INQUIRY_CATEGORIES.COURSE.endpoint,
      idToUpdate,
      newStatus
    );

    setInquiries((prev) =>
      prev.map((item) =>
        (item._id || item.id) === idToUpdate ? { ...item, status: newStatus } : item
      )
    );
    showToast(`Status changed to ${newStatus}`);
  };

  const handleDelete = async (idToDelete) => {
    if (!hasPermission('canDeleteInquiries')) {
      alert("Your role does not have permission to delete inquiries.");
      return;
    }

    if (!window.confirm("Are you sure you want to delete this course inquiry record?")) return;

    await inquiryService.deleteInquiry(
      INQUIRY_CATEGORIES.COURSE.storageKey,
      INQUIRY_CATEGORIES.COURSE.endpoint,
      idToDelete
    );

    setInquiries((prev) =>
      prev.filter((item) => (item._id || item.id) !== idToDelete)
    );
    showToast("Course inquiry deleted!");
  };

  const handleSimulate = async () => {
    const item = await inquiryService.simulateTestInquiry('COURSE');
    showToast(`Generated test course inquiry for ${item.name}!`);
    loadInquiries();
  };

  const handleExport = () => {
    if (!hasPermission('canExportData')) {
      alert("Your role does not have permission to export data.");
      return;
    }
    inquiryService.exportToCSV(filteredInquiries, 'yugantar_course_inquiries.csv');
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out of the admin panel?")) {
      logoutAdmin();
      navigate('/admin/login');
    }
  };

  const filteredInquiries = inquiries.filter((item) => {
    if (!searchTerm.trim()) return true;
    const term = searchTerm.toLowerCase().trim();
    return (
      (item.name && item.name.toLowerCase().includes(term)) ||
      (item.email && item.email.toLowerCase().includes(term)) ||
      (item.phone && item.phone.toLowerCase().includes(term)) ||
      (item.courseName && item.courseName.toLowerCase().includes(term)) ||
      (item.message && item.message.toLowerCase().includes(term))
    );
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case "New":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "Contacted":
        return "bg-amber-50 text-amber-700 border-amber-200";
      case "Enrolled":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "Closed":
        return "bg-slate-50 text-slate-700 border-slate-200";
      default:
        return "bg-slate-50 text-slate-700 border-slate-200";
    }
  };

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

        {toastMsg && (
          <div className="mb-6 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2 shadow-2xs">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>{toastMsg}</span>
          </div>
        )}

        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-7">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 border border-blue-200/80">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 flex items-center gap-2">
                <span>Course Inquiries & Leads</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-mono font-bold">
                  {inquiries.length}
                </span>
              </h1>
              <p className="text-xs text-slate-500 mt-1">
                Direct student enrollment requests and course inquiries from website visitors.
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
              onClick={loadInquiries}
              disabled={isSyncing}
              className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition shadow-2xs cursor-pointer"
              title="Refresh Data"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-blue-600 ${isSyncing ? "animate-spin" : ""}`} />
              <span>Refresh</span>
            </button>

            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search students, course..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 pl-10 pr-4 py-2 rounded-xl text-xs outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition shadow-2xs"
              />
            </div>
          </div>
        </div>

        {filteredInquiries.length === 0 ? (
          <div className="bg-white border border-dashed border-slate-200 rounded-2xl p-12 text-center text-slate-500 shadow-xs">
            <BookOpen className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <p className="text-lg font-bold text-slate-800">No Course Inquiries Found</p>
            <p className="text-sm text-slate-500 mt-1">Enrollment requests from course pages will appear here in real time.</p>
            <button
              onClick={handleSimulate}
              className="mt-4 inline-flex items-center gap-1.5 text-xs bg-blue-600 hover:bg-blue-700 text-white font-bold px-3.5 py-2 rounded-xl transition shadow-xs cursor-pointer"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              <span>Generate Test Student Inquiry</span>
            </button>
          </div>
        ) : (
          <>
            {/* Desktop Table View */}
            <div className="hidden md:block bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-xs">
              <table className="min-w-full divide-y divide-slate-100">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-3.5 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">
                      Student Name
                    </th>
                    <th className="px-6 py-3.5 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">
                      Contact Details
                    </th>
                    <th className="px-6 py-3.5 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">
                      Selected Course
                    </th>
                    <th className="px-6 py-3.5 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">
                      Message / Notes
                    </th>
                    <th className="px-6 py-3.5 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3.5 text-right text-xs font-bold text-slate-600 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white font-medium">
                  {filteredInquiries.map((item, index) => {
                    const recordId = item._id || item.id || index;
                    return (
                      <tr key={recordId} className="hover:bg-slate-50/70 transition-colors">
                        <td className="px-6 py-4">
                          <div className="font-bold text-slate-900 flex items-center gap-2">
                            <User className="w-4 h-4 text-slate-400" />
                            <span>{item.name || "Anonymous"}</span>
                          </div>
                          <span className="text-[11px] text-slate-400 block ml-6">
                            {item.createdAt ? new Date(item.createdAt).toLocaleDateString() : "Recent"}
                          </span>
                        </td>

                        <td className="px-6 py-4">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <a href={`tel:${item.phone}`} className="flex items-center gap-1.5 text-xs text-blue-600 hover:underline font-semibold">
                                <Phone className="w-3 h-3" />
                                <span>{item.phone}</span>
                              </a>
                              {item.phone && (
                                <a
                                  href={`https://wa.me/91${item.phone.replace(/[^0-9]/g, "")}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-300 font-bold"
                                  title="WhatsApp"
                                >
                                  💬 WA
                                </a>
                              )}
                            </div>
                            {item.email && (
                              <a href={`mailto:${item.email}`} className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800">
                                <Mail className="w-3 h-3" />
                                <span>{item.email}</span>
                              </a>
                            )}
                          </div>
                        </td>

                        <td className="px-6 py-4">
                          <span className="inline-block px-2.5 py-1 text-xs font-semibold rounded-md bg-blue-50 text-blue-700 border border-blue-200">
                            {item.courseName || "General Course"}
                          </span>
                        </td>

                        <td className="px-6 py-4 max-w-xs">
                          <p className="text-xs text-slate-700 line-clamp-2 hover:line-clamp-none">
                            {item.message || "No message provided."}
                          </p>
                        </td>

                        <td className="px-6 py-4">
                          <select
                            value={item.status || "New"}
                            onChange={(e) => handleStatusChange(recordId, e.target.value)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-semibold border outline-none cursor-pointer shadow-2xs ${getStatusBadge(item.status || "New")}`}
                          >
                            <option value="New">🟢 New</option>
                            <option value="Contacted">🟡 Contacted</option>
                            <option value="Enrolled">✅ Enrolled</option>
                            <option value="Closed">⚪ Closed</option>
                          </select>
                        </td>

                        <td className="px-6 py-4 text-right">
                          <button
                            onClick={() => handleDelete(recordId)}
                            className="p-2 rounded-lg bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 transition cursor-pointer"
                            title="Delete Inquiry"
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

            {/* Mobile Cards View */}
            <div className="md:hidden space-y-4">
              {filteredInquiries.map((item, index) => {
                const recordId = item._id || item.id || index;
                return (
                  <div key={recordId} className="bg-white border border-slate-200 rounded-2xl p-4 space-y-3 shadow-xs">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-bold text-slate-900 text-base">{item.name || "Anonymous"}</h3>
                        <span className="inline-block mt-1 px-2.5 py-0.5 text-xs font-semibold rounded bg-blue-50 text-blue-700 border border-blue-200">
                          {item.courseName || "General Course"}
                        </span>
                      </div>
                      <button
                        onClick={() => handleDelete(recordId)}
                        className="p-1.5 rounded-lg bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 transition cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="space-y-1.5 text-xs text-slate-700">
                      <div className="flex items-center gap-2">
                        <a href={`tel:${item.phone}`} className="text-blue-600 font-semibold flex items-center gap-1">
                          <Phone className="w-3 h-3" />
                          <span>{item.phone}</span>
                        </a>
                        {item.phone && (
                          <a
                            href={`https://wa.me/91${item.phone.replace(/[^0-9]/g, "")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-300 font-bold"
                          >
                            💬 WA
                          </a>
                        )}
                      </div>
                      <a href={`mailto:${item.email}`} className="text-slate-500 block truncate">
                        {item.email}
                      </a>
                    </div>

                    {item.message && (
                      <p className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                        {item.message}
                      </p>
                    )}

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                      <select
                        value={item.status || "New"}
                        onChange={(e) => handleStatusChange(recordId, e.target.value)}
                        className={`px-2.5 py-1 rounded-lg text-xs font-semibold border outline-none ${getStatusBadge(item.status || "New")}`}
                      >
                        <option value="New">🟢 New</option>
                        <option value="Contacted">🟡 Contacted</option>
                        <option value="Enrolled">✅ Enrolled</option>
                        <option value="Closed">⚪ Closed</option>
                      </select>

                      <span className="text-[11px] text-slate-400">
                        {item.createdAt ? new Date(item.createdAt).toLocaleDateString() : "Recent"}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminCourseInquiries;
