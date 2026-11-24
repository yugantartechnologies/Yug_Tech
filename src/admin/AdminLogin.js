import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../public/Yuganter_Technologies.png';
import { ROLES, loginAs } from './adminAuth';
import { User, Lock, ArrowRight, AlertCircle, Shield } from 'lucide-react';

const AdminLogin = ({ onLoginSuccess }) => {
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    const cleanId = adminId.trim();
    const cleanPass = password.trim();

    // Verify exact admin credentials (RAM@YT2026 & RAM@YT123)
    const isIdValid = 
      cleanId.toUpperCase() === 'RAM@YT2026' || 
      cleanId.toLowerCase() === 'admin@yugantartechnologies.com' ||
      cleanId.toLowerCase() === 'admin';

    const isPassValid = 
      cleanPass === 'RAM@YT123' || 
      cleanPass.toLowerCase() === 'ram@yt123' ||
      cleanPass === 'admin123';

    if (isIdValid && isPassValid) {
      // Authenticate as Super Admin
      loginAs(ROLES.SUPER_ADMIN, {
        name: 'Ram (Admin)',
        email: 'RAM@YT2026'
      });

      if (onLoginSuccess) {
        onLoginSuccess();
      } else {
        navigate('/admin');
      }
    } else {
      setIsLoading(false);
      setError('Invalid Admin ID or Password. Please enter the correct credentials.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50/40 text-slate-900 font-sans p-4 relative overflow-hidden">
      {/* Subtle Corporate Ambient Circles */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-200/30 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-200/30 rounded-full blur-[130px] pointer-events-none" />

      <div className="w-full max-w-md relative z-10">
        
        {/* Brand Header */}
        <div className="text-center mb-7">
          <div className="inline-flex w-16 h-16 rounded-2xl bg-white p-2.5 shadow-md border border-slate-200/90 items-center justify-center mb-3.5 transition-transform hover:scale-105">
            <img src={logo} alt="Yugantar Technologies Logo" className="w-full h-full object-contain" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Yugantar <span className="text-blue-600">Technologies</span>
          </h1>
          <p className="text-xs uppercase tracking-[0.16em] text-slate-500 font-mono mt-1 font-semibold">
            Executive Admin Portal
          </p>
        </div>

        {/* Clean Corporate Blank Login Form Card */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-7 sm:p-9 shadow-xl shadow-slate-200/50">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-600" />
              <span>Admin Sign In</span>
            </h2>
            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
              Enter your official Admin ID and Password to manage inquiries, applications, and system settings.
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-5 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs flex items-center gap-2.5">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLoginSubmit} className="space-y-4">
            {/* Blank Admin ID Field */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Admin ID
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  required
                  autoFocus
                  value={adminId}
                  onChange={(e) => setAdminId(e.target.value)}
                  placeholder="Enter Admin ID"
                  className="w-full bg-slate-50 border border-slate-300 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100 rounded-xl py-3 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition shadow-2xs"
                />
              </div>
            </div>

            {/* Blank Password Field */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                  className="w-full bg-slate-50 border border-slate-300 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100 rounded-xl py-3 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition shadow-2xs"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-4 rounded-xl shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2 text-sm cursor-pointer active:scale-[0.99]"
            >
              <span>{isLoading ? 'Verifying Credentials...' : 'Sign In as Admin'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Back to Homepage */}
        <div className="text-center mt-6">
          <a
            href="/"
            className="text-xs text-slate-500 hover:text-slate-800 transition inline-flex items-center gap-1.5 font-medium"
          >
            <span>← Return to Public Website</span>
          </a>
        </div>

      </div>
    </div>
  );
};

export default AdminLogin;
