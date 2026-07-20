import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import BASE_URL from "../BASEURL";

const AdminCourseInquiries = () => {
  const [inquiries, setInquiries] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("adminLoggedIn")) {
      navigate("/admin/login");
    }
  }, [navigate]);

  useEffect(() => {
    const fetchCourseInquiries = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/course-inquiries`);
        if (response.ok) {
          const data = await response.json();
          setInquiries(data);
        } else {
          console.error("Failed to fetch inquiries");
        }
      } catch (error) {
        console.error("Error fetching inquiries:", error);
      }
    };

    fetchCourseInquiries();
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
        {/* Mobile Menu */}
        <div className="md:hidden mb-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="bg-slate-900 border border-slate-800 text-white px-4 py-2 rounded-lg shadow"
          >
            ☰ Menu
          </button>
        </div>

        <h1 className="text-2xl md:text-3xl font-extrabold mb-6 tracking-tight text-white">
          Course Inquiries
        </h1>

        {inquiries.length === 0 ? (
          <p className="text-slate-400">No inquiries found.</p>
        ) : (
          <>
            {/* ✅ Desktop Table */}
            <div className="hidden md:block bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden shadow-lg">
              <table className="min-w-full divide-y divide-slate-800">
                <thead className="bg-slate-900">
                  <tr>
                    {["Name", "Email", "Phone", "Course", "Submitted At"].map(
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
                  {inquiries.map((inq, index) => (
                    <tr key={inq._id || inq.id || index} className="hover:bg-slate-800/40 transition-colors">
                      <td className="px-6 py-4 font-semibold text-slate-100">{inq.name}</td>
                      <td className="px-6 py-4 text-slate-300">{inq.email}</td>
                      <td className="px-6 py-4 text-slate-400">{inq.phone}</td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-500/10 text-green-400 border border-green-500/20">
                          {inq.course}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-400">
                        {new Date(inq.createdAt).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ✅ Mobile Cards */}
            <div className="md:hidden space-y-4">
              {inquiries.map((inq, index) => (
                <div
                  key={inq._id || inq.id || index}
                  className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3 shadow-md"
                >
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-slate-100 text-lg">{inq.name}</h3>
                    <span className="text-xs bg-green-500/10 text-green-400 border border-green-500/20 px-2.5 py-1 rounded-full font-semibold">
                      {inq.course}
                    </span>
                  </div>

                  <div className="space-y-1.5 text-sm text-slate-300">
                    <p>
                      <strong className="text-slate-400 font-medium">Email:</strong> {inq.email}
                    </p>
                    <p>
                      <strong className="text-slate-400 font-medium">Phone:</strong> {inq.phone}
                    </p>
                  </div>

                  <div className="text-xs text-slate-500 pt-2 border-t border-slate-800/60">
                    Submitted: {new Date(inq.createdAt).toLocaleString()}
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

export default AdminCourseInquiries;
