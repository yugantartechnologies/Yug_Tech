import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import BASE_URL from '../BASEURL';
import { BookOpen, Briefcase, MessageSquare, PhoneCall, Award, ArrowRight, Activity, CalendarCheck } from 'lucide-react';

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

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem('adminLoggedIn')) {
      navigate('/admin/login');
    }
  }, [navigate]);

  useEffect(() => {
    const loadDashboardStats = async () => {
      setIsLoading(true);

      const fetchCategoryCount = async (storageKey, endpoint) => {
        let localData = [];
        try {
          localData = JSON.parse(localStorage.getItem(storageKey) || "[]");
        } catch (e) {
          console.error(`Read error for ${storageKey}`, e);
        }

        let remoteData = [];
        try {
          const res = await fetch(`${BASE_URL}${endpoint}`);
          if (res.ok) {
            remoteData = await res.json();
          }
        } catch (e) {
          // backend offline or sleeping
        }

        const combinedMap = new Map();
        [...remoteData, ...localData].forEach((item) => {
          const key = item._id || item.id || `${item.email}_${item.createdAt || item.submittedAt}`;
          if (!combinedMap.has(key)) {
            combinedMap.set(key, item);
          }
        });

        return combinedMap.size;
      };

      const [courseCount, generalCount, serviceCount, freeCount, teamCount, internshipCount] = await Promise.all([
        fetchCategoryCount("yug_course_inquiries", "/api/course-inquiries"),
        fetchCategoryCount("yug_general_inquiries", "/api/inquiries"),
        fetchCategoryCount("yug_service_bookings", "/api/service-bookings"),
        fetchCategoryCount("yug_free_consultations", "/api/free-consultations"),
        fetchCategoryCount("yug_team_consultations", "/api/team-consultations"),
        fetchCategoryCount("yug_internship_inquiries", "/api/internship-inquiries")
      ]);

      setCounts({
        courseInquiries: courseCount,
        generalInquiries: generalCount,
        serviceInquiries: serviceCount,
        freeConsultations: freeCount,
        teamConsultations: teamCount,
        internships: internshipCount
      });
      setIsLoading(false);
    };

    loadDashboardStats();
    const interval = setInterval(loadDashboardStats, 3000);
    const handleSync = () => loadDashboardStats();
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

  const statCards = [
    {
      title: "Course Inquiries",
      count: counts.courseInquiries,
      path: "/admin/course-inquiries",
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
      icon: <Award className="w-6 h-6 text-purple-400" />,
      bg: "bg-purple-500/10",
      border: "border-purple-500/20 hover:border-purple-500/40",
      textColor: "text-purple-400",
      description: "Student career internship applications."
    }
  ];

  const totalInquiries = Object.values(counts).reduce((a, b) => a + b, 0);

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
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
              Admin Overview
            </h1>
            <p className="text-slate-400 text-sm mt-1">
              Welcome back to YugAntar Technologies Admin Control Panel.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-slate-900 border border-slate-800 px-4 py-2.5 rounded-xl">
            <Activity className="w-5 h-5 text-emerald-400 animate-pulse" />
            <div>
              <p className="text-xs text-slate-400 font-mono">Total Submissions Received</p>
              <p className="text-lg font-bold text-white leading-none mt-0.5">{isLoading ? "..." : totalInquiries}</p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {statCards.map((card, idx) => (
            <Link
              key={idx}
              to={card.path}
              className={`bg-slate-900/60 border ${card.border} p-6 rounded-2xl hover:shadow-xl transition-all duration-300 group flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl ${card.bg}`}>
                    {card.icon}
                  </div>
                  <span className={`text-3xl font-black ${card.textColor}`}>
                    {isLoading ? "..." : card.count}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-slate-200 transition-colors">
                  {card.title}
                </h3>
                <p className="text-slate-400 text-xs mt-1.5 leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-white transition-colors">
                <span>View Records</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;