import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import BASE_URL from "../BASEURL";
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
  CalendarCheck
} from "lucide-react";

export default function AdminFreeConsultations() {
  const [consultations, setConsultations] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("adminLoggedIn")) {
      navigate("/admin/login");
    }
  }, [navigate]);

  const loadConsultations = async () => {
    setIsSyncing(true);
    let localData = [];
    try {
      localData = JSON.parse(localStorage.getItem("yug_free_consultations") || "[]");
    } catch (e) {
      console.error("Local storage read error", e);
    }

    let remoteData = [];
    try {
      const response = await fetch(`${BASE_URL}/api/free-consultations`);
      if (response.ok) {
        remoteData = await response.json();
      }
    } catch (e) {
      console.log("Backend endpoint offline, using local storage queue.");
    }

    // Merge and deduplicate records by id or email+createdAt
    const combinedMap = new Map();
    [...remoteData, ...localData].forEach((item) => {
      const key = item._id || item.id || `${item.email}_${item.createdAt}`;
      if (!combinedMap.has(key)) {
        combinedMap.set(key, {
          ...item,
          status: item.status || "New"
        });
      }
    });

    setConsultations(Array.from(combinedMap.values()));
    setIsSyncing(false);
  };

  useEffect(() => {
    loadConsultations();
    const interval = setInterval(loadConsultations, 3000);
    const handleSync = () => loadConsultations();
    window.addEventListener("storage", handleSync);
    window.addEventListener("yug_inquiry_submitted", handleSync);

    return () => {
      clearInterval(interval);
      window.removeEventListener("storage", handleSync);
      window.removeEventListener("yug_inquiry_submitted", handleSync);
    };
  }, []);

  const handleStatusChange = (idToUpdate, newStatus) => {
    try {
      const existing = JSON.parse(localStorage.getItem("yug_free_consultations") || "[]");
      const updated = existing.map((item) => {
        if ((item._id || item.id) === idToUpdate) {
          return { ...item, status: newStatus };
        }
        return item;
      });
      localStorage.setItem("yug_free_consultations", JSON.stringify(updated));
    } catch (e) {
      console.error("Error updating local storage", e);
    }

    setConsultations((prev) =>
      prev.map((item) =>
        (item._id || item.id) === idToUpdate ? { ...item, status: newStatus } : item
      )
    );
  };

  const handleDelete = (idToDelete) => {
    if (!window.confirm("Are you sure you want to delete this consultation request?")) return;

    try {
      const existing = JSON.parse(localStorage.getItem("yug_free_consultations") || "[]");
      const updated = existing.filter(
        (item) => (item._id || item.id) !== idToDelete
      );
      localStorage.setItem("yug_free_consultations", JSON.stringify(updated));
    } catch (e) {
      console.error("Error updating local storage", e);
    }

    setConsultations((prev) =>
      prev.filter((item) => (item._id || item.id) !== idToDelete)
    );
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

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("adminLoggedIn");
      navigate("/admin/login");
    }
  };

  const filteredConsultations = consultations.filter((item) => {
    const term = searchTerm.toLowerCase();
    const matchesSearch =
      (item.name && item.name.toLowerCase().includes(term)) ||
      (item.email && item.email.toLowerCase().includes(term)) ||
      (item.phone && item.phone.toLowerCase().includes(term)) ||
      (item.businessName && item.businessName.toLowerCase().includes(term)) ||
      (item.service && item.service.toLowerCase().includes(term));

    const matchesStatus = statusFilter === "All" || (item.status || "New") === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "New":
        return "bg-sky-500/10 text-sky-400 border-sky-500/30";
      case "Contacted":
        return "bg-amber-500/10 text-amber-400 border-amber-500/30";
      case "Scheduled":
        return "bg-purple-500/10 text-purple-400 border-purple-500/30";
      case "Completed":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/30";
      case "Cancelled":
        return "bg-rose-500/10 text-rose-400 border-rose-500/30";
      default:
        return "bg-slate-500/10 text-slate-400 border-slate-500/30";
    }
  };

  const totalCount = consultations.length;
  const newCount = consultations.filter(c => (c.status || "New") === "New").length;
  const contactedCount = consultations.filter(c => c.status === "Contacted" || c.status === "Scheduled").length;
  const completedCount = consultations.filter(c => c.status === "Completed").length;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex">
      <AdminSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        onLogout={handleLogout}
      />

      <div className="flex-1 p-4 md:p-8 overflow-x-hidden">
        {/* Mobile Hamburger Header */}
        <div className="md:hidden mb-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="bg-slate-900 border border-slate-800 text-white px-4 py-2 rounded-lg shadow"
          >
            ☰ Menu
          </button>
        </div>

        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                <CalendarCheck className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
                  Free Consultation Requests
                </h1>
                <p className="text-xs text-slate-400 mt-1">
                  Submissions from "Book Free Consultation" buttons across the website.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleExportCSV}
              className="bg-slate-900 border border-slate-800 text-slate-300 hover:text-white px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 hover:bg-slate-800 transition"
              title="Export to CSV"
            >
              <Download className="w-3.5 h-3.5 text-emerald-400" />
              <span>Export CSV</span>
            </button>

            <button
              onClick={loadConsultations}
              disabled={isSyncing}
              className="bg-slate-900 border border-slate-800 text-slate-300 hover:text-white px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 hover:bg-slate-800 transition"
              title="Refresh Data"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-sky-400 ${isSyncing ? "animate-spin" : ""}`} />
              <span>Refresh</span>
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-2xl">
            <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Total Requests</p>
            <p className="text-2xl font-bold text-white mt-1">{totalCount}</p>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-2xl">
            <p className="text-xs text-sky-400 font-semibold uppercase tracking-wider">New / Unread</p>
            <p className="text-2xl font-bold text-sky-400 mt-1">{newCount}</p>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-2xl">
            <p className="text-xs text-amber-400 font-semibold uppercase tracking-wider">In Progress</p>
            <p className="text-2xl font-bold text-amber-400 mt-1">{contactedCount}</p>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-2xl">
            <p className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">Completed</p>
            <p className="text-2xl font-bold text-emerald-400 mt-1">{completedCount}</p>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-6">
          {/* Status Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 bg-slate-900/80 p-1.5 rounded-xl border border-slate-800 w-full md:w-auto">
            {["All", "New", "Contacted", "Scheduled", "Completed", "Cancelled"].map((tab) => (
              <button
                key={tab}
                onClick={() => setStatusFilter(tab)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  statusFilter === tab
                    ? "bg-sky-500 text-white shadow-md shadow-sky-500/20"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by client name, email, phone..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 text-slate-200 pl-10 pr-4 py-2.5 rounded-xl text-sm outline-none focus:border-sky-500 transition"
            />
          </div>
        </div>

        {filteredConsultations.length === 0 ? (
          <div className="bg-slate-900/40 border border-slate-850 rounded-2xl p-12 text-center text-slate-400">
            <MessageSquare className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <p className="text-lg font-bold text-slate-300">No Consultation Requests Found</p>
            <p className="text-sm text-slate-500 mt-1">Submissions from "Book Free Consultation" forms will appear here.</p>
          </div>
        ) : (
          <>
            {/* Desktop Table View */}
            <div className="hidden md:block bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
              <table className="min-w-full divide-y divide-slate-800">
                <thead className="bg-slate-900">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Client / Visitor
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Contact Info
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Topic & Date
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Requirements / Details
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-4 text-right text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 bg-slate-950/30">
                  {filteredConsultations.map((item, index) => {
                    const recordId = item._id || item.id || index;
                    return (
                      <tr key={recordId} className="hover:bg-slate-900/60 transition-colors">
                        <td className="px-6 py-4">
                          <div className="font-semibold text-white flex items-center gap-2">
                            <User className="w-4 h-4 text-sky-400" />
                            <span>{item.name}</span>
                          </div>
                          {item.businessName && item.businessName !== "N/A" && (
                            <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1">
                              <Building2 className="w-3 h-3 text-slate-500" />
                              <span>{item.businessName}</span>
                            </div>
                          )}
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-300">
                          <div className="space-y-1">
                            <a
                              href={`tel:${item.phone}`}
                              className="flex items-center gap-1.5 text-sky-400 hover:underline"
                            >
                              <Phone className="w-3.5 h-3.5" />
                              <span>{item.phone}</span>
                            </a>
                            <a
                              href={`mailto:${item.email}`}
                              className="flex items-center gap-1.5 text-slate-400 hover:text-slate-200"
                            >
                              <Mail className="w-3.5 h-3.5" />
                              <span className="text-xs">{item.email}</span>
                            </a>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-block px-2.5 py-1 text-xs font-mono font-semibold rounded-md bg-sky-500/10 text-sky-400 border border-sky-500/20 mb-1">
                            {item.service || "General Consultation"}
                          </span>
                          <div className="flex items-center gap-1 text-xs text-slate-400">
                            <Calendar className="w-3 h-3 text-slate-500" />
                            <span>Pref Date: {item.preferredDate || "Not specified"}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-300 max-w-xs">
                          <p className="line-clamp-2 hover:line-clamp-none text-xs leading-relaxed text-slate-200">
                            {item.message || "No specific details provided."}
                          </p>
                          <span className="text-[10px] text-slate-500 block mt-1">
                            Booked: {item.createdAt ? new Date(item.createdAt).toLocaleString() : "Recent"}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <select
                            value={item.status || "New"}
                            onChange={(e) => handleStatusChange(recordId, e.target.value)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-semibold border outline-none cursor-pointer bg-slate-900 ${getStatusBadgeClass(item.status || "New")}`}
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
                            className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white transition"
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
                    className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3 shadow-lg"
                  >
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <div>
                        <h3 className="font-bold text-white text-lg">{item.name}</h3>
                        <span className="text-xs font-mono text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20">
                          {item.service || "General Consultation"}
                        </span>
                      </div>
                      <button
                        onClick={() => handleDelete(recordId)}
                        className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white transition"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="space-y-2 text-sm text-slate-300">
                      <a href={`tel:${item.phone}`} className="flex items-center gap-2 text-sky-400">
                        <Phone className="w-4 h-4" />
                        <span>{item.phone}</span>
                      </a>
                      <a href={`mailto:${item.email}`} className="flex items-center gap-2 text-slate-400">
                        <Mail className="w-4 h-4" />
                        <span>{item.email}</span>
                      </a>
                      {item.businessName && item.businessName !== "N/A" && (
                        <div className="flex items-center gap-2 text-slate-400 text-xs">
                          <Building2 className="w-4 h-4 text-slate-500" />
                          <span>Business: {item.businessName}</span>
                        </div>
                      )}
                      <div className="pt-2 border-t border-slate-800/80">
                        <p className="text-xs font-semibold text-slate-400 uppercase">Message:</p>
                        <p className="text-sm text-slate-200 mt-1">{item.message || "No message provided."}</p>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                      <select
                        value={item.status || "New"}
                        onChange={(e) => handleStatusChange(recordId, e.target.value)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold border outline-none bg-slate-900 ${getStatusBadgeClass(item.status || "New")}`}
                      >
                        <option value="New">New</option>
                        <option value="Contacted">Contacted</option>
                        <option value="Scheduled">Scheduled</option>
                        <option value="Completed">Completed</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>

                      <span className="text-[11px] text-slate-500">
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
