import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import BASE_URL, { fetchFast } from '../BASEURL';
import { 
  BookOpen, Briefcase, MessageSquare, PhoneCall, Award, ArrowRight, Activity, 
  CalendarCheck, Search, RefreshCw, User, Phone, Mail, Clock, Eye, Trash2 
} from 'lucide-react';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [counts, setCounts] = useState({
    courseInquiries: 0,
    generalInquiries: 0,
    serviceInquiries: 0,
    freeConsultations: 0,
    teamConsultations: 0,
    internships: 0
  });

  const [inquiriesFeed, setInquiriesFeed] = useState([]);
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('adminLoggedIn')) {
      navigate('/admin/login');
    }
  }, [navigate]);

  const loadDashboardData = async () => {
    setIsRefreshing(true);

    const fetchCategory = async (storageKey, endpoint, typeLabel, badgeColor, linkPath) => {
      let localData = [];
      try {
        localData = JSON.parse(localStorage.getItem(storageKey) || "[]");
      } catch (e) {
        console.error(`Read error for ${storageKey}`, e);
      }

      let remoteData = [];
      try {
        const res = await fetchFast(`${BASE_URL}${endpoint}`, {}, 2500);
        if (res.ok) {
          remoteData = await res.json();
        }
      } catch (e) {
        // Backend offline or sleeping
      }

      const combinedMap = new Map();
      [...remoteData, ...localData].forEach((item) => {
        const key = item._id || item.id || `${item.email}_${item.createdAt || item.submittedAt}`;
        if (!combinedMap.has(key)) {
          combinedMap.set(key, {
            ...item,
            _type: typeLabel,
            _badgeColor: badgeColor,
            _linkPath: linkPath,
            _detail: item.course || item.service || item.internship || item.inquiryType || item.message || "General Inquiry"
          });
        }
      });

      return Array.from(combinedMap.values());
    };

    try {
      const [courses, generals, services, freeConsults, teamConsults, internships] = await Promise.all([
        fetchCategory("yug_course_inquiries", "/api/course-inquiries", "Course", "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", "/admin/course-inquiries"),
        fetchCategory("yug_general_inquiries", "/api/inquiries", "Contact", "bg-orange-500/10 text-orange-400 border-orange-500/20", "/admin/general-inquiries"),
        fetchCategory("yug_service_bookings", "/api/service-bookings", "Service", "bg-indigo-500/10 text-indigo-400 border-indigo-500/20", "/admin/service-inquiries"),
        fetchCategory("yug_free_consultations", "/api/free-consultations", "Free Consult", "bg-sky-500/10 text-sky-400 border-sky-500/20", "/admin/free-consultations"),
        fetchCategory("yug_team_consultations", "/api/team-consultations", "Team Consult", "bg-blue-500/10 text-blue-400 border-blue-500/20", "/admin/team-consultations"),
        fetchCategory("yug_internship_inquiries", "/api/internship-inquiries", "Internship", "bg-purple-500/10 text-purple-400 border-purple-500/20", "/admin/internships")
      ]);

      setCounts({
        courseInquiries: courses.length,
        generalInquiries: generals.length,
        serviceInquiries: services.length,
        freeConsultations: freeConsults.length,
        teamConsultations: teamConsults.length,
        internships: internships.length
      });

      const merged = [
        ...courses,
        ...generals,
        ...services,
        ...freeConsults,
        ...teamConsults,
        ...internships
      ];

      merged.sort((a, b) => {
        const timeA = new Date(a.createdAt || a.submittedAt || 0).getTime();
        const timeB = new Date(b.createdAt || b.submittedAt || 0).getTime();
        return timeB - timeA;
      });

      setInquiriesFeed(merged);
    } catch (err) {
      console.error("Error loading dashboard data:", err);
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    loadDashboardData();
    const interval = setInterval(loadDashboardData, 3000);
    const handleSync = () => loadDashboardData();
    window.addEventListener("storage", handleSync);
    window.addEventListener("yug_inquiry_submitted", handleSync);

    return () => {
      clearInterval(interval);
      window.removeEventListener("storage", handleSync);
      window.removeEventListener("yug_inquiry_submitted", handleSync);
    };
  }, []);

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.removeItem('adminLoggedIn');
      navigate('/admin/login');
    }
  };

  const handleDeleteInquiry = async (item) => {
    if (!window.confirm(`Are you sure you want to delete inquiry from ${item.name || 'this client'}?`)) return;

    const recordId = item._id || item.id;
    let endpoint = "";
    let storageKey = "";

    switch (item._type) {
      case "Course":
        endpoint = `/api/course-inquiries/${recordId}`;
        storageKey = "yug_course_inquiries";
        break;
      case "Service":
        endpoint = `/api/service-bookings/${recordId}`;
        storageKey = "yug_service_bookings";
        break;
      case "Contact":
        endpoint = `/api/inquiries/${recordId}`;
        storageKey = "yug_general_inquiries";
        break;
      case "Free Consult":
        endpoint = `/api/free-consultations/${recordId}`;
        storageKey = "yug_free_consultations";
        break;
      case "Team Consult":
        endpoint = `/api/team-consultations/${recordId}`;
        storageKey = "yug_team_consultations";
        break;
      case "Internship":
        endpoint = `/api/internship-inquiries/${recordId}`;
        storageKey = "yug_internship_inquiries";
        break;
      default:
        break;
    }

    if (storageKey) {
      try {
        const existing = JSON.parse(localStorage.getItem(storageKey) || "[]");
        const updated = existing.filter((x) => (x._id || x.id) !== recordId);
        localStorage.setItem(storageKey, JSON.stringify(updated));
      } catch (e) {}
    }

    if (endpoint) {
      try {
        await fetchFast(`${BASE_URL}${endpoint}`, { method: "DELETE" }, 2500);
      } catch (e) {}
    }

    setInquiriesFeed((prev) => prev.filter((x) => (x._id || x.id) !== recordId));
    loadDashboardData();
  };

  const statCards = [
    {
      title: "Course Inquiries",
      count: counts.courseInquiries,
      path: "/admin/course-inquiries",
      type: "Course",
      icon: <BookOpen className="w-6 h-6 text-emerald-400" />,
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20 hover:border-emerald-500/40",
      textColor: "text-emerald-400",
      description: "Student registrations & course demo requests."
    },
    {
      title: "General Inquiries",
      count: counts.generalInquiries,
      path: "/admin/general-inquiries",
      type: "Contact",
      icon: <MessageSquare className="w-6 h-6 text-orange-400" />,
      bg: "bg-orange-500/10",
      border: "border-orange-500/20 hover:border-orange-500/40",
      textColor: "text-orange-400",
      description: "Direct messages from the Contact Us form."
    },
    {
      title: "Service Inquiries",
      count: counts.serviceInquiries,
      path: "/admin/service-inquiries",
      type: "Service",
      icon: <Briefcase className="w-6 h-6 text-indigo-400" />,
      bg: "bg-indigo-500/10",
      border: "border-indigo-500/20 hover:border-indigo-500/40",
      textColor: "text-indigo-400",
      description: "IT Solution bookings & client quotes."
    },
    {
      title: "Free Consultations",
      count: counts.freeConsultations,
      path: "/admin/free-consultations",
      type: "Free Consult",
      icon: <CalendarCheck className="w-6 h-6 text-sky-400" />,
      bg: "bg-sky-500/10",
      border: "border-sky-500/20 hover:border-sky-500/40",
      textColor: "text-sky-400",
      description: "Book Free Consultation strategy requests."
    },
    {
      title: "Team Consultations",
      count: counts.teamConsultations,
      path: "/admin/team-consultations",
      type: "Team Consult",
      icon: <PhoneCall className="w-6 h-6 text-blue-400" />,
      bg: "bg-blue-500/10",
      border: "border-blue-500/20 hover:border-blue-500/40",
      textColor: "text-blue-400",
      description: "Talk-to-Team callback consultation requests."
    },
    {
      title: "Internship Applications",
      count: counts.internships,
      path: "/admin/internships",
      type: "Internship",
      icon: <Award className="w-6 h-6 text-purple-400" />,
      bg: "bg-purple-500/10",
      border: "border-purple-500/20 hover:border-purple-500/40",
      textColor: "text-purple-400",
      description: "Student career internship applications."
    }
  ];

  const totalInquiries = Object.values(counts).reduce((a, b) => a + b, 0);

  // Filter feed by active tab and search query
  const filteredFeed = inquiriesFeed.filter((item) => {
    if (activeTab !== "all" && item._type !== activeTab) {
      return false;
    }
    if (!searchTerm) return true;
    const term = searchTerm.toLowerCase();
    return (
      (item.name && item.name.toLowerCase().includes(term)) ||
      (item.email && item.email.toLowerCase().includes(term)) ||
      (item.phone && item.phone.toLowerCase().includes(term)) ||
      (item._detail && item._detail.toLowerCase().includes(term)) ||
      (item._type && item._type.toLowerCase().includes(term))
    );
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex">
      <AdminSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} onLogout={handleLogout} />

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8 overflow-x-hidden">
        {/* Mobile menu trigger */}
        <div className="md:hidden mb-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="bg-slate-900 border border-slate-800 text-white px-4 py-2 rounded-lg shadow"
          >
            ☰ Menu
          </button>
        </div>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white flex items-center gap-3">
              <span>Admin Control Center</span>
              <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Live Sync
              </span>
            </h1>
            <p className="text-slate-400 text-sm mt-1">
              Yugantar Technologies — Real-Time Online Inquiries & Operations Hub.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={loadDashboardData}
              disabled={isRefreshing}
              className="bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 hover:text-white px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-sky-400 ${isRefreshing ? 'animate-spin' : ''}`} />
              <span>Refresh Now</span>
            </button>

            <div className="flex items-center gap-3 bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl">
              <Activity className="w-5 h-5 text-emerald-400" />
              <div>
                <p className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">Total Inquiries</p>
                <p className="text-lg font-bold text-white leading-none mt-0.5">{isLoading ? "..." : totalInquiries}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {statCards.map((card, idx) => (
            <Link
              key={idx}
              to={card.path}
              className={`bg-slate-900/60 border ${card.border} p-5 rounded-2xl hover:shadow-xl transition-all duration-300 group flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2.5 rounded-xl ${card.bg}`}>
                    {card.icon}
                  </div>
                  <span className={`text-3xl font-black ${card.textColor}`}>
                    {isLoading ? "..." : card.count}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-slate-200 transition-colors">
                  {card.title}
                </h3>
                <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-white transition-colors">
                <span>Open Section</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* LIVE INQUIRIES STREAM FEED SECTION */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 md:p-6 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <h2 className="text-lg md:text-xl font-bold text-white">Live Online Inquiries Feed</h2>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Real-time submissions from Courses, Services, Consultations, and Contact forms.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by name, email, phone, course..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 text-slate-200 pl-10 pr-4 py-2 rounded-xl text-xs outline-none focus:border-sky-500 transition"
              />
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-4 scrollbar-thin">
            {[
              { id: "all", label: `All (${totalInquiries})` },
              { id: "Course", label: `Courses (${counts.courseInquiries})` },
              { id: "Service", label: `Services (${counts.serviceInquiries})` },
              { id: "Free Consult", label: `Free Consultations (${counts.freeConsultations})` },
              { id: "Team Consult", label: `Team Calls (${counts.teamConsultations})` },
              { id: "Internship", label: `Internships (${counts.internships})` },
              { id: "Contact", label: `Contact Us (${counts.generalInquiries})` }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? "bg-sky-500 text-white shadow-md shadow-sky-500/20"
                    : "bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Inquiries Table */}
          {filteredFeed.length === 0 ? (
            <div className="text-center py-12 border border-dashed border-slate-800 rounded-xl bg-slate-950/40">
              <MessageSquare className="w-10 h-10 text-slate-600 mx-auto mb-2" />
              <p className="text-sm font-semibold text-slate-300">No Inquiries Found</p>
              <p className="text-xs text-slate-500 mt-1">Any new submissions from the website will appear here in real time.</p>
            </div>
          ) : (
            <>
              {/* Desktop & Tablet Table View */}
              <div className="hidden sm:block overflow-x-auto -mx-3 sm:mx-0 px-3 sm:px-0">
                <table className="w-full min-w-[640px] text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-800 bg-slate-950/60 text-slate-400 uppercase tracking-wider font-semibold">
                      <th className="py-3 px-4">Inquirer</th>
                      <th className="py-3 px-4">Contact</th>
                      <th className="py-3 px-4">Type & Details</th>
                      <th className="py-3 px-4">Date / Time</th>
                      <th className="py-3 px-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 font-medium">
                    {filteredFeed.map((item, index) => {
                      const idKey = item._id || item.id || index;
                      const dateVal = item.createdAt || item.submittedAt;
                      const formattedDate = dateVal ? new Date(dateVal).toLocaleString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit"
                      }) : "Recent";

                      return (
                        <tr key={idKey} className="hover:bg-slate-800/40 transition-colors">
                          <td className="py-3 px-4 text-white font-semibold">
                            <div className="flex items-center gap-2">
                              <User className="w-3.5 h-3.5 text-slate-400" />
                              <span>{item.name || "Anonymous"}</span>
                            </div>
                            {item.businessName && item.businessName !== "N/A" && (
                              <span className="text-[11px] text-slate-400 block ml-5">
                                {item.businessName}
                              </span>
                            )}
                          </td>

                          <td className="py-3 px-4 text-slate-300">
                            <div className="flex items-center gap-2">
                              {item.phone && (
                                <a href={`tel:${item.phone}`} className="flex items-center gap-1.5 text-sky-400 hover:underline font-semibold">
                                  <Phone className="w-3 h-3" />
                                  <span>{item.phone}</span>
                                </a>
                              )}
                              {item.phone && (
                                <a
                                  href={`https://wa.me/91${item.phone.replace(/[^0-9]/g, "")}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/30 transition flex items-center gap-1"
                                  title="Chat on WhatsApp"
                                >
                                  <span>💬 WA</span>
                                </a>
                              )}
                            </div>
                            {item.email && (
                              <a href={`mailto:${item.email}`} className="flex items-center gap-1.5 text-slate-400 hover:text-slate-200 mt-0.5">
                                <Mail className="w-3 h-3" />
                                <span className="truncate max-w-[180px]">{item.email}</span>
                              </a>
                            )}
                          </td>

                          <td className="py-3 px-4">
                            <span className={`inline-block px-2.5 py-0.5 rounded-md text-[11px] font-semibold border ${item._badgeColor}`}>
                              {item._type}
                            </span>
                            <p className="text-slate-300 text-xs mt-1 max-w-[240px] truncate" title={item._detail}>
                              {item._detail}
                            </p>
                          </td>

                          <td className="py-3 px-4 text-slate-400 whitespace-nowrap">
                            <div className="flex items-center gap-1.5">
                              <Clock className="w-3 h-3 text-slate-500" />
                              <span>{formattedDate}</span>
                            </div>
                          </td>

                          <td className="py-3 px-4 text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              <Link
                                to={item._linkPath}
                                className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition"
                                title="Open Full Page"
                              >
                                <Eye className="w-3 h-3 text-sky-400" />
                                <span>View</span>
                              </Link>

                              <button
                                onClick={() => handleDeleteInquiry(item)}
                                className="p-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white transition"
                                title="Delete Record"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Mobile Dedicated Cards View */}
              <div className="sm:hidden space-y-3">
                {filteredFeed.map((item, index) => {
                  const idKey = item._id || item.id || index;
                  const dateVal = item.createdAt || item.submittedAt;
                  const formattedDate = dateVal ? new Date(dateVal).toLocaleString("en-IN", {
                    day: "numeric",
                    month: "short",
                    hour: "2-digit",
                    minute: "2-digit"
                  }) : "Recent";

                  return (
                    <div
                      key={idKey}
                      className="bg-slate-950/80 border border-slate-800/90 rounded-xl p-4 space-y-3 shadow-md"
                    >
                      <div className="flex items-start justify-between gap-2 border-b border-slate-800/60 pb-2.5">
                        <div>
                          <div className="flex items-center gap-2">
                            <User className="w-3.5 h-3.5 text-sky-400" />
                            <h4 className="font-bold text-white text-sm">{item.name || "Anonymous"}</h4>
                          </div>
                          {item.businessName && item.businessName !== "N/A" && (
                            <p className="text-[11px] text-slate-400 ml-5">{item.businessName}</p>
                          )}
                        </div>

                        <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-semibold border ${item._badgeColor}`}>
                          {item._type}
                        </span>
                      </div>

                      <div className="bg-slate-900/90 rounded-lg p-2.5 border border-slate-800/80">
                        <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Inquiry Detail</p>
                        <p className="text-xs text-slate-200 mt-0.5 break-words font-medium">{item._detail}</p>
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs">
                        <div className="flex items-center gap-2">
                          {item.phone && (
                            <a
                              href={`tel:${item.phone}`}
                              className="px-2.5 py-1 rounded bg-sky-500/15 text-sky-300 border border-sky-500/30 font-semibold inline-flex items-center gap-1"
                            >
                              <Phone className="w-3 h-3" />
                              <span>{item.phone}</span>
                            </a>
                          )}
                          {item.phone && (
                            <a
                              href={`https://wa.me/91${item.phone.replace(/[^0-9]/g, "")}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-2 py-1 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-semibold inline-flex items-center gap-1"
                            >
                              <span>💬 WA</span>
                            </a>
                          )}
                        </div>

                        <span className="text-[11px] text-slate-400 flex items-center gap-1">
                          <Clock className="w-3 h-3 text-slate-500" />
                          {formattedDate}
                        </span>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-slate-800/60">
                        <Link
                          to={item._linkPath}
                          className="text-xs text-sky-400 hover:text-sky-300 font-semibold inline-flex items-center gap-1"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Open Full Feed →</span>
                        </Link>

                        <button
                          onClick={() => handleDeleteInquiry(item)}
                          className="px-2.5 py-1 rounded text-xs bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white transition inline-flex items-center gap-1"
                        >
                          <Trash2 className="w-3 h-3" />
                          <span>Delete</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;
