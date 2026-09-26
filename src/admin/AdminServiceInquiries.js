import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import BASE_URL from "../BASEURL";
import { Briefcase, Search, Trash2, Mail, Phone, Calendar, User, RefreshCw } from "lucide-react";

const AdminServiceInquiries = () => {
  const [inquiries, setInquiries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("adminLoggedIn")) {
      navigate("/admin/login");
    }
  }, [navigate]);

  const loadInquiries = async () => {
    setIsSyncing(true);
    let localData = [];
    try {
      localData = JSON.parse(localStorage.getItem("yug_service_bookings") || "[]");
    } catch (e) {
      console.error("Local storage read error", e);
    }

    let remoteData = [];
    try {
      const response = await fetch(`${BASE_URL}/api/service-bookings`);
      if (response.ok) {
        remoteData = await response.json();
      }
    } catch (e) {
      console.log("Backend offline or endpoint unmapped, using local storage queue.");
    }

    // Merge and deduplicate records by id or unique attributes
    const combinedMap = new Map();
    [...remoteData, ...localData].forEach((item) => {
      const key = item._id || item.id || `${item.email}_${item.createdAt || item.submittedAt}`;
      if (!combinedMap.has(key)) {
        combinedMap.set(key, item);
      }
    });

    setInquiries(Array.from(combinedMap.values()));
    setIsSyncing(false);
  };

  useEffect(() => {
    loadInquiries();
    const interval = setInterval(loadInquiries, 3000);
    const handleSync = () => loadInquiries();
    window.addEventListener("storage", handleSync);
    window.addEventListener("yug_inquiry_submitted", handleSync);

    return () => {
      clearInterval(interval);
      window.removeEventListener("storage", handleSync);
      window.removeEventListener("yug_inquiry_submitted", handleSync);
    };
  }, []);

  const handleDelete = (idToDelete) => {
    if (!window.confirm("Are you sure you want to delete this service inquiry record?")) return;

    // Remove from localStorage
    try {
      const existing = JSON.parse(localStorage.getItem("yug_service_bookings") || "[]");
      const updated = existing.filter(
        (item) => (item._id || item.id) !== idToDelete
      );
      localStorage.setItem("yug_service_bookings", JSON.stringify(updated));
    } catch (e) {
      console.error("Error updating local storage", e);
    }

    // Update state
    setInquiries((prev) =>
      prev.filter((item) => (item._id || item.id) !== idToDelete)
    );
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("adminLoggedIn");
      navigate("/admin/login");
    }
  };

  const filteredInquiries = inquiries.filter((inq) => {
    const term = searchTerm.toLowerCase();
    return (
      (inq.name && inq.name.toLowerCase().includes(term)) ||
      (inq.email && inq.email.toLowerCase().includes(term)) ||
      (inq.phone && inq.phone.toLowerCase().includes(term)) ||
      (inq.service && inq.service.toLowerCase().includes(term)) ||
      (inq.message && inq.message.toLowerCase().includes(term))
    );
  });

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
              <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
                  Service Inquiries
                </h1>
                <p className="text-xs text-slate-400 mt-1">
                  Requests submitted through IT service booking modals across the site.
                </p>
              </div>
            </div>
          </div>

          {/* Action Bar & Search */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={loadInquiries}
              disabled={isSyncing}
              className="bg-slate-900 border border-slate-800 text-slate-300 hover:text-white px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 hover:bg-slate-800 transition"
              title="Refresh Data"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-indigo-400 ${isSyncing ? "animate-spin" : ""}`} />
              <span>Refresh</span>
            </button>

            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by client, phone, service..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 text-slate-200 pl-10 pr-4 py-2 rounded-xl text-sm outline-none focus:border-indigo-500 transition"
              />
            </div>
          </div>
        </div>

        {filteredInquiries.length === 0 ? (
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-12 text-center text-slate-400">
            <Briefcase className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <p className="text-lg font-bold text-slate-300">No Service Inquiries Found</p>
            <p className="text-sm text-slate-500 mt-1">IT Service booking requests will appear here.</p>
          </div>
        ) : (
          <>
            {/* Desktop Table View */}
            <div className="hidden md:block bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
              <table className="min-w-full divide-y divide-slate-800">
                <thead className="bg-slate-900">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Client Name
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Contact Details
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Requested Service
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Requirements / Note
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Submitted Date
                    </th>
                    <th className="px-6 py-4 text-right text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 bg-slate-950/30">
                  {filteredInquiries.map((inq, index) => {
                    const recordId = inq._id || inq.id || index;
                    const dateStr = inq.createdAt || inq.submittedAt;
                    return (
                      <tr key={recordId} className="hover:bg-slate-900/60 transition-colors">
                        <td className="px-6 py-4 font-semibold text-white">
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-indigo-400" />
                            <span>{inq.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-300">
                          <div className="space-y-1">
                            <a
                              href={`tel:${inq.phone}`}
                              className="flex items-center gap-1.5 text-indigo-400 hover:underline"
                            >
                              <Phone className="w-3.5 h-3.5" />
                              <span>{inq.phone}</span>
                            </a>
                            <a
                              href={`mailto:${inq.email}`}
                              className="flex items-center gap-1.5 text-slate-400 hover:text-slate-200"
                            >
                              <Mail className="w-3.5 h-3.5" />
                              <span className="text-xs">{inq.email}</span>
                            </a>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                            {inq.service || "IT Service"}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-300 max-w-xs truncate hover:whitespace-normal">
                          {inq.message || "N/A"}
                        </td>
                        <td className="px-6 py-4 text-xs text-slate-400">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-slate-500" />
                            <span>
                              {dateStr ? new Date(dateStr).toLocaleString() : "Recent"}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button
                            onClick={() => handleDelete(recordId)}
                            className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white transition"
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
              {filteredInquiries.map((inq, index) => {
                const recordId = inq._id || inq.id || index;
                const dateStr = inq.createdAt || inq.submittedAt;
                return (
                  <div
                    key={recordId}
                    className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3 shadow-lg"
                  >
                    <div className="flex items-start justify-between border-b border-slate-800 pb-3 gap-2">
                      <div>
                        <h3 className="font-bold text-white text-lg">{inq.name}</h3>
                        <span className="inline-block text-xs bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-2.5 py-0.5 rounded-full font-semibold mt-1">
                          {inq.service}
                        </span>
                      </div>
                      <button
                        onClick={() => handleDelete(recordId)}
                        className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white transition shrink-0"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="space-y-2 text-sm text-slate-300">
                      <a href={`tel:${inq.phone}`} className="flex items-center gap-2 text-indigo-400">
                        <Phone className="w-4 h-4" />
                        <span>{inq.phone}</span>
                      </a>
                      <a href={`mailto:${inq.email}`} className="flex items-center gap-2 text-slate-400">
                        <Mail className="w-4 h-4" />
                        <span>{inq.email}</span>
                      </a>
                      <div className="pt-2 border-t border-slate-800/80">
                        <p className="text-xs font-semibold text-slate-400 uppercase">Requirements:</p>
                        <p className="text-sm text-slate-200 mt-1">{inq.message || "N/A"}</p>
                      </div>
                    </div>

                    <div className="text-xs text-slate-500 pt-2 border-t border-slate-800/60 flex items-center justify-between">
                      <span>Submitted:</span>
                      <span>{dateStr ? new Date(dateStr).toLocaleString() : "Recent"}</span>
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

export default AdminServiceInquiries;