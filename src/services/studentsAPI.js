import BASE_URL, { fetchFast } from '../BASEURL';

const studentsAPI = {
  getAll: async () => {
    const response = await fetchFast(`${BASE_URL}/api/students`, {}, 3000);
    if (!response.ok) {
      throw new Error('Failed to fetch students. Please check your network connection.');
    }
    return await response.json();
  },

  create: async (studentData) => {
    const response = await fetchFast(`${BASE_URL}/api/students`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(studentData),
    }, 3000);
    if (!response.ok) {
      throw new Error('Failed to create student record.');
    }
    return await response.json();
  },

  update: async (id, studentData) => {
    const response = await fetchFast(`${BASE_URL}/api/students/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(studentData),
    }, 3000);
    if (!response.ok) {
      throw new Error('Failed to update student record.');
    }
    return await response.json();
  },

  delete: async (id) => {
    const response = await fetchFast(`${BASE_URL}/api/students/${id}`, {
      method: 'DELETE',
    }, 3000);
    if (!response.ok) {
      throw new Error('Failed to delete student record.');
    }
    return await response.json();
  },
};

export { studentsAPI };