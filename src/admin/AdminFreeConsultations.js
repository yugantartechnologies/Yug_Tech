import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminLogin from "./AdminLogin";
import { inquiryService, INQUIRY_CATEGORIES, subscribeToInquiries } from "../services/inquiryService";
import { getCurrentAdmin, hasPermission, logoutAdmin } from "./adminAuth";
import { 
  Calendar, 
  Search, 
  Trash2, 
  Mail, 
  Phone, 
  User, 
  MessageSquare, 
  RefreshCw, 
  Building2, 
  Download,
  CalendarCheck,
  PlusCircle
} from "lucide-react";

export default function AdminFreeConsultations() {
  const [consultations, setConsultations] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const [adminState, setAdminState] = useState(getCurrentAdmin());
  const navigate = useNavigate();

  useEffect(() => {
    const current = getCurrentAdmin();
    setAdminState(current);
  }, []);

  const loadConsultations = async () => {
    setIsSyncing(true);
    const list = await inquiryService.fetchCategory(
      INQUIRY_CATEGORIES.FREE_CONSULT.storageKey,
      INQUIRY_CATEGORIES.FREE_CONSULT.endpoint,
      INQUIRY_CATEGORIES.FREE_CONSULT.typeLabel,
      INQUIRY_CATEGORIES.FREE_CONSULT.badgeColor,
      INQUIRY_CATEGORIES.FREE_CONSULT.linkPath
    );
    setConsultations(list);
    setIsSyncing(false);
  };

  useEffect(() => {
    loadConsultations();
    const unsubscribe = subscribeToInquiries(() => loadConsultations());
    const interval = setInterval(loadConsultations, 5000);

    return () => {
      unsubscribe();
      clearInterval(interval);
    };
  }, []);

  const handleStatusChange = async (idToUpdate, newStatus) => {
    if (!hasPermission('canEditInquiries')) {
      alert("Your role does not have permission to update consultation status.");
      return;
    }

    await inquiryService.updateStatus(
      INQUIRY_CATEGORIES.FREE_CONSULT.storageKey,
      INQUIRY_CATEGORIES.FREE_CONSULT.endpoint,
      idToUpdate,
      newStatus
    );

    setConsultations((prev) =>
      prev.map((item) =>
        (item._id || item.id) === idToUpdate ? { ...item, status: newStatus } : item
      )
    );
  };

  const handleDelete = async (idToDelete) => {
    if (!hasPermission('canDeleteInquiries')) {
      alert("Your role does not have permission to delete inquiries.");
      return;
    }

    if (!window.confirm("Are you sure you want to delete this consultation request?")) return;

    await inquiryService.deleteInquiry(
      INQUIRY_CATEGORIES.FREE_CONSULT.storageKey,
      INQUIRY_CATEGORIES.FREE_CONSULT.endpoint,
      idToDelete
    );

    setConsultations((prev) =>
      prev.filter((item) => (item._id || item.id) !== idToDelete)
    );
  };

  const handleSimulate = async () => {
    await inquiryService.simulateTestInquiry('FREE_CONSULT');
    loadConsultations();
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out of the admin panel?")) {
      logoutAdmin();
      navigate("/admin/login");
    }
  };

  const handleExportCSV = () => {
    if (consultations.length === 0) return alert("No data available to export.");

    const headers = ["ID", "Name", "Phone", "Email", "Business Name", "Service", "Preferred Date", "Message", "Status", "Created At"];
    const csvRows = [
      headers.join(","),
      ...consultations.map(c => [
        `"${c.id || c._id || ''}"`,
        `"${c.name || ''}"`,
        `"${c.phone || ''}"`,
        `"${c.email || ''}"`,
        `"${c.businessName || ''}"`,
        `"${c.service || ''}"`,
        `"${c.preferredDate || ''}"`,
        `"${(c.message || '').replace(/"/g, '""')}"`,
        `"${c.status || 'New'}"`,
        `"${c.createdAt ? new Date(c.createdAt).toLocaleString() : ''}"`
      ].join(","))
    ];

    const blob = new Blob([csvRows.join("\n")], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `Free_Consultations_YugAntar_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredConsultations = consultations.filter((item) => {
    const matchesStatus = statusFilter === "All" || (item.status || "New") === statusFilter;
    if (!matchesStatus) return false;

    if (!searchTerm.trim()) return true;
    const term = searchTerm.toLowerCase().trim();
    return (
      (item.name && item.name.toLowerCase().includes(term)) ||
      (item.email && item.email.toLowerCase().includes(term)) ||
      (item.phone && item.phone.toLowerCase().includes(term)) ||
      (item.businessName && item.businessName.toLowerCase().includes(term)) ||
      (item.service && item.service.toLowerCase().includes(term)) ||
      (item.message && item.message.toLowerCase().includes(term))
    );
  });

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "New":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "Contacted":
        return "bg-amber-50 text-amber-700 border-amber-200";
      case "Scheduled":
        return "bg-purple-50 text-purple-700 border-purple-200";
      case "Completed":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "Cancelled":
        return "bg-rose-50 text-rose-700 border-rose-200";
      default:
        return "bg-slate-50 text-slate-700 border-slate-200";
    }
  };

  const totalCount = consultations.length;
  const newCount = consultations.filter(c => (c.status || "New") === "New").length;
  const contactedCount = consultations.filter(c => c.status === "Contacted" || c.status === "Scheduled").length;
  const completedCount = consultations.filter(c => c.status === "Completed").length;

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
        {/* Mobile Hamburger Header */}
        <div className="md:hidden mb-4 flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(true)}
            className="bg-white border border-slate-300 text-slate-800 px-3 py-1.5 rounded-lg shadow-2xs text-xs font-semibold"
          >
            ☰ Menu
          </button>
          <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold border ${adminState?.roleDefinition?.badgeColor || 'border-blue-300 text-blue-700 bg-blue-50'}`}>
            {adminState?.roleDefinition?.badge || 'Admin'}
          </span>
        </div>

        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-7">
          <div>
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 border border-blue-200/80">
                <CalendarCheck className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 flex items-center gap-2">
                  <span>Free Consultation Requests</span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-mono font-bold">
                    {totalCount}
                  </span>
                </h1>
                <p className="text-xs text-slate-500 mt-1">
                  Submissions from "Book Free Consultation" buttons across the website.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full sm:w-auto">
            <button
              onClick={handleSimulate}
              className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition shadow-2xs cursor-pointer"
            >
              <PlusCircle className="w-3.5 h-3.5 text-blue-600" />
              <span>+ Simulate</span>
            </button>

            <button
              onClick={handleExportCSV}
              className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition shadow-2xs cursor-pointer"
              title="Export to CSV"
            >
              <Download className="w-3.5 h-3.5 text-blue-600" />
              <span>Export CSV</span>
            </button>

            <button
              onClick={loadConsultations}
              disabled={isSyncing}
              className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition shadow-2xs cursor-pointer"
              title="Refresh Data"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-blue-600 ${isSyncing ? "animate-spin" : ""}`} />
              <span>Refresh</span>
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-7">
          <div className="bg-white border border-slate-200/90 p-4 rounded-2xl shadow-xs">
            <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Total Requests</p>
            <p className="text-2xl font-bold text-slate-900 mt-1">{totalCount}</p>
          </div>
          <div className="bg-white border border-slate-200/90 p-4 rounded-2xl shadow-xs">
            <p className="text-xs text-blue-600 font-semibold uppercase tracking-wider">New / Unread</p>
            <p className="text-2xl font-bold text-blue-600 mt-1">{newCount}</p>
          </div>
          <div className="bg-white border border-slate-200/90 p-4 rounded-2xl shadow-xs">
            <p className="text-xs text-amber-600 font-semibold uppercase tracking-wider">In Progress</p>
            <p className="text-2xl font-bold text-amber-600 mt-1">{contactedCount}</p>
          </div>
          <div className="bg-white border border-slate-200/90 p-4 rounded-2xl shadow-xs">
            <p className="text-xs text-emerald-600 font-semibold uppercase tracking-wider">Completed</p>
            <p className="text-2xl font-bold text-emerald-600 mt-1">{completedCount}</p>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-6">
          {/* Status Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 bg-white p-1.5 rounded-xl border border-slate-200/90 shadow-2xs w-full md:w-auto">
            {["All", "New", "Contacted", "Scheduled", "Completed", "Cancelled"].map((tab) => (
              <button
                key={tab}
                onClick={() => setStatusFilter(tab)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                  statusFilter === tab
                    ? "bg-blue-600 text-white shadow-xs font-bold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search by client name, email, phone..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 pl-10 pr-4 py-2 rounded-xl text-xs outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition shadow-2xs"
            />
          </div>
        </div>

        {filteredConsultations.length === 0 ? (
          <div className="bg-white border border-dashed border-slate-200 rounded-2xl p-12 text-center text-slate-500 shadow-xs">
            <MessageSquare className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <p className="text-lg font-bold text-slate-800">No Consultation Requests Found</p>
            <p className="text-sm text-slate-500 mt-1">Submissions from "Book Free Consultation" forms will appear here.</p>
          </div>
        ) : (
          <>
            {/* Desktop Table View */}
            <div className="hidden md:block bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-xs">
              <table className="min-w-full divide-y divide-slate-100">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-3.5 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">
                      Client / Visitor
                    </th>
                    <th className="px-6 py-3.5 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">
                      Contact Info
                    </th>
                    <th className="px-6 py-3.5 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">
                      Topic & Date
                    </th>
                    <th className="px-6 py-3.5 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">
                      Requirements / Details
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
                  {filteredConsultations.map((item, index) => {
                    const recordId = item._id || item.id || index;
                    return (
                      <tr key={recordId} className="hover:bg-slate-50/70 transition-colors">
                        <td className="px-6 py-4">
                          <div className="font-bold text-slate-900 flex items-center gap-2">
                            <User className="w-4 h-4 text-slate-400" />
                            <span>{item.name}</span>
                          </div>
                          {item.businessName && item.businessName !== "N/A" && (
                            <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                              <Building2 className="w-3 h-3 text-slate-400" />
                              <span>{item.businessName}</span>
                            </div>
                          )}
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-700">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <a
                                href={`tel:${item.phone}`}
                                className="flex items-center gap-1.5 text-blue-600 hover:underline font-semibold"
                              >
                                <Phone className="w-3.5 h-3.5" />
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
                            <a
                              href={`mailto:${item.email}`}
                              className="flex items-center gap-1.5 text-slate-500 hover:text-slate-800 text-xs"
                            >
                              <Mail className="w-3.5 h-3.5" />
                              <span className="text-xs">{item.email}</span>
                            </a>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-block px-2.5 py-1 text-xs font-semibold rounded-md bg-blue-50 text-blue-700 border border-blue-200 mb-1">
                            {item.service || "General Consultation"}
                          </span>
                          <div className="flex items-center gap-1 text-xs text-slate-500">
                            <Calendar className="w-3 h-3 text-slate-400" />
                            <span>Pref Date: {item.preferredDate || "Not specified"}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-700 max-w-xs">
                          <p className="line-clamp-2 hover:line-clamp-none text-xs leading-relaxed text-slate-700">
                            {item.message || "No specific details provided."}
                          </p>
                          <span className="text-[10px] text-slate-400 block mt-1">
                            Booked: {item.createdAt ? new Date(item.createdAt).toLocaleString() : "Recent"}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <select
                            value={item.status || "New"}
                            onChange={(e) => handleStatusChange(recordId, e.target.value)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-semibold border outline-none cursor-pointer shadow-2xs ${getStatusBadgeClass(item.status || "New")}`}
                          >
                            <option value="New">New</option>
                            <option value="Contacted">Contacted</option>
                            <option value="Scheduled">Scheduled</option>
                            <option value="Completed">Completed</option>
                            <option value="Cancelled">Cancelled</option>
                          </select>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button
                            onClick={() => handleDelete(recordId)}
                            className="p-2 rounded-lg bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 transition cursor-pointer"
                            title="Delete Consultation"
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
              {filteredConsultations.map((item, index) => {
                const recordId = item._id || item.id || index;
                return (
                  <div
                    key={recordId}
                    className="bg-white border border-slate-200 rounded-2xl p-5 space-y-3 shadow-xs"
                  >
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <div>
                        <h3 className="font-bold text-slate-900 text-base">{item.name}</h3>
                        <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 inline-block mt-1">
                          {item.service || "General Consultation"}
                        </span>
                      </div>
                      <button
                        onClick={() => handleDelete(recordId)}
                        className="p-2 rounded-lg bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 transition cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="space-y-2 text-sm text-slate-700">
                      <div className="flex items-center gap-2">
                        <a href={`tel:${item.phone}`} className="flex items-center gap-1.5 text-blue-600 font-semibold">
                          <Phone className="w-4 h-4" />
                          <span>{item.phone}</span>
                        </a>
                        {item.phone && (
                          <a
                            href={`https://wa.me/91${item.phone.replace(/[^0-9]/g, "")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[10px] px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-300 font-bold"
                          >
                            💬 WA
                          </a>
                        )}
                      </div>
                      <a href={`mailto:${item.email}`} className="flex items-center gap-2 text-slate-500 text-xs">
                        <Mail className="w-4 h-4" />
                        <span>{item.email}</span>
                      </a>
                      {item.businessName && item.businessName !== "N/A" && (
                        <div className="flex items-center gap-2 text-slate-500 text-xs">
                          <Building2 className="w-4 h-4 text-slate-400" />
                          <span>Business: {item.businessName}</span>
                        </div>
                      )}
                      <div className="pt-2 border-t border-slate-100">
                        <p className="text-xs font-semibold text-slate-400 uppercase">Message:</p>
                        <p className="text-xs text-slate-700 mt-1">{item.message || "No message provided."}</p>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <select
                        value={item.status || "New"}
                        onChange={(e) => handleStatusChange(recordId, e.target.value)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold border outline-none ${getStatusBadgeClass(item.status || "New")}`}
                      >
                        <option value="New">New</option>
                        <option value="Contacted">Contacted</option>
                        <option value="Scheduled">Scheduled</option>
                        <option value="Completed">Completed</option>
                        <option value="Cancelled">Cancelled</option>
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
}
