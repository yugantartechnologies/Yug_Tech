import BASE_URL from '../BASEURL';

const attendanceAPI = {
  getAll: async () => {
    const response = await fetch(`${BASE_URL}/api/attendances`);
    if (!response.ok) {
      throw new Error('Failed to fetch attendance data. Please check your network connection.');
    }
    return await response.json();
  },

  create: async (attendanceData) => {
    const response = await fetch(`${BASE_URL}/api/attendances`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(attendanceData),
    });
    if (!response.ok) {
      throw new Error('Failed to create attendance record.');
    }
    return await response.json();
  },
};

export { attendanceAPI };