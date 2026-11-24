import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import AdminLogin from './AdminLogin';
import { inquiryService, INQUIRY_CATEGORIES, subscribeToInquiries } from '../services/inquiryService';
import { 
  getCurrentAdmin, 
  hasPermission, 
  logoutAdmin, 
  AUTH_EVENT_NAME 
} from './adminAuth';
import { 
  BookOpen, Briefcase, MessageSquare, PhoneCall, Award, ArrowRight, Activity, 
  CalendarCheck, Search, RefreshCw, User, Phone, Mail, Clock, Eye, Trash2, 
  Download, PlusCircle, CheckCircle, Crown
} from 'lucide-react';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [adminState, setAdminState] = useState(getCurrentAdmin());
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
  const [actionNotice, setActionNotice] = useState("");

  const showToast = (msg) => {
    setActionNotice(msg);
    setTimeout(() => setActionNotice(""), 3500);
  };

  useEffect(() => {
    const current = getCurrentAdmin();
    setAdminState(current);

    const handleAuth = () => setAdminState(getCurrentAdmin());
    window.addEventListener(AUTH_EVENT_NAME, handleAuth);
    return () => window.removeEventListener(AUTH_EVENT_NAME, handleAuth);
  }, []);

  const loadDashboardData = async () => {
    setIsRefreshing(true);

    try {
      const [courses, generals, services, freeConsults, teamConsults, internships] = await Promise.all([
        inquiryService.fetchCategory(
          INQUIRY_CATEGORIES.COURSE.storageKey,
          INQUIRY_CATEGORIES.COURSE.endpoint,
          INQUIRY_CATEGORIES.COURSE.typeLabel,
          INQUIRY_CATEGORIES.COURSE.badgeColor,
          INQUIRY_CATEGORIES.COURSE.linkPath
        ),
        inquiryService.fetchCategory(
          INQUIRY_CATEGORIES.CONTACT.storageKey,
          INQUIRY_CATEGORIES.CONTACT.endpoint,
          INQUIRY_CATEGORIES.CONTACT.typeLabel,
          INQUIRY_CATEGORIES.CONTACT.badgeColor,
          INQUIRY_CATEGORIES.CONTACT.linkPath
        ),
        inquiryService.fetchCategory(
          INQUIRY_CATEGORIES.SERVICE.storageKey,
          INQUIRY_CATEGORIES.SERVICE.endpoint,
          INQUIRY_CATEGORIES.SERVICE.typeLabel,
          INQUIRY_CATEGORIES.SERVICE.badgeColor,
          INQUIRY_CATEGORIES.SERVICE.linkPath
        ),
        inquiryService.fetchCategory(
          INQUIRY_CATEGORIES.FREE_CONSULT.storageKey,
          INQUIRY_CATEGORIES.FREE_CONSULT.endpoint,
          INQUIRY_CATEGORIES.FREE_CONSULT.typeLabel,
          INQUIRY_CATEGORIES.FREE_CONSULT.badgeColor,
          INQUIRY_CATEGORIES.FREE_CONSULT.linkPath
        ),
        inquiryService.fetchCategory(
          INQUIRY_CATEGORIES.TEAM_CONSULT.storageKey,
          INQUIRY_CATEGORIES.TEAM_CONSULT.endpoint,
          INQUIRY_CATEGORIES.TEAM_CONSULT.typeLabel,
          INQUIRY_CATEGORIES.TEAM_CONSULT.badgeColor,
          INQUIRY_CATEGORIES.TEAM_CONSULT.linkPath
        ),
        inquiryService.fetchCategory(
          INQUIRY_CATEGORIES.INTERNSHIP.storageKey,
          INQUIRY_CATEGORIES.INTERNSHIP.endpoint,
          INQUIRY_CATEGORIES.INTERNSHIP.typeLabel,
          INQUIRY_CATEGORIES.INTERNSHIP.badgeColor,
          INQUIRY_CATEGORIES.INTERNSHIP.linkPath
        )
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
    const unsubscribe = subscribeToInquiries(() => {
      loadDashboardData();
    });

    const interval = setInterval(loadDashboardData, 5000);

    return () => {
      unsubscribe();
      clearInterval(interval);
    };
  }, []);

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out of the admin panel?")) {
      logoutAdmin();
      navigate('/admin/login');
    }
  };

  const handleDeleteInquiry = async (item) => {
    if (!hasPermission('canDeleteInquiries')) {
      alert(`Your current role (${adminState?.roleDefinition?.name || 'Admin'}) does not have permission to delete inquiries.`);
      return;
    }

    if (!window.confirm(`Are you sure you want to delete inquiry from ${item.name || 'this client'}?`)) return;

    const recordId = item._id || item.id;
    let endpoint = "";
    let storageKey = "";

    switch (item._type) {
      case "Course":
        endpoint = INQUIRY_CATEGORIES.COURSE.endpoint;
        storageKey = INQUIRY_CATEGORIES.COURSE.storageKey;
        break;
      case "Service":
        endpoint = INQUIRY_CATEGORIES.SERVICE.endpoint;
        storageKey = INQUIRY_CATEGORIES.SERVICE.storageKey;
        break;
      case "Contact":
        endpoint = INQUIRY_CATEGORIES.CONTACT.endpoint;
        storageKey = INQUIRY_CATEGORIES.CONTACT.storageKey;
        break;
      case "Free Consult":
        endpoint = INQUIRY_CATEGORIES.FREE_CONSULT.endpoint;
        storageKey = INQUIRY_CATEGORIES.FREE_CONSULT.storageKey;
        break;
      case "Team Consult":
        endpoint = INQUIRY_CATEGORIES.TEAM_CONSULT.endpoint;
        storageKey = INQUIRY_CATEGORIES.TEAM_CONSULT.storageKey;
        break;
      case "Internship":
        endpoint = INQUIRY_CATEGORIES.INTERNSHIP.endpoint;
        storageKey = INQUIRY_CATEGORIES.INTERNSHIP.storageKey;
        break;
      default:
        break;
    }

    if (storageKey) {
      await inquiryService.deleteInquiry(storageKey, endpoint, recordId);
      setInquiriesFeed((prev) => prev.filter((x) => (x._id || x.id) !== recordId));
      showToast("Inquiry deleted successfully!");
      loadDashboardData();
    }
  };

  const handleStatusChange = async (item, newStatus) => {
    if (!hasPermission('canEditInquiries')) {
      alert(`Your current role (${adminState?.roleDefinition?.name || 'Admin'}) does not have permission to update inquiry status.`);
      return;
    }

    const recordId = item._id || item.id;
    let endpoint = "";
    let storageKey = "";

    switch (item._type) {
      case "Course":
        endpoint = INQUIRY_CATEGORIES.COURSE.endpoint;
        storageKey = INQUIRY_CATEGORIES.COURSE.storageKey;
        break;
      case "Service":
        endpoint = INQUIRY_CATEGORIES.SERVICE.endpoint;
        storageKey = INQUIRY_CATEGORIES.SERVICE.storageKey;
        break;
      case "Contact":
        endpoint = INQUIRY_CATEGORIES.CONTACT.endpoint;
        storageKey = INQUIRY_CATEGORIES.CONTACT.storageKey;
        break;
      case "Free Consult":
        endpoint = INQUIRY_CATEGORIES.FREE_CONSULT.endpoint;
        storageKey = INQUIRY_CATEGORIES.FREE_CONSULT.storageKey;
        break;
      case "Team Consult":
        endpoint = INQUIRY_CATEGORIES.TEAM_CONSULT.endpoint;
        storageKey = INQUIRY_CATEGORIES.TEAM_CONSULT.storageKey;
        break;
      case "Internship":
        endpoint = INQUIRY_CATEGORIES.INTERNSHIP.endpoint;
        storageKey = INQUIRY_CATEGORIES.INTERNSHIP.storageKey;
        break;
      default:
        break;
    }

    if (storageKey) {
      await inquiryService.updateStatus(storageKey, endpoint, recordId, newStatus);
      showToast(`Updated status to "${newStatus}"!`);
      loadDashboardData();
    }
  };

  const handleSimulateInquiry = async (typeKey = 'COURSE') => {
    const newInq = await inquiryService.simulateTestInquiry(typeKey);
    showToast(`Test ${typeKey} inquiry generated for ${newInq.name}!`);
    loadDashboardData();
  };

  const handleExportAll = () => {
    if (!hasPermission('canExportData')) {
      alert(`Your current role (${adminState?.roleDefinition?.name || 'Admin'}) does not have export rights.`);
      return;
    }
    inquiryService.exportToCSV(inquiriesFeed, `yugantar_inquiries_${new Date().toISOString().slice(0, 10)}.csv`);
  };

  const statCards = [
    {
      title: "Course Inquiries",
      count: counts.courseInquiries,
      path: "/admin/course-inquiries",
      type: "Course",
      icon: <BookOpen className="w-5 h-5 text-emerald-600" />,
      bg: "bg-emerald-50 border border-emerald-200/70",
      textColor: "text-slate-900",
      description: "Student registrations & course demo requests."
    },
    {
      title: "General Inquiries",
      count: counts.generalInquiries,
      path: "/admin/general-inquiries",
      type: "Contact",
      icon: <MessageSquare className="w-5 h-5 text-orange-600" />,
      bg: "bg-orange-50 border border-orange-200/70",
      textColor: "text-slate-900",
      description: "Direct messages from the Contact Us form."
    },
    {
      title: "Service Inquiries",
      count: counts.serviceInquiries,
      path: "/admin/service-inquiries",
      type: "Service",
      icon: <Briefcase className="w-5 h-5 text-indigo-600" />,
      bg: "bg-indigo-50 border border-indigo-200/70",
      textColor: "text-slate-900",
      description: "IT Solution bookings & client quotes."
    },
    {
      title: "Free Consultations",
      count: counts.freeConsultations,
      path: "/admin/free-consultations",
      type: "Free Consult",
      icon: <CalendarCheck className="w-5 h-5 text-blue-600" />,
      bg: "bg-blue-50 border border-blue-200/70",
      textColor: "text-slate-900",
      description: "Book Free Consultation strategy requests."
    },
    {
      title: "Team Consultations",
      count: counts.teamConsultations,
      path: "/admin/team-consultations",
      type: "Team Consult",
      icon: <PhoneCall className="w-5 h-5 text-cyan-600" />,
      bg: "bg-cyan-50 border border-cyan-200/70",
      textColor: "text-slate-900",
      description: "Talk-to-Team callback consultation requests."
    },
    {
      title: "Internship Applications",
      count: counts.internships,
      path: "/admin/internships",
      type: "Internship",
      icon: <Award className="w-5 h-5 text-purple-600" />,
      bg: "bg-purple-50 border border-purple-200/70",
      textColor: "text-slate-900",
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
      (item._type && item._type.toLowerCase().includes(term)) ||
      (item.status && item.status.toLowerCase().includes(term))
    );
  });

  if (!adminState?.isLoggedIn) {
    return <AdminLogin onLoginSuccess={() => setAdminState(getCurrentAdmin())} />;
  }

  return (
    <div className="min-h-screen bg-slate-100/70 text-slate-800 flex font-sans">
      <AdminSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} onLogout={handleLogout} />

      {/* Main Content Area */}
      <div className="flex-1 p-4 md:p-8 overflow-x-hidden">
        {/* Mobile menu trigger */}
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

        {/* Global Access & Supreme Banner */}
        <div className="mb-6 p-4 rounded-2xl bg-white border border-slate-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center text-lg shrink-0">
              {adminState?.roleDefinition?.icon || '👑'}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-slate-900 font-bold text-sm">
                  Logged in as {adminState?.user?.name || 'Super Admin'}
                </span>
                <span className={`px-2 py-0.2 rounded text-[10px] font-bold border ${adminState?.roleDefinition?.badgeColor || 'border-amber-300 text-amber-700 bg-amber-50'}`}>
                  {adminState?.roleDefinition?.badge || 'Supreme Super Admin'}
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Executive Access Active. Full capabilities enabled across online inquiry management.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to="/admin/roles"
              className="bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-300 px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition shadow-2xs"
            >
              <Crown className="w-3.5 h-3.5 text-amber-500" />
              <span>Roles & Permissions</span>
            </Link>
          </div>
        </div>

        {actionNotice && (
          <div className="mb-6 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2 animate-fade-in shadow-2xs">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{actionNotice}</span>
          </div>
        )}

        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-7">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 flex items-center gap-3">
              <span>Admin Control Center</span>
              <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-300 flex items-center gap-1.5 font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                Live Sync Active
              </span>
            </h1>
            <p className="text-slate-500 text-sm mt-1">
              Yugantar Technologies — Real-Time Online Inquiries & Operations Hub.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {/* Quick Test Inquiry Simulator */}
            <button
              onClick={() => handleSimulateInquiry('COURSE')}
              className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition shadow-2xs cursor-pointer"
              title="Create a test inquiry to verify live sync"
            >
              <PlusCircle className="w-3.5 h-3.5 text-blue-600" />
              <span>+ Simulate Inquiry</span>
            </button>

            {/* Export CSV */}
            <button
              onClick={handleExportAll}
              className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition shadow-2xs cursor-pointer"
              title="Export all inquiries to CSV"
            >
              <Download className="w-3.5 h-3.5 text-blue-600" />
              <span>Export CSV</span>
            </button>

            {/* Refresh */}
            <button
              onClick={loadDashboardData}
              disabled={isRefreshing}
              className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition shadow-2xs cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-blue-600 ${isRefreshing ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </button>

            {/* Total Badge */}
            <div className="flex items-center gap-2.5 bg-white border border-slate-200/90 px-3.5 py-1.5 rounded-xl shadow-2xs">
              <Activity className="w-4 h-4 text-emerald-600" />
              <div>
                <p className="text-[9px] text-slate-400 font-mono uppercase tracking-wider font-bold">Total Inquiries</p>
                <p className="text-base font-bold text-slate-900 leading-none mt-0.5">{isLoading ? "..." : totalInquiries}</p>
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
              className="bg-white border border-slate-200/90 p-5 rounded-2xl shadow-xs hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2.5 rounded-xl ${card.bg}`}>
                    {card.icon}
                  </div>
                  <span className="text-3xl font-black text-slate-900">
                    {isLoading ? "..." : card.count}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {card.title}
                </h3>
                <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600 group-hover:text-blue-700 transition-colors">
                <span>View All Inquiries</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* LIVE INQUIRIES STREAM FEED SECTION */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-5 md:p-6 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <h2 className="text-lg md:text-xl font-bold text-slate-900">Live Online Inquiries Feed</h2>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Real-time submissions from Courses, IT Services, Free Consultations, and Contact forms.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search by name, email, phone, course..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 text-slate-900 placeholder:text-slate-400 pl-10 pr-4 py-2 rounded-xl text-xs outline-none focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100 transition shadow-2xs"
              />
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-4 scrollbar-thin">
            {[
              { id: "all", label: `All Inquiries (${totalInquiries})` },
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
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white shadow-xs font-bold"
                    : "bg-slate-50 text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/80"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Inquiries Table */}
          {filteredFeed.length === 0 ? (
            <div className="text-center py-12 border border-dashed border-slate-200 rounded-xl bg-slate-50/50">
              <MessageSquare className="w-10 h-10 text-slate-400 mx-auto mb-2" />
              <p className="text-sm font-semibold text-slate-700">No Inquiries Found</p>
              <p className="text-xs text-slate-500 mt-1">Any new submissions from the website will appear here in real time.</p>
              <button
                onClick={() => handleSimulateInquiry('COURSE')}
                className="mt-4 inline-flex items-center gap-1.5 text-xs bg-blue-600 hover:bg-blue-700 text-white font-bold px-3.5 py-2 rounded-xl transition shadow-xs cursor-pointer"
              >
                <PlusCircle className="w-3.5 h-3.5" />
                <span>Simulate Sample Inquiry</span>
              </button>
            </div>
          ) : (
            <>
              {/* Desktop & Tablet Table View */}
              <div className="hidden sm:block border border-slate-200 rounded-xl overflow-hidden">
                <table className="w-full min-w-[700px] text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50 text-slate-600 uppercase tracking-wider font-bold">
                      <th className="py-3 px-4">Inquirer</th>
                      <th className="py-3 px-4">Contact</th>
                      <th className="py-3 px-4">Type & Details</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4">Date / Time</th>
                      <th className="py-3 px-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium">
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
                        <tr key={idKey} className="hover:bg-slate-50/70 transition-colors">
                          <td className="py-3 px-4 text-slate-900 font-semibold">
                            <div className="flex items-center gap-2">
                              <User className="w-3.5 h-3.5 text-slate-400" />
                              <span className="font-bold">{item.name || "Anonymous"}</span>
                            </div>
                            {item.businessName && item.businessName !== "N/A" && (
                              <span className="text-[11px] text-slate-500 block ml-5">
                                {item.businessName}
                              </span>
                            )}
                          </td>

                          <td className="py-3 px-4 text-slate-700">
                            <div className="flex items-center gap-2">
                              {item.phone && (
                                <a href={`tel:${item.phone}`} className="flex items-center gap-1.5 text-blue-600 hover:underline font-semibold">
                                  <Phone className="w-3 h-3" />
                                  <span>{item.phone}</span>
                                </a>
                              )}
                              {item.phone && (
                                <a
                                  href={`https://wa.me/91${item.phone.replace(/[^0-9]/g, "")}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-300 hover:bg-emerald-100 transition flex items-center gap-1 font-bold"
                                  title="Chat on WhatsApp"
                                >
                                  <span>💬 WA</span>
                                </a>
                              )}
                            </div>
                            {item.email && (
                              <a href={`mailto:${item.email}`} className="flex items-center gap-1.5 text-slate-500 hover:text-slate-800 mt-0.5 text-[11px]">
                                <Mail className="w-3 h-3" />
                                <span className="truncate max-w-[180px]">{item.email}</span>
                              </a>
                            )}
                          </td>

                          <td className="py-3 px-4">
                            <span className="inline-block px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                              {item._type}
                            </span>
                            <p className="text-slate-600 text-xs mt-1 max-w-[240px] truncate" title={item._detail}>
                              {item._detail}
                            </p>
                          </td>

                          <td className="py-3 px-4">
                            <select
                              value={item.status || "New"}
                              onChange={(e) => handleStatusChange(item, e.target.value)}
                              className="bg-slate-50 border border-slate-300 text-slate-800 rounded-lg px-2 py-1 text-[11px] font-semibold outline-none focus:border-blue-600 focus:bg-white cursor-pointer shadow-2xs"
                            >
                              <option value="New">🟢 New</option>
                              <option value="In Review">🟡 In Review</option>
                              <option value="Contacted">🔵 Contacted</option>
                              <option value="Scheduled">🟣 Scheduled</option>
                              <option value="Resolved">✅ Resolved</option>
                              <option value="Closed">⚪ Closed</option>
                            </select>
                          </td>

                          <td className="py-3 px-4 text-slate-500 whitespace-nowrap">
                            <div className="flex items-center gap-1.5">
                              <Clock className="w-3 h-3 text-slate-400" />
                              <span>{formattedDate}</span>
                            </div>
                          </td>

                          <td className="py-3 px-4 text-right">
                            <div className="flex items-center justify-end gap-1.5">
                              <Link
                                to={item._linkPath}
                                className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition"
                                title="Open Full Section"
                              >
                                <Eye className="w-3 h-3 text-blue-600" />
                                <span>View</span>
                              </Link>

                              {hasPermission('canDeleteInquiries') && (
                                <button
                                  onClick={() => handleDeleteInquiry(item)}
                                  className="p-1.5 rounded-lg bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 transition cursor-pointer"
                                  title="Delete Record"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              )}
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
                      className="bg-slate-50/70 border border-slate-200 rounded-xl p-4 space-y-3 shadow-2xs"
                    >
                      <div className="flex items-start justify-between gap-2 border-b border-slate-200 pb-2.5">
                        <div>
                          <div className="flex items-center gap-2">
                            <User className="w-3.5 h-3.5 text-blue-600" />
                            <h4 className="font-bold text-slate-900 text-sm">{item.name || "Anonymous"}</h4>
                          </div>
                          {item.businessName && item.businessName !== "N/A" && (
                            <p className="text-[11px] text-slate-500 ml-5">{item.businessName}</p>
                          )}
                        </div>

                        <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                          {item._type}
                        </span>
                      </div>

                      <div className="bg-white rounded-lg p-2.5 border border-slate-200">
                        <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Inquiry Detail</p>
                        <p className="text-xs text-slate-700 mt-0.5 break-words font-medium">{item._detail}</p>
                      </div>

                      <div className="flex items-center justify-between gap-2 text-xs">
                        <span className="text-[11px] text-slate-500">Status:</span>
                        <select
                          value={item.status || "New"}
                          onChange={(e) => handleStatusChange(item, e.target.value)}
                          className="bg-white border border-slate-300 text-slate-800 rounded px-2 py-0.5 text-xs font-semibold outline-none"
                        >
                          <option value="New">🟢 New</option>
                          <option value="In Review">🟡 In Review</option>
                          <option value="Contacted">🔵 Contacted</option>
                          <option value="Scheduled">🟣 Scheduled</option>
                          <option value="Resolved">✅ Resolved</option>
                        </select>
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs">
                        <div className="flex items-center gap-2">
                          {item.phone && (
                            <a
                              href={`tel:${item.phone}`}
                              className="px-2.5 py-1 rounded bg-blue-50 text-blue-700 border border-blue-200 font-semibold inline-flex items-center gap-1"
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
                              className="px-2 py-1 rounded bg-emerald-50 text-emerald-700 border border-emerald-300 font-semibold inline-flex items-center gap-1"
                            >
                              <span>💬 WA</span>
                            </a>
                          )}
                        </div>

                        <span className="text-[11px] text-slate-400 flex items-center gap-1">
                          <Clock className="w-3 h-3 text-slate-400" />
                          {formattedDate}
                        </span>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-slate-200">
                        <Link
                          to={item._linkPath}
                          className="text-xs text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-1"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Open Full Feed →</span>
                        </Link>

                        {hasPermission('canDeleteInquiries') && (
                          <button
                            onClick={() => handleDeleteInquiry(item)}
                            className="px-2.5 py-1 rounded text-xs bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 transition inline-flex items-center gap-1 cursor-pointer"
                          >
                            <Trash2 className="w-3 h-3" />
                            <span>Delete</span>
                          </button>
                        )}
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
