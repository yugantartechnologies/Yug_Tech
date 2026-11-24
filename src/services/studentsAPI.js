import BASE_URL, { fetchFast } from '../BASEURL';

const STORAGE_KEY = 'yug_students';

const SEED_STUDENTS = [
  {
    _id: "std_seed1",
    id: "std_seed1",
    name: "Aakash Varma",
    email: "aakash.varma@gmail.com",
    mobile: "9879012345",
    rollNo: "101",
    type: "Student",
    course: "Full Stack Development (MERN)",
    collegeName: "L.D. College of Engineering",
    currentSemester: "7th",
    passingYear: "2026",
    cgpa: "8.4",
    mode: "Offline Classroom",
    internshipType: "Full-Stack Development",
    internshipDuration: "6 Months",
    preferredStartDate: "2026-12-01",
    address: { city: "Ahmedabad", state: "Gujarat" },
    createdAt: new Date(Date.now() - 86400000 * 5).toISOString()
  },
  {
    _id: "std_seed2",
    id: "std_seed2",
    name: "Bhavna Trivedi",
    email: "bhavna.t@gmail.com",
    mobile: "9823456711",
    rollNo: "102",
    type: "Intern",
    course: "Python & Data Science",
    collegeName: "Nirma University",
    currentSemester: "8th",
    passingYear: "2026",
    cgpa: "8.9",
    mode: "Hybrid",
    internshipType: "AI & Machine Learning",
    internshipDuration: "6 Months",
    preferredStartDate: "2026-11-25",
    address: { city: "Gandhinagar", state: "Gujarat" },
    createdAt: new Date(Date.now() - 86400000 * 12).toISOString()
  }
];

const getLocal = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED_STUDENTS));
      return SEED_STUDENTS;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : SEED_STUDENTS;
  } catch (e) {
    return SEED_STUDENTS;
  }
};

const setLocal = (data) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    window.dispatchEvent(new Event('storage'));
    window.dispatchEvent(new Event('yug_inquiry_submitted'));
  } catch (e) {}
};

const studentsAPI = {
  getAll: async () => {
    const local = getLocal();
    let remote = [];
    try {
      const response = await fetchFast(`${BASE_URL}/api/students`, {}, 2500);
      if (response.ok) {
        remote = await response.json();
      }
    } catch (e) {}

    const map = new Map();
    [...remote, ...local].forEach((s) => {
      const k = s._id || s.id || s.email;
      if (!map.has(k)) map.set(k, s);
    });

    const merged = Array.from(map.values());
    setLocal(merged);
    return merged;
  },

  create: async (studentData) => {
    const newStudent = {
      _id: `std_${Date.now()}`,
      id: `std_${Date.now()}`,
      ...studentData,
      createdAt: new Date().toISOString()
    };

    const local = getLocal();
    local.unshift(newStudent);
    setLocal(local);

    try {
      const response = await fetchFast(`${BASE_URL}/api/students`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newStudent),
      }, 3000);
      if (response.ok) {
        const saved = await response.json();
        return saved;
      }
    } catch (e) {}

    return newStudent;
  },

  update: async (id, studentData) => {
    const local = getLocal();
    const updated = local.map((s) => (s._id === id || s.id === id ? { ...s, ...studentData } : s));
    setLocal(updated);

    try {
      const response = await fetchFast(`${BASE_URL}/api/students/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(studentData),
      }, 2500);
      if (response.ok) {
        return await response.json();
      }
    } catch (e) {}

    return { _id: id, ...studentData };
  },

  delete: async (id) => {
    const local = getLocal();
    const filtered = local.filter((s) => s._id !== id && s.id !== id);
    setLocal(filtered);

    try {
      await fetchFast(`${BASE_URL}/api/students/${id}`, {
        method: 'DELETE',
      }, 2500);
    } catch (e) {}

    return { success: true };
  },
};

export { studentsAPI };
