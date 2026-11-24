// Centralized Role-Based Access Control (RBAC) & Global Access Management
// For Yugantar Technologies Admin Portal

export const ROLES = {
  SUPER_ADMIN: 'super_admin',
  ADMIN: 'admin',
  MANAGER: 'manager',
  COORDINATOR: 'coordinator',
  VIEWER: 'viewer'
};

export const ROLE_DEFINITIONS = {
  [ROLES.SUPER_ADMIN]: {
    id: ROLES.SUPER_ADMIN,
    name: 'Super Admin',
    badge: 'Supreme Super Admin',
    badgeColor: 'bg-gradient-to-r from-amber-500 to-orange-600 text-white border-amber-400/40 shadow-amber-500/20 shadow-md',
    description: 'Supreme control over the entire platform. Full unrestricted access to manage inquiries, delete records, manage students, FAQs, and configure global roles & permissions.',
    icon: '👑',
    level: 100
  },
  [ROLES.ADMIN]: {
    id: ROLES.ADMIN,
    name: 'Admin',
    badge: 'Administrator',
    badgeColor: 'bg-indigo-500/15 text-indigo-400 border-indigo-500/30',
    description: 'Full inquiry management, student & attendance operations, FAQ management, and data export.',
    icon: '⚡',
    level: 80
  },
  [ROLES.MANAGER]: {
    id: ROLES.MANAGER,
    name: 'Operations Manager',
    badge: 'Manager',
    badgeColor: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    description: 'View and track all inquiries, update lead pipeline status, direct call & WhatsApp communication, and export reports.',
    icon: '💼',
    level: 60
  },
  [ROLES.COORDINATOR]: {
    id: ROLES.COORDINATOR,
    name: 'Inquiry Coordinator',
    badge: 'Coordinator',
    badgeColor: 'bg-sky-500/15 text-sky-400 border-sky-500/30',
    description: 'View incoming course, service, and consultation inquiries and update handling status.',
    icon: '📋',
    level: 40
  },
  [ROLES.VIEWER]: {
    id: ROLES.VIEWER,
    name: 'Viewer / Guest',
    badge: 'Guest Viewer',
    badgeColor: 'bg-slate-500/15 text-slate-400 border-slate-500/30',
    description: 'Read-only access to view live dashboard inquiries and system metrics.',
    icon: '👁️',
    level: 20
  }
};

export const DEFAULT_PERMISSIONS = {
  [ROLES.SUPER_ADMIN]: {
    canViewInquiries: true,
    canEditInquiries: true,
    canDeleteInquiries: true,
    canExportData: true,
    canManageStudents: true,
    canManageAttendance: true,
    canManageFaqs: true,
    canManageRoles: true,
    canManageSettings: true
  },
  [ROLES.ADMIN]: {
    canViewInquiries: true,
    canEditInquiries: true,
    canDeleteInquiries: true,
    canExportData: true,
    canManageStudents: true,
    canManageAttendance: true,
    canManageFaqs: true,
    canManageRoles: false,
    canManageSettings: false
  },
  [ROLES.MANAGER]: {
    canViewInquiries: true,
    canEditInquiries: true,
    canDeleteInquiries: false,
    canExportData: true,
    canManageStudents: true,
    canManageAttendance: true,
    canManageFaqs: false,
    canManageRoles: false,
    canManageSettings: false
  },
  [ROLES.COORDINATOR]: {
    canViewInquiries: true,
    canEditInquiries: true,
    canDeleteInquiries: false,
    canExportData: false,
    canManageStudents: false,
    canManageAttendance: false,
    canManageFaqs: false,
    canManageRoles: false,
    canManageSettings: false
  },
  [ROLES.VIEWER]: {
    canViewInquiries: true,
    canEditInquiries: false,
    canDeleteInquiries: false,
    canExportData: false,
    canManageStudents: false,
    canManageAttendance: false,
    canManageFaqs: false,
    canManageRoles: false,
    canManageSettings: false
  }
};

const SETTINGS_KEY = 'yug_admin_settings';
const AUTH_EVENT = 'yug_auth_updated';

// Get current dynamic permissions map
export const getPermissionsMap = () => {
  try {
    const raw = localStorage.getItem(`${SETTINGS_KEY}_permissions`);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return DEFAULT_PERMISSIONS;
};

// Check if global open access is enabled (default: true for global open access)
export const isGlobalAccessEnabled = () => {
  try {
    const raw = localStorage.getItem(`${SETTINGS_KEY}_global_access`);
    if (raw !== null) return raw === 'true';
  } catch (e) {}
  return true; // Default to TRUE for universal global access
};

export const setGlobalAccess = (enabled) => {
  try {
    localStorage.setItem(`${SETTINGS_KEY}_global_access`, enabled ? 'true' : 'false');
    window.dispatchEvent(new Event(AUTH_EVENT));
  } catch (e) {}
};

// Get current logged in user & role
export const getCurrentAdmin = () => {
  let role = ROLES.SUPER_ADMIN;
  const defaultUser = {
    name: 'Ram (Admin)',
    email: 'RAM@YT2026',
    role: ROLES.SUPER_ADMIN
  };
  let user = defaultUser;

  try {
    const savedRole = localStorage.getItem('adminRole');
    if (savedRole && ROLE_DEFINITIONS[savedRole]) {
      role = savedRole;
    }
    const savedUser = localStorage.getItem('adminUser');
    if (savedUser) {
      const parsed = JSON.parse(savedUser);
      if (parsed && typeof parsed === 'object') {
        user = { ...defaultUser, ...parsed };
      }
    }
  } catch (e) {}

  // User is logged in only if adminLoggedIn flag is true
  const isLoggedIn = 
    sessionStorage.getItem('adminLoggedIn') === 'true' || 
    localStorage.getItem('adminLoggedIn') === 'true';

  const roleDef = ROLE_DEFINITIONS[role] || ROLE_DEFINITIONS[ROLES.SUPER_ADMIN] || {
    id: ROLES.SUPER_ADMIN,
    name: 'Super Admin',
    badge: 'Supreme Super Admin',
    badgeColor: 'bg-gradient-to-r from-amber-500 to-orange-600 text-white border-amber-400/40 shadow-amber-500/20 shadow-md',
    description: 'Supreme control over the entire platform. Full unrestricted access.',
    icon: '👑',
    level: 100
  };

  // Logged-in admin always gets full supreme permissions to manage all inquiries
  const permissions = DEFAULT_PERMISSIONS[ROLES.SUPER_ADMIN];

  return {
    isLoggedIn,
    role,
    roleDefinition: roleDef,
    user,
    permissions,
    isSuperAdmin: true,
    globalAccess: true
  };
};

// Check if current user has specific permission
export const hasPermission = (permissionName) => {
  const admin = getCurrentAdmin();
  if (admin.isSuperAdmin) return true; // Super Admin has all supreme permissions
  return !!admin.permissions?.[permissionName];
};

// Switch active role immediately
export const switchRole = (newRole, name = null) => {
  if (!ROLE_DEFINITIONS[newRole]) return;
  try {
    localStorage.setItem('adminLoggedIn', 'true');
    localStorage.setItem('adminRole', newRole);
    if (name) {
      const current = getCurrentAdmin().user;
      localStorage.setItem('adminUser', JSON.stringify({ ...current, name, role: newRole }));
    }
    window.dispatchEvent(new Event(AUTH_EVENT));
    window.dispatchEvent(new Event('storage'));
  } catch (e) {
    console.error('Error switching role:', e);
  }
};

// Log in as specific role
export const loginAs = (role = ROLES.SUPER_ADMIN, userDetails = {}) => {
  try {
    localStorage.setItem('adminLoggedIn', 'true');
    localStorage.setItem('adminRole', role);
    const user = {
      name: userDetails.name || ROLE_DEFINITIONS[role]?.name || 'Admin',
      email: userDetails.email || 'admin@yugantartechnologies.com',
      role: role
    };
    localStorage.setItem('adminUser', JSON.stringify(user));
    window.dispatchEvent(new Event(AUTH_EVENT));
    window.dispatchEvent(new Event('storage'));
  } catch (e) {}
};

// Logout
export const logoutAdmin = () => {
  try {
    localStorage.removeItem('adminLoggedIn');
    localStorage.removeItem('adminRole');
    localStorage.removeItem('adminUser');
    window.dispatchEvent(new Event(AUTH_EVENT));
    window.dispatchEvent(new Event('storage'));
  } catch (e) {}
};

// Update custom permissions for any role
export const updateRolePermissions = (role, updatedPermissions) => {
  try {
    const currentMap = getPermissionsMap();
    currentMap[role] = { ...currentMap[role], ...updatedPermissions };
    localStorage.setItem(`${SETTINGS_KEY}_permissions`, JSON.stringify(currentMap));
    window.dispatchEvent(new Event(AUTH_EVENT));
  } catch (e) {}
};

// Grant All Supreme Permissions to EVERY role
export const grantSupremeToAll = () => {
  try {
    const supremeMap = {};
    Object.keys(ROLES).forEach((key) => {
      const roleId = ROLES[key];
      supremeMap[roleId] = { ...DEFAULT_PERMISSIONS[ROLES.SUPER_ADMIN] };
    });
    localStorage.setItem(`${SETTINGS_KEY}_permissions`, JSON.stringify(supremeMap));
    window.dispatchEvent(new Event(AUTH_EVENT));
  } catch (e) {}
};

// Reset permissions to default
export const resetPermissions = () => {
  try {
    localStorage.removeItem(`${SETTINGS_KEY}_permissions`);
    window.dispatchEvent(new Event(AUTH_EVENT));
  } catch (e) {}
};

export const AUTH_EVENT_NAME = AUTH_EVENT;
