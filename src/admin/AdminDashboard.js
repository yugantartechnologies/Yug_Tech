import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import { BookOpen, Briefcase, BarChart3 } from 'lucide-react';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('adminLoggedIn')) {
      navigate('/admin/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex">
      <AdminSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} onLogout={handleLogout} />

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8">
        <div className="md:hidden mb-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="bg-slate-900 border border-slate-800 text-white p-2..5 rounded-lg"
          >
            ☰ Menu
          </button>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold mb-2 tracking-tight text-white">Dashboard</h1>
        <p className="text-slate-400 mb-8">Welcome to the admin panel. Here you can manage courses, services, inquiries, and student attendance.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 group flex items-start gap-4">
            <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 group-hover:text-blue-300 transition-all">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-100 group-hover:text-blue-400 transition-colors">Manage Courses</h2>
              <p className="text-slate-400 text-sm mt-1">View and edit course details.</p>
            </div>
          </div>
          
          <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:border-green-500/40 hover:shadow-lg hover:shadow-green-500/5 transition-all duration-300 group flex items-start gap-4">
            <div className="p-3 rounded-lg bg-green-500/10 text-green-400 group-hover:bg-green-500/20 group-hover:text-green-300 transition-all">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-100 group-hover:text-green-400 transition-colors">Manage Services</h2>
              <p className="text-slate-400 text-sm mt-1">Update service offerings.</p>
            </div>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:border-yellow-500/40 hover:shadow-lg hover:shadow-yellow-500/5 transition-all duration-300 group flex items-start gap-4">
            <div className="p-3 rounded-lg bg-yellow-500/10 text-yellow-400 group-hover:bg-yellow-500/20 group-hover:text-yellow-300 transition-all">
              <BarChart3 className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-100 group-hover:text-yellow-400 transition-colors">View Analytics</h2>
              <p className="text-slate-400 text-sm mt-1">Check website statistics.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;