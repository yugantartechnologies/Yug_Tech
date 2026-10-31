const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;
const DB_FILE = path.join(__dirname, 'server_db.json');

// Middleware
app.use(cors());
app.use(express.json());

// Initialize database file if not exists
const defaultData = {
  courseInquiries: [
    {
      id: "seed_c1",
      name: "Rahul Sharma",
      email: "rahul.sharma@gmail.com",
      phone: "9876543210",
      course: "Full Stack Development (MERN)",
      createdAt: new Date(Date.now() - 3600000 * 4).toISOString(),
      submittedAt: new Date(Date.now() - 3600000 * 4).toISOString()
    },
    {
      id: "seed_c2",
      name: "Sneha Patel",
      email: "sneha.patel@outlook.com",
      phone: "9823456789",
      course: "Python Development",
      createdAt: new Date(Date.now() - 3600000 * 18).toISOString(),
      submittedAt: new Date(Date.now() - 3600000 * 18).toISOString()
    }
  ],
  serviceBookings: [
    {
      id: "seed_s1",
      name: "Amit Trivedi",
      email: "amit.trivedi@company.in",
      phone: "9988776655",
      service: "Website Development",
      message: "Looking for an e-commerce website development for our retail store in Ahmedabad.",
      createdAt: new Date(Date.now() - 3600000 * 6).toISOString(),
      submittedAt: new Date(Date.now() - 3600000 * 6).toISOString()
    },
    {
      id: "seed_s2",
      name: "Pooja Mehta",
      email: "pooja.mehta@brandvibe.com",
      phone: "9123456780",
      service: "Digital Marketing",
      message: "Need Google Ads & Meta Ads campaign management for lead generation.",
      createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
      submittedAt: new Date(Date.now() - 3600000 * 24).toISOString()
    }
  ],
  generalInquiries: [
    {
      id: "seed_g1",
      name: "Karan Desai",
      email: "karan.desai@gmail.com",
      phone: "9898012345",
      message: "I want to visit your Memnagar office to discuss custom software development.",
      createdAt: new Date(Date.now() - 3600000 * 8).toISOString()
    }
  ],
  freeConsultations: [
    {
      id: "fc_seed1",
      name: "Vikram Rathi",
      email: "vikram@rathienterprises.com",
      phone: "9879011223",
      businessName: "Rathi Enterprises",
      service: "SEO Optimization",
      preferredDate: new Date(Date.now() + 86400000 * 2).toISOString().split("T")[0],
      message: "Need consultation on improving Google rankings in Ahmedabad region.",
      status: "New",
      createdAt: new Date(Date.now() - 3600000 * 10).toISOString()
    }
  ],
  teamConsultations: [
    {
      id: "tc_seed1",
      name: "Deepak Joshi",
      email: "deepak.j@techsolutions.com",
      phone: "9765432109",
      inquiryType: "Technical Architecture & Cloud",
      message: "Require a dedicated tech consultation for migrating our legacy portal to cloud.",
      createdAt: new Date(Date.now() - 3600000 * 12).toISOString()
    }
  ],
  internshipInquiries: [
    {
      id: "seed_i1",
      name: "Anjali Verma",
      email: "anjali.verma@college.edu",
      phone: "9812345678",
      internship: "React & Node.js Developer Intern",
      experience: "Completed 3rd year B.Tech, built 2 MERN projects",
      message: "Seeking a 6-month hands-on internship at Yugantar Technologies.",
      createdAt: new Date(Date.now() - 3600000 * 15).toISOString(),
      submittedAt: new Date(Date.now() - 3600000 * 15).toISOString()
    }
  ],
  students: [],
  attendances: []
};

function readDB() {
  try {
    if (!fs.existsSync(DB_FILE)) {
      fs.writeFileSync(DB_FILE, JSON.stringify(defaultData, null, 2), 'utf-8');
      return defaultData;
    }
    const raw = fs.readFileSync(DB_FILE, 'utf-8');
    const data = JSON.parse(raw);
    // Ensure all keys exist
    for (const key of Object.keys(defaultData)) {
      if (!Array.isArray(data[key])) {
        data[key] = defaultData[key] || [];
      }
    }
    return data;
  } catch (err) {
    console.error('Error reading DB:', err);
    return defaultData;
  }
}

function writeDB(data) {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error('Error writing DB:', err);
    return false;
  }
}

// Ensure DB file exists on launch
readDB();

// ---------------- API ENDPOINTS ---------------- //

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', serverTime: new Date().toISOString() });
});

// Overall Stats
app.get('/api/stats', (req, res) => {
  const db = readDB();
  res.json({
    courseInquiries: db.courseInquiries.length,
    serviceBookings: db.serviceBookings.length,
    generalInquiries: db.generalInquiries.length,
    freeConsultations: db.freeConsultations.length,
    teamConsultations: db.teamConsultations.length,
    internshipInquiries: db.internshipInquiries.length,
    students: db.students.length,
    attendances: db.attendances.length
  });
});

// 1. COURSE INQUIRIES
app.get('/api/course-inquiries', (req, res) => {
  const db = readDB();
  res.json(db.courseInquiries);
});

app.post('/api/course-inquiries', (req, res) => {
  const db = readDB();
  const inquiry = {
    id: req.body.id || Date.now().toString(),
    _id: req.body.id || Date.now().toString(),
    name: req.body.name || "Anonymous",
    email: req.body.email || "",
    phone: req.body.phone || "",
    course: req.body.course || "General Course",
    createdAt: req.body.createdAt || new Date().toISOString(),
    submittedAt: req.body.submittedAt || new Date().toISOString(),
    status: req.body.status || "New"
  };
  db.courseInquiries.unshift(inquiry);
  writeDB(db);
  console.log('New Course Inquiry saved:', inquiry.name, inquiry.course);
  res.status(201).json(inquiry);
});

app.put('/api/course-inquiries/:id', (req, res) => {
  const db = readDB();
  const idToUpdate = req.params.id;
  const index = db.courseInquiries.findIndex(item => (item.id === idToUpdate || item._id === idToUpdate));
  if (index !== -1) {
    db.courseInquiries[index] = { ...db.courseInquiries[index], ...req.body };
    writeDB(db);
    res.json(db.courseInquiries[index]);
  } else {
    res.status(404).json({ error: "Inquiry not found" });
  }
});

app.delete('/api/course-inquiries/:id', (req, res) => {
  const db = readDB();
  const idToDelete = req.params.id;
  db.courseInquiries = db.courseInquiries.filter(item => (item.id !== idToDelete && item._id !== idToDelete));
  writeDB(db);
  res.json({ success: true, message: "Deleted successfully" });
});

// 2. SERVICE BOOKINGS
app.get('/api/service-bookings', (req, res) => {
  const db = readDB();
  res.json(db.serviceBookings);
});

app.post('/api/service-bookings', (req, res) => {
  const db = readDB();
  const booking = {
    id: req.body.id || Date.now().toString(),
    _id: req.body.id || Date.now().toString(),
    name: req.body.name || "Anonymous",
    email: req.body.email || "",
    phone: req.body.phone || "",
    service: req.body.service || "General Service",
    message: req.body.message || "",
    createdAt: req.body.createdAt || new Date().toISOString(),
    submittedAt: req.body.submittedAt || new Date().toISOString(),
    status: req.body.status || "New"
  };
  db.serviceBookings.unshift(booking);
  writeDB(db);
  console.log('New Service Booking saved:', booking.name, booking.service);
  res.status(201).json(booking);
});

app.put('/api/service-bookings/:id', (req, res) => {
  const db = readDB();
  const idToUpdate = req.params.id;
  const index = db.serviceBookings.findIndex(item => (item.id === idToUpdate || item._id === idToUpdate));
  if (index !== -1) {
    db.serviceBookings[index] = { ...db.serviceBookings[index], ...req.body };
    writeDB(db);
    res.json(db.serviceBookings[index]);
  } else {
    res.status(404).json({ error: "Booking not found" });
  }
});

app.delete('/api/service-bookings/:id', (req, res) => {
  const db = readDB();
  const idToDelete = req.params.id;
  db.serviceBookings = db.serviceBookings.filter(item => (item.id !== idToDelete && item._id !== idToDelete));
  writeDB(db);
  res.json({ success: true, message: "Deleted successfully" });
});

// 3. GENERAL INQUIRIES (Contact Page)
app.get('/api/inquiries', (req, res) => {
  const db = readDB();
  res.json(db.generalInquiries);
});

app.post('/api/inquiries', (req, res) => {
  const db = readDB();
  const inquiry = {
    id: req.body.id || Date.now().toString(),
    _id: req.body.id || Date.now().toString(),
    name: req.body.name || "Anonymous",
    email: req.body.email || "",
    phone: req.body.phone || "",
    message: req.body.message || "",
    createdAt: req.body.createdAt || new Date().toISOString(),
    status: req.body.status || "New"
  };
  db.generalInquiries.unshift(inquiry);
  writeDB(db);
  console.log('New General Inquiry saved:', inquiry.name);
  res.status(201).json(inquiry);
});

app.put('/api/inquiries/:id', (req, res) => {
  const db = readDB();
  const idToUpdate = req.params.id;
  const index = db.generalInquiries.findIndex(item => (item.id === idToUpdate || item._id === idToUpdate));
  if (index !== -1) {
    db.generalInquiries[index] = { ...db.generalInquiries[index], ...req.body };
    writeDB(db);
    res.json(db.generalInquiries[index]);
  } else {
    res.status(404).json({ error: "Inquiry not found" });
  }
});

app.delete('/api/inquiries/:id', (req, res) => {
  const db = readDB();
  const idToDelete = req.params.id;
  db.generalInquiries = db.generalInquiries.filter(item => (item.id !== idToDelete && item._id !== idToDelete));
  writeDB(db);
  res.json({ success: true, message: "Deleted successfully" });
});

// 4. FREE CONSULTATIONS
app.get('/api/free-consultations', (req, res) => {
  const db = readDB();
  res.json(db.freeConsultations);
});

app.post('/api/free-consultations', (req, res) => {
  const db = readDB();
  const consultation = {
    id: req.body.id || `fc_${Date.now()}`,
    _id: req.body.id || `fc_${Date.now()}`,
    name: req.body.name || "Anonymous",
    email: req.body.email || "",
    phone: req.body.phone || "",
    businessName: req.body.businessName || "N/A",
    service: req.body.service || "General Consultation",
    preferredDate: req.body.preferredDate || new Date().toISOString().split("T")[0],
    message: req.body.message || "",
    status: req.body.status || "New",
    createdAt: req.body.createdAt || new Date().toISOString()
  };
  db.freeConsultations.unshift(consultation);
  writeDB(db);
  console.log('New Free Consultation saved:', consultation.name, consultation.service);
  res.status(201).json(consultation);
});

app.put('/api/free-consultations/:id', (req, res) => {
  const db = readDB();
  const idToUpdate = req.params.id;
  const index = db.freeConsultations.findIndex(item => (item.id === idToUpdate || item._id === idToUpdate));
  if (index !== -1) {
    db.freeConsultations[index] = { ...db.freeConsultations[index], ...req.body };
    writeDB(db);
    res.json(db.freeConsultations[index]);
  } else {
    res.status(404).json({ error: "Consultation not found" });
  }
});

app.delete('/api/free-consultations/:id', (req, res) => {
  const db = readDB();
  const idToDelete = req.params.id;
  db.freeConsultations = db.freeConsultations.filter(item => (item.id !== idToDelete && item._id !== idToDelete));
  writeDB(db);
  res.json({ success: true, message: "Deleted successfully" });
});

// 5. TEAM CONSULTATIONS
app.get('/api/team-consultations', (req, res) => {
  const db = readDB();
  res.json(db.teamConsultations);
});

app.post('/api/team-consultations', (req, res) => {
  const db = readDB();
  const consultation = {
    id: req.body.id || `tc_${Date.now()}`,
    _id: req.body.id || `tc_${Date.now()}`,
    name: req.body.name || "Anonymous",
    email: req.body.email || "",
    phone: req.body.phone || "",
    inquiryType: req.body.inquiryType || "General Consultation",
    message: req.body.message || "",
    createdAt: req.body.createdAt || new Date().toISOString(),
    status: req.body.status || "New"
  };
  db.teamConsultations.unshift(consultation);
  writeDB(db);
  console.log('New Team Consultation saved:', consultation.name, consultation.inquiryType);
  res.status(201).json(consultation);
});

app.put('/api/team-consultations/:id', (req, res) => {
  const db = readDB();
  const idToUpdate = req.params.id;
  const index = db.teamConsultations.findIndex(item => (item.id === idToUpdate || item._id === idToUpdate));
  if (index !== -1) {
    db.teamConsultations[index] = { ...db.teamConsultations[index], ...req.body };
    writeDB(db);
    res.json(db.teamConsultations[index]);
  } else {
    res.status(404).json({ error: "Consultation not found" });
  }
});

app.delete('/api/team-consultations/:id', (req, res) => {
  const db = readDB();
  const idToDelete = req.params.id;
  db.teamConsultations = db.teamConsultations.filter(item => (item.id !== idToDelete && item._id !== idToDelete));
  writeDB(db);
  res.json({ success: true, message: "Deleted successfully" });
});

// 6. INTERNSHIP INQUIRIES
app.get('/api/internship-inquiries', (req, res) => {
  const db = readDB();
  res.json(db.internshipInquiries);
});

app.post('/api/internship-inquiries', (req, res) => {
  const db = readDB();
  const application = {
    id: req.body.id || Date.now().toString(),
    _id: req.body.id || Date.now().toString(),
    name: req.body.name || "Anonymous",
    email: req.body.email || "",
    phone: req.body.phone || "",
    internship: req.body.internship || "IT Internship",
    experience: req.body.experience || "",
    message: req.body.message || "",
    createdAt: req.body.createdAt || new Date().toISOString(),
    submittedAt: req.body.submittedAt || new Date().toISOString(),
    status: req.body.status || "New"
  };
  db.internshipInquiries.unshift(application);
  writeDB(db);
  console.log('New Internship Application saved:', application.name, application.internship);
  res.status(201).json(application);
});

app.put('/api/internship-inquiries/:id', (req, res) => {
  const db = readDB();
  const idToUpdate = req.params.id;
  const index = db.internshipInquiries.findIndex(item => (item.id === idToUpdate || item._id === idToUpdate));
  if (index !== -1) {
    db.internshipInquiries[index] = { ...db.internshipInquiries[index], ...req.body };
    writeDB(db);
    res.json(db.internshipInquiries[index]);
  } else {
    res.status(404).json({ error: "Application not found" });
  }
});

app.delete('/api/internship-inquiries/:id', (req, res) => {
  const db = readDB();
  const idToDelete = req.params.id;
  db.internshipInquiries = db.internshipInquiries.filter(item => (item.id !== idToDelete && item._id !== idToDelete));
  writeDB(db);
  res.json({ success: true, message: "Deleted successfully" });
});

// 7. STUDENTS
app.get('/api/students', (req, res) => {
  const db = readDB();
  res.json(db.students);
});

app.post('/api/students', (req, res) => {
  const db = readDB();
  const student = {
    _id: Date.now().toString(),
    ...req.body,
    createdAt: new Date().toISOString()
  };
  db.students.unshift(student);
  writeDB(db);
  res.status(201).json(student);
});

app.put('/api/students/:id', (req, res) => {
  const db = readDB();
  const id = req.params.id;
  const index = db.students.findIndex(s => s._id === id || s.id === id);
  if (index !== -1) {
    db.students[index] = { ...db.students[index], ...req.body };
    writeDB(db);
    res.json(db.students[index]);
  } else {
    res.status(404).json({ error: "Student not found" });
  }
});

app.delete('/api/students/:id', (req, res) => {
  const db = readDB();
  const id = req.params.id;
  db.students = db.students.filter(s => s._id !== id && s.id !== id);
  writeDB(db);
  res.json({ success: true });
});

// 8. ATTENDANCES
app.get('/api/attendances', (req, res) => {
  const db = readDB();
  res.json(db.attendances);
});

app.post('/api/attendances', (req, res) => {
  const db = readDB();
  const attendance = {
    _id: Date.now().toString(),
    ...req.body,
    createdAt: new Date().toISOString()
  };
  db.attendances.unshift(attendance);
  writeDB(db);
  res.status(201).json(attendance);
});

// Serve frontend build if exists
const buildPath = path.join(__dirname, 'build');
if (fs.existsSync(buildPath)) {
  app.use(express.static(buildPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`=========================================`);
  console.log(`Yugantar Technologies Backend Server Running`);
  console.log(`Port: ${PORT}`);
  console.log(`Database File: ${DB_FILE}`);
  console.log(`Ready to receive inquiries & admin requests`);
  console.log(`=========================================`);
});

