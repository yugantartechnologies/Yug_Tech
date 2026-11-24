import React, { useState, useEffect } from 'react';
import AdminSidebar from './AdminSidebar';
import AdminLogin from './AdminLogin';
import { 
  ROLE_DEFINITIONS, 
  getCurrentAdmin, 
  switchRole, 
  getPermissionsMap, 
  updateRolePermissions, 
  grantSupremeToAll, 
  resetPermissions, 
  isGlobalAccessEnabled, 
  setGlobalAccess,
  AUTH_EVENT_NAME 
} from './adminAuth';
import { 
  ShieldCheck, 
  Users, 
  Crown, 
  Check, 
  X, 
  Sparkles, 
  Globe, 
  Lock, 
  Unlock 
} from 'lucide-react';

export default function AdminAccessControl() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [adminState, setAdminState] = useState(getCurrentAdmin());
  const [permissionsMap, setPermissionsMap] = useState(getPermissionsMap());
  const [globalAccess, setGlobalAccessState] = useState(isGlobalAccessEnabled());
  const [feedbackMsg, setFeedbackMsg] = useState('');

  const refreshState = () => {
    setAdminState(getCurrentAdmin());
    setPermissionsMap(getPermissionsMap());
    setGlobalAccessState(isGlobalAccessEnabled());
  };

  useEffect(() => {
    refreshState();
    const handleAuth = () => refreshState();
    window.addEventListener(AUTH_EVENT_NAME, handleAuth);
    window.addEventListener('storage', handleAuth);
    return () => {
      window.removeEventListener(AUTH_EVENT_NAME, handleAuth);
      window.removeEventListener('storage', handleAuth);
    };
  }, []);

  const handleRoleSwitch = (newRoleId) => {
    switchRole(newRoleId);
    setFeedbackMsg(`Switched active role to ${ROLE_DEFINITIONS[newRoleId]?.name}!`);
    setTimeout(() => setFeedbackMsg(''), 3000);
  };

  const handleTogglePermission = (roleId, permKey) => {
    const currentVal = permissionsMap[roleId]?.[permKey] || false;
    updateRolePermissions(roleId, { [permKey]: !currentVal });
    setFeedbackMsg(`Updated ${permKey} for ${ROLE_DEFINITIONS[roleId]?.name}`);
    setTimeout(() => setFeedbackMsg(''), 3000);
  };

  const handleGrantSupreme = () => {
    if (window.confirm("Grant all supreme permissions to ALL roles globally? Everyone will have full unrestricted access.")) {
      grantSupremeToAll();
      setFeedbackMsg("All Supreme Permissions have been granted to EVERY role globally! 👑");
      setTimeout(() => setFeedbackMsg(''), 4000);
    }
  };

  const handleResetDefaults = () => {
    if (window.confirm("Reset role permissions to default standard levels?")) {
      resetPermissions();
      setFeedbackMsg("Role permissions reset to default specifications.");
      setTimeout(() => setFeedbackMsg(''), 3000);
    }
  };

  const handleToggleGlobalAccess = () => {
    const nextVal = !globalAccess;
    setGlobalAccess(nextVal);
    setGlobalAccessState(nextVal);
    setFeedbackMsg(nextVal ? "Global Open Access enabled: Anyone can access the admin panel!" : "Restricted Access mode enabled.");
    setTimeout(() => setFeedbackMsg(''), 3000);
  };

  const permissionKeys = [
    { key: 'canViewInquiries', label: 'View Inquiries', desc: 'Can view courses, services, and general leads' },
    { key: 'canEditInquiries', label: 'Edit & Update Status', desc: 'Can update lead status, notes, and progress' },
    { key: 'canDeleteInquiries', label: 'Delete Inquiries', desc: 'Can permanently remove inquiries' },
    { key: 'canExportData', label: 'Export Data (CSV/Excel)', desc: 'Can download inquiries and client datasets' },
    { key: 'canManageStudents', label: 'Manage Students', desc: 'Can create and modify registered student records' },
    { key: 'canManageAttendance', label: 'Manage Attendance', desc: 'Can mark and verify QR/manual attendance' },
    { key: 'canManageFaqs', label: 'Manage FAQs', desc: 'Can add, edit, or remove website FAQs' },
    { key: 'canManageRoles', label: 'Manage Roles & Access', desc: 'Can configure permissions and supreme roles' },
    { key: 'canManageSettings', label: 'System Settings', desc: 'Can configure global site access & controls' }
  ];

  if (!adminState?.isLoggedIn) {
    return <AdminLogin onLoginSuccess={() => setAdminState(getCurrentAdmin())} />;
  }

  return (
    <div className="min-h-screen bg-slate-100/70 text-slate-800 flex font-sans">
      <AdminSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="flex-1 p-4 md:p-8 overflow-x-hidden">
        {/* Mobile Header */}
        <div className="md:hidden mb-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="bg-white border border-slate-300 text-slate-800 px-4 py-2 rounded-lg shadow-2xs text-xs font-semibold"
          >
            ☰ Menu
          </button>
        </div>

        {/* Page Title & Status Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-7">
          <div>
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-600">
                <Crown className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 flex items-center gap-2">
                  <span>Roles & Access Control</span>
                </h1>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Universal Role-Based Access Control (RBAC) & Administrative Privileges
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleGrantSupreme}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 shadow-xs transition cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Grant Full Access to All</span>
            </button>
          </div>
        </div>

        {feedbackMsg && (
          <div className="mb-6 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2 shadow-2xs">
            <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{feedbackMsg}</span>
          </div>
        )}

        {/* Current Active Session & Access Controls */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-8">
          
          {/* Active User Card */}
          <div className="bg-white border border-slate-200/90 p-5 rounded-2xl shadow-xs flex flex-col justify-between">
            <div>
              <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold">Current Session Role</p>
              <div className="flex items-center gap-3 mt-2">
                <span className="text-2xl">{adminState?.roleDefinition?.icon || '👑'}</span>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{adminState?.roleDefinition?.name || 'Super Admin'}</h3>
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold border mt-0.5 border-amber-300 text-amber-700 bg-amber-50">
                    {adminState?.roleDefinition?.badge || 'Supreme Super Admin'}
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-3 leading-relaxed">
                {adminState?.roleDefinition?.description || 'Full unrestricted access.'}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
              User: <span className="text-slate-900 font-semibold">{adminState?.user?.name || 'Admin'}</span> ({adminState?.user?.email || 'RAM@YT2026'})
            </div>
          </div>

          {/* Quick Role Switcher */}
          <div className="bg-white border border-slate-200/90 p-5 rounded-2xl shadow-xs flex flex-col justify-between">
            <div>
              <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-blue-600" />
                <span>Switch Active Role</span>
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Test and experience how the control center functions under different permission levels:
              </p>

              <div className="grid grid-cols-1 gap-1.5 mt-3">
                {Object.values(ROLE_DEFINITIONS).map((role) => {
                  const isActive = adminState.role === role.id;
                  return (
                    <button
                      key={role.id}
                      onClick={() => handleRoleSwitch(role.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center justify-between transition cursor-pointer ${
                        isActive
                          ? "bg-blue-600 text-white shadow-xs font-bold"
                          : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/80"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{role.icon}</span>
                        <span>{role.name}</span>
                      </span>
                      {isActive && <Check className="w-3.5 h-3.5" />}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Global Access Control Card */}
          <div className="bg-white border border-slate-200/90 p-5 rounded-2xl shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Access Mode</span>
                </p>
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${
                  globalAccess 
                    ? "bg-emerald-50 text-emerald-700 border-emerald-300" 
                    : "bg-blue-50 text-blue-700 border-blue-300"
                }`}>
                  {globalAccess ? "Universal Open" : "Standard Passcode"}
                </span>
              </div>

              <h4 className="text-base font-bold text-slate-900 mt-2">
                {globalAccess ? "Anyone Can Access" : "Protected by Credentials"}
              </h4>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                {globalAccess
                  ? "Global Open Access is ENABLED. Anyone visiting /admin can enter directly without credential checks."
                  : "Protected Mode active. Users must authenticate with valid Admin ID & Password."}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex gap-2">
              <button
                onClick={handleToggleGlobalAccess}
                className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition cursor-pointer ${
                  globalAccess
                    ? "bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300"
                    : "bg-blue-600 hover:bg-blue-700 text-white shadow-xs"
                }`}
              >
                {globalAccess ? <Lock className="w-3.5 h-3.5" /> : <Unlock className="w-3.5 h-3.5" />}
                <span>{globalAccess ? "Require Password" : "Enable Open Mode"}</span>
              </button>
              <button
                onClick={handleResetDefaults}
                className="bg-white hover:bg-slate-50 text-slate-700 px-3 py-2 rounded-xl text-xs font-semibold border border-slate-300 transition shadow-2xs cursor-pointer"
                title="Reset Permissions to Default"
              >
                Reset
              </button>
            </div>
          </div>

        </div>

        {/* Dynamic Permissions Matrix Table */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-5 md:p-6 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <h2 className="text-lg md:text-xl font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-blue-600" />
                <span>Interactive Permissions Matrix</span>
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Click any toggle below to customize permissions for each specific role in real time.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                <Check className="w-3.5 h-3.5" /> Granted
              </span>
              <span className="text-slate-300">|</span>
              <span className="flex items-center gap-1 text-slate-400 font-semibold">
                <X className="w-3.5 h-3.5" /> Restricted
              </span>
            </div>
          </div>

          <div className="overflow-x-auto -mx-3 sm:mx-0 px-3 sm:px-0 border border-slate-200 rounded-xl">
            <table className="w-full min-w-[720px] text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-slate-600 uppercase tracking-wider font-bold">
                  <th className="py-3 px-4 w-72">Role / Capability</th>
                  {permissionKeys.map((p) => (
                    <th key={p.key} className="py-3 px-3 text-center" title={p.desc}>
                      <span className="block">{p.label}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                {Object.values(ROLE_DEFINITIONS).map((role) => {
                  const rolePerms = permissionsMap[role.id] || {};
                  const isCurrentRole = adminState.role === role.id;

                  return (
                    <tr key={role.id} className={`hover:bg-slate-50/70 transition-colors ${isCurrentRole ? 'bg-blue-50/40' : ''}`}>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2.5">
                          <span className="text-lg">{role.icon}</span>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-slate-900 text-sm">{role.name}</span>
                              {isCurrentRole && (
                                <span className="text-[10px] bg-blue-600 text-white px-1.5 py-0.2 rounded font-mono font-bold">
                                  ACTIVE
                                </span>
                              )}
                            </div>
                            <span className="text-[10px] text-slate-400 block">{role.badge}</span>
                          </div>
                        </div>
                      </td>

                      {permissionKeys.map((p) => {
                        const isGranted = !!rolePerms[p.key];
                        return (
                          <td key={p.key} className="py-3 px-3 text-center">
                            <button
                              onClick={() => handleTogglePermission(role.id, p.key)}
                              className={`p-2 rounded-xl transition cursor-pointer ${
                                isGranted
                                  ? "bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-300"
                                  : "bg-slate-50 text-slate-400 hover:text-slate-600 border border-slate-200"
                              }`}
                              title={`Toggle ${p.label} for ${role.name}`}
                            >
                              {isGranted ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
                            </button>
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
