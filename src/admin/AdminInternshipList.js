import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import BASE_URL from "../BASEURL";

const AdminInternshipList = () => {
  const [applications, setApplications] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("adminLoggedIn")) {
      navigate("/admin/login");
    }
  }, [navigate]);

  useEffect(() => {
    const fetchInternshipApplications = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/internship-inquiries`);
        if (response.ok) {
          const data = await response.json();
          setApplications(data);
        } else {
          console.error("Failed to fetch applications");
        }
      } catch (error) {
        console.error("Error fetching applications:", error);
      }
    };

    fetchInternshipApplications();
  }, []);

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("adminLoggedIn");
      navigate("/admin/login");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex">
      <AdminSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        onLogout={handleLogout}
      />

      <div className="flex-1 p-4 md:p-8">
        {/* Mobile Menu Button */}
        <div className="md:hidden mb-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="bg-slate-900 border border-slate-800 text-white px-4 py-2 rounded-lg shadow"
          >
            ☰ Menu
          </button>
        </div>

        <h1 className="text-2xl md:text-3xl font-extrabold mb-6 tracking-tight text-white">
          Internship Applications
        </h1>

        {/* No Data */}
        {applications.length === 0 ? (
          <p className="text-slate-400">No applications found.</p>
        ) : (
          <>
            {/* ✅ Desktop Table */}
            <div className="hidden md:block bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden shadow-lg">
              <table className="min-w-full divide-y divide-slate-800">
                <thead className="bg-slate-900">
                  <tr>
                    {["Name", "Email", "Phone", "Internship", "Experience", "Submitted At"].map(
                      (head) => (
                        <th
                          key={head}
                          className="px-6 py-3.5 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider"
                        >
                          {head}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 bg-slate-950/20">
                  {applications.map((app, index) => (
                    <tr key={app._id || app.id || index} className="hover:bg-slate-800/40 transition-colors">
                      <td className="px-6 py-4 font-semibold text-slate-100">{app.name}</td>
                      <td className="px-6 py-4 text-slate-300">{app.email}</td>
                      <td className="px-6 py-4 text-slate-400">{app.phone}</td>
                      <td className="px-6 py-4 text-slate-300">{app.internship}</td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                          {app.experience}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-450 text-sm">
                        {new Date(app.createdAt).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ✅ Mobile Cards */}
            <div className="md:hidden space-y-4">
              {applications.map((app, index) => (
                <div
                  key={app._id || app.id || index}
                  className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3 shadow-md"
                >
                  <div className="flex justify-between items-start border-b border-slate-800 pb-2">
                    <h3 className="font-bold text-slate-100 text-lg">{app.name}</h3>
                    <span className="text-xs bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2.5 py-1 rounded-full font-semibold">
                      {app.experience}
                    </span>
                  </div>

                  <div className="space-y-1.5 text-sm text-slate-350">
                    <p>
                      <strong className="text-slate-400 font-medium">Email:</strong> {app.email}
                    </p>
                    <p>
                      <strong className="text-slate-400 font-medium">Phone:</strong> {app.phone}
                    </p>
                    <p>
                      <strong className="text-slate-400 font-medium">Internship:</strong> {app.internship}
                    </p>
                  </div>
                  <div className="text-xs text-slate-500 pt-2 border-t border-slate-800/60 font-mono">
                    Submitted: {new Date(app.createdAt).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminInternshipList;
