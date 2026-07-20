import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import QRCode from 'qrcode';
import * as XLSX from 'xlsx';
import { studentsAPI } from '../services/studentsAPI';
import { attendanceAPI } from '../services/attendanceAPI';

const AdminAttendance = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [filterStudentId, setFilterStudentId] = useState('');
  const [filterStudentName, setFilterStudentName] = useState('');
  const expectedQrData = useRef('');

  const loadData = async () => {
    try {
      // Load attendance records from API
      const attendanceResponse = await attendanceAPI.getAll();
      
      // Remove duplicate records
      const uniqueRecords = removeDuplicates(attendanceResponse);
      setAttendanceRecords(uniqueRecords);

      // Load students using API
      const studentsResponse = await studentsAPI.getAll();
      setStudents(studentsResponse);
    } catch (err) {
      console.error('Error loading data:', err);
    }
  };

  useEffect(() => {
    const load = async () => {
      if (!localStorage.getItem('adminLoggedIn')) {
        navigate('/admin/login');
      } else {
        await loadData();
      }
    };
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);

  const removeDuplicates = (records) => {
    const seen = new Set();
    return records.filter((record) => {
      // Create a unique key based on studentId and just the date (DD/MM/YY format)
      const date = new Date(record.markedAt);
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear().toString().slice(-2);
      const dateKey = `${day}/${month}/${year}`;
      
      const key = `${record.studentId}-${dateKey}`;
      
      if (seen.has(key)) {
        return false; // Duplicate found on same date, filter it out
      }
      seen.add(key);
      return true; // First occurrence on this date, keep it
    });
  };

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    navigate('/admin/login');
  };

  const generateQRCode = async () => {
    if (!selectedStudent) {
      alert('Please select a student.');
      return;
    }

    const student = students.find(s => s._id === selectedStudent);
    if (!student) {
      alert('Selected student not found.');
      return;
    }

    const data = `ATTENDANCE:${student.name}:${student.rollNo}:${new Date().toISOString()}`;
    expectedQrData.current = data;
    try {
      const url = await QRCode.toDataURL(data);
      setQrCodeUrl(url);
    } catch (err) {
      console.error('Error generating QR code:', err);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  };

  const clearQR = () => {
    setQrCodeUrl('');
    setSelectedStudent('');
  };

  const getFilteredRecords = () => {
    let filtered = attendanceRecords;
    
    // Filter by date if selected
    if (selectedDate) {
      filtered = filtered.filter((record) => {
        const recordDate = new Date(record.markedAt).toISOString().split('T')[0];
        return recordDate === selectedDate;
      });
    }
    
    // Filter by student ID if selected
    if (filterStudentId) {
      filtered = filtered.filter((record) => {
        return record.studentId === filterStudentId;
      });
    }
    
    // Filter by student name if selected
    if (filterStudentName) {
      filtered = filtered.filter((record) => {
        return record.studentName === filterStudentName;
      });
    }
    
    return filtered;
  };

  const downloadExcel = () => {
    const filteredRecords = getFilteredRecords();
    
    if (filteredRecords.length === 0) {
      alert('No attendance records to download.');
      return;
    }

    // Prepare data for Excel
    const excelData = filteredRecords.map((record) => ({
      'Student Name': record.studentName,
      'Student ID': record.studentId,
      'Timestamp': formatDate(record.markedAt),
    }));

    // Create a new workbook
    const ws = XLSX.utils.json_to_sheet(excelData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Attendance');

    // Style the header row (optional - basic styling)
    ws['!cols'] = [{ wch: 20 }, { wch: 15 }, { wch: 20 }];

    // Generate filename with current date or selected date
    const dateForFilename = selectedDate || new Date().toISOString().split('T')[0];
    const filename = `Attendance_${dateForFilename}.xlsx`;

    // Download the file
    XLSX.writeFile(wb, filename);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex">
      <AdminSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} onLogout={handleLogout} />

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8">
        <div className="md:hidden mb-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="bg-slate-900 border border-slate-800 text-white p-2 rounded-lg"
          >
            ☰ Menu
          </button>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold mb-6 tracking-tight text-white">Attendance Management</h1>

        {/* QR Code Generation Section */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 mb-8 shadow-lg">
          <h2 className="text-xl font-bold mb-4 text-white">Generate QR Code for Student</h2>

          <div className="mb-4">
            <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
              Select Student
            </label>
            <select
              value={selectedStudent}
              onChange={(e) => setSelectedStudent(e.target.value)}
              className="w-full bg-slate-950 border border-slate-850 text-slate-100 rounded-lg p-2.5 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-sm"
            >
              <option value="" className="bg-slate-950">Choose a student...</option>
              {students.map((student) => (
                <option key={student._id} value={student._id} className="bg-slate-950">
                  {student.rollNo} - {student.name} ({student.course})
                </option>
              ))}
            </select>
          </div>

          <div className="flex gap-2 mb-4">
            <button
              onClick={generateQRCode}
              disabled={!selectedStudent}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-lg disabled:bg-slate-800 disabled:text-slate-500 transition-all text-sm"
            >
              Generate QR Code
            </button>
            {qrCodeUrl && (
              <button
                onClick={clearQR}
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold px-5 py-2.5 rounded-lg border border-slate-750 transition-all text-sm"
              >
                Clear
              </button>
            )}
          </div>

          {qrCodeUrl && (
            <div className="text-center p-4 border border-slate-800 bg-slate-950/40 rounded-xl max-w-sm mx-auto mt-6">
              <p className="text-sm text-slate-300 mb-3">
                QR Code for <strong className="text-white">{students.find(s => s._id === selectedStudent)?.name}</strong><br />
                <span className="text-xs text-slate-400">(Roll No: {students.find(s => s._id === selectedStudent)?.rollNo})</span>
              </p>
              <img src={qrCodeUrl} alt="QR Code" className="mx-auto border border-slate-800 rounded-lg bg-white p-3 shadow-md" />
              <p className="text-xs text-slate-500 mt-3 leading-relaxed">Students can scan this QR code to mark their attendance</p>
            </div>
          )}
        </div>

        {/* Attendance Records Section */}
        <h2 className="text-xl font-bold mb-4 text-white">Attendance Records</h2>

        {attendanceRecords.length === 0 ? (
          <p className="text-slate-400">No attendance records found.</p>
        ) : (
          <>
            {/* Filter and Download Section */}
            <div className="mb-6 bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
                {/* Date Filter */}
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                    📅 Filter by Date
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-850 text-slate-100 rounded-lg p-2.5 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-sm"
                  />
                </div>

                {/* Student ID Filter */}
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                    🆔 Filter by Student ID
                  </label>
                  <select
                    value={filterStudentId}
                    onChange={(e) => setFilterStudentId(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-855 text-slate-100 rounded-lg p-2.5 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-sm"
                  >
                    <option value="" className="bg-slate-950">All IDs</option>
                    {[...new Set(attendanceRecords.map(r => r.studentId))].map((studentId) => (
                      <option key={studentId} value={studentId} className="bg-slate-950">
                        {studentId}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Student Name Filter */}
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                    👤 Filter by Student Name
                  </label>
                  <select
                    value={filterStudentName}
                    onChange={(e) => setFilterStudentName(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-855 text-slate-100 rounded-lg p-2.5 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-sm"
                  >
                    <option value="" className="bg-slate-950">All Names</option>
                    {[...new Set(attendanceRecords.map(r => r.studentName))].sort().map((studentName) => (
                      <option key={studentName} value={studentName} className="bg-slate-950">
                        {studentName}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Action Buttons */}
                <div className="flex items-end gap-2">
                  {(selectedDate || filterStudentId || filterStudentName) && (
                    <button
                      onClick={() => {
                        setSelectedDate('');
                        setFilterStudentId('');
                        setFilterStudentName('');
                      }}
                      className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-200 py-2.5 rounded-lg border border-slate-750 font-semibold transition-all text-sm"
                    >
                      ✕ Clear
                    </button>
                  )}
                  <button
                    onClick={downloadExcel}
                    className="flex-1 bg-green-600 text-white py-2.5 rounded-lg hover:bg-green-700 font-semibold transition-all text-sm"
                  >
                    📥 Download
                  </button>
                </div>
              </div>

              {/* Active Filters Display */}
              {(selectedDate || filterStudentId || filterStudentName) && (
                <div className="flex flex-wrap gap-2 text-xs pt-3 border-t border-slate-800/80">
                  {selectedDate && (
                    <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2.5 py-1 rounded-full font-semibold">
                      📅 Date: {selectedDate}
                    </span>
                  )}
                  {filterStudentId && (
                    <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2.5 py-1 rounded-full font-semibold">
                      🆔 ID: {filterStudentId}
                    </span>
                  )}
                  {filterStudentName && (
                    <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2.5 py-1 rounded-full font-semibold">
                      👤 Name: {filterStudentName}
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* Mobile View - Cards */}
            <div className="space-y-4 md:hidden">
              {getFilteredRecords().length === 0 ? (
                <p className="text-slate-400">No records found for selected filter.</p>
              ) : (
                getFilteredRecords().map((record, index) => (
                  <div
                    key={index}
                    className="bg-slate-900 border border-slate-800 p-5 rounded-xl shadow-md space-y-2"
                  >
                    <p className="text-sm">
                      <span className="font-semibold text-slate-400">Name:</span> <span className="text-slate-100 font-medium">{record.studentName}</span>
                    </p>
                    <p className="text-sm">
                      <span className="font-semibold text-slate-400">ID:</span> <span className="text-slate-300 font-mono">{record.studentId}</span>
                    </p>
                    <p className="text-xs text-slate-500 pt-1 border-t border-slate-800/50">
                      <span className="font-semibold">Time:</span> {formatDate(record.markedAt)}
                    </p>
                  </div>
                ))
              )}
            </div>

            {/* Desktop View - Table */}
            <div className="hidden md:block bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden shadow-lg">
              <table className="min-w-full divide-y divide-slate-800">
                <thead className="bg-slate-900">
                  <tr>
                    <th className="px-6 py-3.5 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Student Name
                    </th>
                    <th className="px-6 py-3.5 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Student ID
                    </th>
                    <th className="px-6 py-3.5 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Timestamp
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 bg-slate-950/20">
                  {getFilteredRecords().length === 0 ? (
                    <tr>
                      <td colSpan="3" className="px-6 py-8 text-center text-sm text-slate-450">
                        No records found for selected date.
                      </td>
                    </tr>
                  ) : (
                    getFilteredRecords().map((record, index) => (
                      <tr key={index} className="hover:bg-slate-800/40 border-b border-slate-850 transition-colors">
                        <td className="px-6 py-4 text-sm font-semibold text-slate-100">
                          {record.studentName}
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-350 font-mono">
                          {record.studentId}
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-400">
                          {formatDate(record.markedAt)}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </>
        )}

      </div>
    </div>
  );
};

export default AdminAttendance;