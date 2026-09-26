import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../public/Yuganter_Technologies.png';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'Ram@email.com' && password === 'Ram123') {
      localStorage.setItem('adminLoggedIn', 'true');
      navigate('/admin');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen flex bg-[#0f172a]">
      {/* Left side with logo */}
      <div className="hidden md:flex flex-1 items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-600 text-white p-8">
        <div className="text-center">
          <img src={logo} alt="Yuganter Technologies" className="mx-auto mb-6 w-32 h-32 object-contain" />
          <h1 className="text-3xl font-extrabold">Yuganter Technologies</h1>
          <p className="mt-2 text-lg">Admin Portal</p>
        </div>
      </div>

      {/* Right side – login form */}
      <div className="flex flex-1 items-center justify-center p-4">
        <div className="bg-slate-900 p-6 md:p-8 rounded-xl shadow-xl w-full max-w-sm md:max-w-md border border-slate-800">
          <h2 className="text-xl md:text-2xl font-bold mb-6 text-center text-slate-100">Admin Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-slate-300 text-sm font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full admin-input bg-slate-950 border border-slate-700 text-white font-semibold rounded-lg py-2.5 px-4 leading-tight focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                placeholder="Ram@email.com"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-slate-300 text-sm font-semibold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full admin-input bg-slate-950 border border-slate-700 text-white font-semibold rounded-lg py-2.5 px-4 leading-tight focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                placeholder="••••••••"
                required
              />
            </div>
            {error && (
              <p className="text-red-500 text-xs italic mb-4" role="alert">
                {error}
              </p>
            )}
            <div className="flex items-center justify-between gap-4">
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-semibold py-2.5 px-4 rounded-lg focus:outline-none transition-all"
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => window.open("https://www.yugantartechnologies.com", "_blank")}
                className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold py-2.5 px-4 rounded-lg focus:outline-none transition-all border border-slate-750"
              >
                Back to Site
              </button>
            </div>
          </form>
          {/* <div className="mt-4 text-center">
            <a
              href="https://www.yugantartechnologies.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline"
            >
              Back to Main Site
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;