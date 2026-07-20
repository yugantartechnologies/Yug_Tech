import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard, 
  BookOpen, 
  MessageSquare, 
  Briefcase, 
  Award, 
  GraduationCap, 
  HelpCircle, 
  CalendarCheck, 
  LogOut 
} from "lucide-react";

export default function AdminSidebar({ sidebarOpen, setSidebarOpen, onLogout }) {

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg transition font-medium text-sm
     ${isActive
        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20"
        : "text-slate-400 hover:bg-slate-800 hover:text-white"
     }`;

  return (
    <>
      {/* Overlay (Mobile) */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/60 z-30 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-40 h-screen w-64
          bg-slate-900 border-r border-slate-800 text-slate-200
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static md:sticky md:top-0
          shadow-xl
        `}
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-800 bg-slate-950">
          <h2 className="text-2xl font-bold text-center text-white">Admin Panel</h2>
          <p className="text-xs text-sky-400/80 text-center mt-1 font-semibold tracking-wider uppercase">YugAntar Technologies</p>
        </div>

        {/* Links */}
        <nav
          className="p-4 space-y-2 overflow-y-auto h-[calc(100vh-120px)]"
          onClick={() => setSidebarOpen(false)}
        >
          <div className="mb-2">
            <p className="text-xs font-semibold text-slate-500 uppercase px-4 py-2 font-mono tracking-wider">Main</p>
            <NavLink to="/admin" end className={linkClass}>
              <LayoutDashboard className="w-5 h-5" /> 
              <span>Dashboard</span>
            </NavLink>
          </div>

          <div className="mb-2">
            <p className="text-xs font-semibold text-slate-500 uppercase px-4 py-2 font-mono tracking-wider">Inquiries</p>
            <NavLink to="/admin/course-inquiries" className={linkClass}>
              <BookOpen className="w-5 h-5" /> 
              <span>Course Inquiries</span>
            </NavLink>

            <NavLink to="/admin/general-inquiries" className={linkClass}>
              <MessageSquare className="w-5 h-5" /> 
              <span>General Inquiries</span>
            </NavLink>

            <NavLink to="/admin/service-inquiries" className={linkClass}>
              <Briefcase className="w-5 h-5" /> 
              <span>Service Inquiries</span>
            </NavLink>
          </div>

          <div className="mb-2">
            <p className="text-xs font-semibold text-slate-500 uppercase px-4 py-2 font-mono tracking-wider">Management</p>
            <NavLink to="/admin/internships" className={linkClass}>
              <Award className="w-5 h-5" /> 
              <span>Internships</span>
            </NavLink>

            <NavLink to="/admin/students" className={linkClass}>
              <GraduationCap className="w-5 h-5" /> 
              <span>Manage Students</span>
            </NavLink>

            <NavLink to="/admin/attendance" className={linkClass}>
              <CalendarCheck className="w-5 h-5" />
              <span>Attendance</span>
            </NavLink>

            <NavLink to="/admin/Fqa" className={linkClass}>
              <HelpCircle className="w-5 h-5" /> 
              <span>FAQ</span>
            </NavLink>
          </div>
        </nav>

        {/* Logout Button */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-800 bg-slate-950">
          <button
            onClick={() => {
              if (window.confirm("Are you sure you want to logout?")) {
                onLogout();
              }
            }}
            className="flex items-center justify-center gap-2 px-4 py-3 w-full rounded-lg
                       bg-red-600 hover:bg-red-700 text-white transition font-medium text-sm
                       shadow-md"
          >
            <LogOut className="w-5 h-5" /> 
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}

