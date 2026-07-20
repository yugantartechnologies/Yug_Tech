import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import { studentsAPI } from '../services/studentsAPI';

const AdminStudents = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [students, setStudents] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    dateOfBirth: '',
    gender: '',
    type: 'Student',
    address: {
      city: '',
      state: ''
    },
    collegeName: '',
    course: '',
    branch: '',
    currentSemester: '',
    passingYear: '',
    cgpa: '',
    internshipType: '',
    internshipDuration: '',
    preferredStartDate: '',
    mode: '',
  });

  useEffect(() => {
    if (!localStorage.getItem('adminLoggedIn')) {
      navigate('/admin/login');
    } else {
      loadStudents();
    }
  }, [navigate]);

  const loadStudents = async () => {
    setLoading(true);
    try {
      const response = await studentsAPI.getAll();
      setStudents(response);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    navigate('/admin/login');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Handle nested address fields
    if (name.startsWith('address.')) {
      const addressField = name.split('.')[1];
      setFormData((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [addressField]: value
        }
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isEditing) {
        const updated = await studentsAPI.update(editingStudent._id, formData);
        setStudents((prev) =>
          prev.map((s) => (s._id === updated._id ? updated : s))
        );
        setIsEditing(false);
      } else {
        const maxRoll =
          students.length > 0
            ? Math.max(...students.map((s) => parseInt(s.rollNo) || 0))
            : 0;
        const newStudent = await studentsAPI.create({
          ...formData,
          rollNo: (maxRoll + 1).toString(),
        });
        setStudents((prev) => [...prev, newStudent]);
      }

      setShowModal(false);
      setFormData({
        name: '',
        email: '',
        mobile: '',
        dateOfBirth: '',
        gender: '',
        type: 'Student',
        address: {
          city: '',
          state: ''
        },
        collegeName: '',
        course: '',
        branch: '',
        currentSemester: '',
        passingYear: '',
        cgpa: '',
        internshipType: '',
        internshipDuration: '',
        preferredStartDate: '',
        mode: '',
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (student) => {
    setIsEditing(true);
    setEditingStudent(student);
    setFormData(student);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete student?')) return;
    await studentsAPI.delete(id);
    setStudents((prev) => prev.filter((s) => s._id !== id));
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditingStudent(null);
    setShowModal(false);
    setFormData({
      name: '',
      email: '',
      mobile: '',
      dateOfBirth: '',
      gender: '',
      type: 'Student',
      address: {
        city: '',
        state: ''
      },
      collegeName: '',
      course: '',
      branch: '',
      currentSemester: '',
      passingYear: '',
      cgpa: '',
      internshipType: '',
      internshipDuration: '',
      preferredStartDate: '',
      mode: '',
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex">
      <AdminSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        onLogout={handleLogout}
      />

      <div className="flex-1 p-4 md:p-6 lg:p-8">
        {/* Mobile Menu Button */}
        <div className="md:hidden mb-4 flex items-center justify-between">
          <button
            className="bg-slate-900 border border-slate-800 text-white p-2 rounded-lg"
            onClick={() => setSidebarOpen(true)}
          >
            ☰ Menu
          </button>
          <h1 className="text-xl font-bold text-white">Manage Students</h1>
        </div>

        {/* Desktop Title */}
        <div className="hidden md:flex items-center justify-between mb-8">
          <h1 className="text-3xl font-extrabold text-white tracking-tight">Manage Students</h1>
          <div className="text-sm text-slate-400">
            Total Students: <span className="font-semibold text-blue-400">{students.length}</span>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-950/20 border-l-4 border-red-500 text-red-200 p-4 rounded-lg mb-6 flex items-start gap-3 border border-red-900/30">
            <span className="text-xl">⚠️</span>
            <div>
              <p className="font-semibold">Error</p>
              <p className="text-sm">{error}</p>
            </div>
          </div>
        )}

        {/* Add Student Button */}
        <div className="mb-8">
          <button
            onClick={() => {
              setIsEditing(false);
              setEditingStudent(null);
              setFormData({
                name: '',
                email: '',
                mobile: '',
                dateOfBirth: '',
                gender: '',
                type: 'Student',
                address: {
                  city: '',
                  state: ''
                },
                collegeName: '',
                course: '',
                branch: '',
                currentSemester: '',
                passingYear: '',
                cgpa: '',
                internshipType: '',
                internshipDuration: '',
                preferredStartDate: '',
                mode: '',
              });
              setShowModal(true);
            }}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg hover:shadow-lg hover:from-blue-700 hover:to-indigo-700 font-semibold transition-all duration-200 flex items-center gap-2"
          >
            <span className="text-lg">➕</span> Add New Student
          </button>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-slate-900 border border-slate-800 rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto my-8">
              {/* Modal Header */}
              <div className="sticky top-0 bg-slate-950 border-b border-slate-800 text-white p-4 md:p-6 flex justify-between items-center z-10">
                <h2 className="text-xl md:text-2xl font-bold tracking-tight">
                  {isEditing ? 'Edit Student' : 'Add New Student'}
                </h2>
                <button
                  onClick={handleCancel}
                  className="text-slate-400 hover:text-white text-xl p-1 transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-4 md:p-6">
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {/* Personal Information Section */}
                  <div className="lg:col-span-3 border-b border-slate-800 pb-2">
                    <h3 className="text-lg font-semibold text-blue-400">Personal Information</h3>
                  </div>
                  
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-400">Full Name *</label>
                    <input
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-slate-950 border border-slate-800 text-slate-100 rounded-lg p-2.5 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-sm"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-400">Email *</label>
                    <input
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-slate-950 border border-slate-800 text-slate-100 rounded-lg p-2.5 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-sm"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-400">Mobile Number *</label>
                    <input
                      name="mobile"
                      type="tel"
                      placeholder="Mobile Number"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      className="w-full bg-slate-950 border border-slate-800 text-slate-100 rounded-lg p-2.5 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-sm"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-400">Date of Birth *</label>
                    <input
                      name="dateOfBirth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      className="w-full bg-slate-950 border border-slate-800 text-slate-100 rounded-lg p-2.5 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-sm"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-400">Gender *</label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="w-full bg-slate-950 border border-slate-800 text-slate-100 rounded-lg p-2.5 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-sm"
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-400">Type *</label>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleInputChange}
                      className="w-full bg-slate-950 border border-slate-800 text-slate-100 rounded-lg p-2.5 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-sm"
                      required
                    >
                      <option value="Student">Student</option>
                      <option value="Internship">Internship</option>
                    </select>
                  </div>

                  {/* Address Section */}
                  <div className="lg:col-span-3 border-b border-slate-800 pb-2 mt-4">
                    <h3 className="text-lg font-semibold text-blue-400">Address</h3>
                  </div>
                  
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-400">City *</label>
                    <input
                      name="address.city"
                      placeholder="City"
                      value={formData.address.city}
                      onChange={handleInputChange}
                      className="w-full bg-slate-950 border border-slate-800 text-slate-100 rounded-lg p-2.5 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-sm"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-400">State *</label>
                    <input
                      name="address.state"
                      placeholder="State"
                      value={formData.address.state}
                      onChange={handleInputChange}
                      className="w-full bg-slate-950 border border-slate-800 text-slate-100 rounded-lg p-2.5 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-sm"
                      required
                    />
                  </div>
                  <div className="hidden lg:block"></div>

                  {/* College & Academic Information */}
                  <div className="lg:col-span-3 border-b border-slate-800 pb-2 mt-4">
                    <h3 className="text-lg font-semibold text-blue-400">Academic Information</h3>
                  </div>
                  
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-400">College Name *</label>
                    <input
                      name="collegeName"
                      placeholder="College Name"
                      value={formData.collegeName}
                      onChange={handleInputChange}
                      className="w-full bg-slate-950 border border-slate-800 text-slate-100 rounded-lg p-2.5 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-sm"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-400">Course *</label>
                    <input
                      name="course"
                      placeholder="Course"
                      value={formData.course}
                      onChange={handleInputChange}
                      className="w-full bg-slate-950 border border-slate-800 text-slate-100 rounded-lg p-2.5 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-sm"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-400">Branch *</label>
                    <input
                      name="branch"
                      placeholder="Branch"
                      value={formData.branch}
                      onChange={handleInputChange}
                      className="w-full bg-slate-950 border border-slate-800 text-slate-100 rounded-lg p-2.5 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-sm"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-400">Current Semester *</label>
                    <input
                      name="currentSemester"
                      type="number"
                      placeholder="Current Semester"
                      value={formData.currentSemester}
                      onChange={handleInputChange}
                      className="w-full bg-slate-950 border border-slate-800 text-slate-100 rounded-lg p-2.5 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-sm"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-400">Passing Year *</label>
                    <input
                      name="passingYear"
                      type="number"
                      placeholder="Passing Year"
                      value={formData.passingYear}
                      onChange={handleInputChange}
                      className="w-full bg-slate-950 border border-slate-800 text-slate-100 rounded-lg p-2.5 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-sm"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-400">CGPA *</label>
                    <input
                      name="cgpa"
                      type="number"
                      step="0.01"
                      placeholder="CGPA"
                      value={formData.cgpa}
                      onChange={handleInputChange}
                      className="w-full bg-slate-950 border border-slate-800 text-slate-100 rounded-lg p-2.5 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-sm"
                      required
                    />
                  </div>

                  {/* Internship Information */}
                  <div className="lg:col-span-3 border-b border-slate-800 pb-2 mt-4">
                    <h3 className="text-lg font-semibold text-blue-400">Internship Information</h3>
                  </div>
                  
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-400">Internship Type *</label>
                    <input
                      name="internshipType"
                      placeholder="Internship Type"
                      value={formData.internshipType}
                      onChange={handleInputChange}
                      className="w-full bg-slate-950 border border-slate-800 text-slate-100 rounded-lg p-2.5 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-sm"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-400">Internship Duration *</label>
                    <input
                      name="internshipDuration"
                      placeholder="e.g., 3 months"
                      value={formData.internshipDuration}
                      onChange={handleInputChange}
                      className="w-full bg-slate-950 border border-slate-800 text-slate-100 rounded-lg p-2.5 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-sm"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-400">Preferred Start Date *</label>
                    <input
                      name="preferredStartDate"
                      type="date"
                      value={formData.preferredStartDate}
                      onChange={handleInputChange}
                      className="w-full bg-slate-950 border border-slate-800 text-slate-100 rounded-lg p-2.5 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-sm"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-400">Mode *</label>
                    <select
                      name="mode"
                      value={formData.mode}
                      onChange={handleInputChange}
                      className="w-full bg-slate-950 border border-slate-800 text-slate-100 rounded-lg p-2.5 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-sm"
                      required
                    >
                      <option value="">Select Mode</option>
                      <option value="Online">Online</option>
                      <option value="Offline">Offline</option>
                      <option value="Hybrid">Hybrid</option>
                    </select>
                  </div>
                  <div className="hidden md:block lg:col-span-2"></div>

                  {/* Buttons */}
                  <div className="lg:col-span-3 flex flex-col sm:flex-row gap-3 mt-6 border-t border-slate-800 pt-5">
                    <button
                      type="submit"
                      disabled={loading}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg disabled:bg-slate-800 disabled:text-slate-500 font-semibold transition-all"
                    >
                      {loading ? 'Processing...' : isEditing ? 'Update Student' : 'Add Student'}
                    </button>
                    <button
                      type="button"
                      onClick={handleCancel}
                      className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-6 py-2.5 rounded-lg font-semibold transition-all border border-slate-750"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* MOBILE CARDS */}
        <div className="md:hidden space-y-4">
          {students.length === 0 ? (
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 text-center">
              <p className="text-slate-500 text-lg">📚 No students found</p>
              <p className="text-slate-400 text-sm mt-1">Click "Add New Student" to get started</p>
            </div>
          ) : (
            students.map((s) => (
              <div key={s._id} className="bg-slate-900 border border-slate-800 rounded-xl shadow-md p-5 border-l-4 border-blue-500 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold text-white text-lg">{s.name}</p>
                    <p className="text-sm text-slate-400">{s.course}</p>
                  </div>
                  <span className={`text-xs px-2.5 py-1 rounded-full font-semibold border ${s.type === 'Internship' ? 'bg-orange-500/10 text-orange-400 border-orange-500/20' : 'bg-blue-500/10 text-blue-400 border-blue-500/20'}`}>
                    {s.type}
                  </span>
                </div>
                
                <div className="space-y-2 text-sm text-slate-300">
                  <p><span className="font-medium text-slate-400">Email:</span> {s.email}</p>
                  <p><span className="font-medium text-slate-400">Mobile:</span> {s.mobile}</p>
                  <p><span className="font-medium text-slate-400">College:</span> {s.collegeName}</p>
                  <p><span className="font-medium text-slate-400">Branch:</span> {s.branch}</p>
                  <p><span className="font-medium text-slate-400">CGPA:</span> {s.cgpa}</p>
                  <p><span className="font-medium text-slate-400">City:</span> {s.address?.city}</p>
                </div>
                
                <div className="flex gap-3 pt-4 border-t border-slate-800/80">
                  <button 
                    onClick={() => handleEdit(s)} 
                    className="flex-1 bg-blue-500/10 text-blue-400 py-2 rounded-lg font-semibold hover:bg-blue-500/20 transition-all text-sm border border-blue-500/10"
                  >
                    ✏️ Edit
                  </button>
                  <button 
                    onClick={() => handleDelete(s._id)} 
                    className="flex-1 bg-red-500/10 text-red-400 py-2 rounded-lg font-semibold hover:bg-red-500/20 transition-all text-sm border border-red-500/10"
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* DESKTOP TABLE */}
        <div className="hidden md:block bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden shadow-lg">
          {students.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-slate-500 text-lg">📚 No students found</p>
              <p className="text-slate-400 text-sm mt-1">Click "Add New Student" to get started</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-900 border-b border-slate-800">
                    <th className="p-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">Name</th>
                    <th className="p-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">Email</th>
                    <th className="p-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">Mobile</th>
                    <th className="p-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">Course</th>
                    <th className="p-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">Branch</th>
                    <th className="p-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">College</th>
                    <th className="p-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">CGPA</th>
                    <th className="p-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">City</th>
                    <th className="p-4 text-center text-xs font-semibold text-slate-400 uppercase tracking-wider">Type</th>
                    <th className="p-4 text-center text-xs font-semibold text-slate-400 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 bg-slate-950/20">
                  {students.map((s) => (
                    <tr key={s._id} className="hover:bg-slate-800/40 transition-colors border-b border-slate-850">
                      <td className="p-4 text-sm font-semibold text-slate-100">{s.name}</td>
                      <td className="p-4 text-sm text-slate-350">{s.email}</td>
                      <td className="p-4 text-sm text-slate-400">{s.mobile}</td>
                      <td className="p-4 text-sm text-slate-300">{s.course}</td>
                      <td className="p-4 text-sm text-slate-400">{s.branch}</td>
                      <td className="p-4 text-sm text-slate-400">{s.collegeName}</td>
                      <td className="p-4 text-sm text-slate-300">{s.cgpa}</td>
                      <td className="p-4 text-sm text-slate-450">{s.address?.city}</td>
                      <td className="p-4 text-center">
                        <span className={`text-xs px-2.5 py-1 rounded-full font-semibold border ${s.type === 'Internship' ? 'bg-orange-500/10 text-orange-400 border-orange-500/20' : 'bg-blue-500/10 text-blue-400 border-blue-500/20'}`}>
                          {s.type}
                        </span>
                      </td>
                      <td className="p-4 text-center">
                        <div className="flex gap-2 justify-center">
                          <button
                            onClick={() => handleEdit(s)}
                            className="bg-blue-500/10 text-blue-400 px-3 py-1.5 rounded hover:bg-blue-500/20 font-semibold text-xs border border-blue-500/10 transition-all"
                          >
                            ✏️ Edit
                          </button>
                          <button
                            onClick={() => handleDelete(s._id)}
                            className="bg-red-500/10 text-red-400 px-3 py-1.5 rounded hover:bg-red-500/20 font-semibold text-xs border border-red-500/10 transition-all"
                          >
                            🗑️ Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default AdminStudents;
