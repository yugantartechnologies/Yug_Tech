import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { 
  LayoutDashboard, 
  BookOpen, 
  MessageSquare, 
  Briefcase, 
  PhoneCall,
  CalendarCheck,
  Award, 
  HelpCircle, 
  LogOut,
  Crown,
  ChevronDown
} from "lucide-react";
import { 
  getCurrentAdmin, 
  switchRole, 
  logoutAdmin, 
  ROLE_DEFINITIONS, 
  AUTH_EVENT_NAME 
} from "./adminAuth";

export default function AdminSidebar({ sidebarOpen, setSidebarOpen, onLogout }) {
  const navigate = useNavigate();
  const [adminState, setAdminState] = useState(getCurrentAdmin());
  const [roleMenuOpen, setRoleMenuOpen] = useState(false);

  useEffect(() => {
    const handleAuth = () => setAdminState(getCurrentAdmin());
    window.addEventListener(AUTH_EVENT_NAME, handleAuth);
    window.addEventListener('storage', handleAuth);
    return () => {
      window.removeEventListener(AUTH_EVENT_NAME, handleAuth);
      window.removeEventListener('storage', handleAuth);
    };
  }, []);

  const handleRoleChange = (newRole) => {
    switchRole(newRole);
    setRoleMenuOpen(false);
  };

  const handleLogoutClick = () => {
    if (window.confirm("Are you sure you want to log out of the admin panel?")) {
      if (onLogout) {
        onLogout();
      } else {
        logoutAdmin();
        navigate('/admin/login');
      }
    }
  };

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition text-xs font-semibold
     ${isActive
        ? "bg-blue-600 text-white shadow-xs font-bold"
        : "text-slate-400 hover:bg-slate-800/80 hover:text-white font-medium"
     }`;

  return (
    <>
      {/* Overlay (Mobile) */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/60 z-30 md:hidden backdrop-blur-xs"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-40 h-screen w-64
          bg-[#0f172a] border-r border-slate-800 text-slate-200
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static md:sticky md:top-0
          shadow-xl flex flex-col justify-between shrink-0
        `}
      >
        {/* Header */}
        <div className="p-5 border-b border-slate-800/90 bg-[#0b1329]">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-white tracking-tight">Admin Center</h2>
              <p className="text-[10px] text-blue-400 font-semibold tracking-wider uppercase font-mono">YugAntar Technologies</p>
            </div>
            <span className="text-xl" title={adminState?.roleDefinition?.name || 'Admin'}>{adminState?.roleDefinition?.icon || '👑'}</span>
          </div>

          {/* Active Role Selector Pill */}
          <div className="mt-3 relative">
            <button
              onClick={() => setRoleMenuOpen(!roleMenuOpen)}
              className="w-full bg-slate-900 hover:bg-slate-850 border border-slate-700/80 px-2.5 py-1.5 rounded-lg flex items-center justify-between text-[11px] font-semibold text-slate-200 transition cursor-pointer"
            >
              <span className="flex items-center gap-1.5 truncate">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span className="truncate">{adminState?.roleDefinition?.name || 'Super Admin'}</span>
              </span>
              <ChevronDown className="w-3 h-3 text-slate-400 shrink-0" />
            </button>

            {roleMenuOpen && (
              <div className="absolute left-0 right-0 top-full mt-1.5 bg-slate-950 border border-slate-700 rounded-xl shadow-2xl p-1.5 z-50">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 py-1">Select Role</p>
                {Object.values(ROLE_DEFINITIONS).map((role) => (
                  <button
                    key={role.id}
                    onClick={() => handleRoleChange(role.id)}
                    className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium flex items-center gap-2 transition cursor-pointer ${
                      adminState.role === role.id
                        ? "bg-blue-600 text-white font-bold"
                        : "text-slate-300 hover:bg-slate-800 hover:text-white"
                    }`}
                  >
                    <span>{role.icon}</span>
                    <span>{role.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Links Navigation */}
        <nav
          className="p-3.5 space-y-1.5 overflow-y-auto flex-1 scrollbar-thin"
          onClick={() => setSidebarOpen(false)}
        >
          <div className="mb-2">
            <p className="text-[10px] font-bold text-slate-400 uppercase px-3 py-1 font-mono tracking-wider">Main</p>
            <NavLink to="/admin" end className={linkClass}>
              <LayoutDashboard className="w-4 h-4" /> 
              <span>Live Dashboard</span>
            </NavLink>
          </div>

          <div className="mb-2">
            <p className="text-[10px] font-bold text-slate-400 uppercase px-3 py-1 font-mono tracking-wider">Inquiries & Leads</p>
            <NavLink to="/admin/course-inquiries" className={linkClass}>
              <BookOpen className="w-4 h-4 text-emerald-400" /> 
              <span>Course Inquiries</span>
            </NavLink>

            <NavLink to="/admin/general-inquiries" className={linkClass}>
              <MessageSquare className="w-4 h-4 text-orange-400" /> 
              <span>General Inquiries</span>
            </NavLink>

            <NavLink to="/admin/service-inquiries" className={linkClass}>
              <Briefcase className="w-4 h-4 text-indigo-400" /> 
              <span>Service Inquiries</span>
            </NavLink>

            <NavLink to="/admin/free-consultations" className={linkClass}>
              <CalendarCheck className="w-4 h-4 text-sky-400" /> 
              <span>Free Consultations</span>
            </NavLink>

            <NavLink to="/admin/team-consultations" className={linkClass}>
              <PhoneCall className="w-4 h-4 text-cyan-400" /> 
              <span>Team Calls</span>
            </NavLink>
          </div>

          <div className="mb-2">
            <p className="text-[10px] font-bold text-slate-400 uppercase px-3 py-1 font-mono tracking-wider">Administration</p>
            <NavLink to="/admin/roles" className={linkClass}>
              <Crown className="w-4 h-4 text-amber-400" /> 
              <span>Roles & Supreme Access</span>
            </NavLink>

            <NavLink to="/admin/internships" className={linkClass}>
              <Award className="w-4 h-4 text-purple-400" /> 
              <span>Internships</span>
            </NavLink>

            <NavLink to="/admin/Fqa" className={linkClass}>
              <HelpCircle className="w-4 h-4 text-teal-400" /> 
              <span>FAQ Management</span>
            </NavLink>
          </div>
        </nav>

        {/* Footer / Logout */}
        <div className="p-3.5 border-t border-slate-800/90 bg-[#0b1329]">
          <button
            onClick={handleLogoutClick}
            className="flex items-center justify-center gap-2 px-3 py-2.5 w-full rounded-xl
                       bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 hover:text-rose-300 border border-rose-500/20 transition font-bold text-xs cursor-pointer"
          >
            <LogOut className="w-4 h-4" /> 
            <span>Exit Admin Panel</span>
          </button>
        </div>
      </aside>
    </>
  );
}
