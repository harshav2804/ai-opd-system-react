// Helper function to get auth headers
const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    "Content-Type": "application/json",
    "Authorization": token ? `Bearer ${token}` : ""
  };
};

export const saveConsultation = async (data) => {
  const response = await fetch("http://localhost:5000/api/consultation", {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(data)
  });
  return response.json();
};

export const getConsultations = async () => {
  const response = await fetch("http://localhost:5000/api/history", {
    headers: getAuthHeaders()
  });
  return response.json();
};

export const getConsultationById = async (id) => {
  const response = await fetch(`http://localhost:5000/api/consultation/${id}`, {
    headers: getAuthHeaders()
  });
  return response.json();
};

export const generateReport = async (id) => {
  const response = await fetch(`http://localhost:5000/api/report/${id}`, {
    headers: getAuthHeaders()
  });
  return response.json();
};

export const getAllReports = async () => {
  const response = await fetch("http://localhost:5000/api/reports", {
    headers: getAuthHeaders()
  });
  return response.json();
};

// AI Report Generation
export const generateAIReport = async (transcript, patientInfo) => {
  const response = await fetch("http://localhost:5000/api/ai-report", {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify({ transcript, patientInfo })
  });
  return response.json();
};

export const updateConsultationWithAIReport = async (id, reportData) => {
  const response = await fetch(`http://localhost:5000/api/consultation/${id}/ai-report`, {
    method: "PUT",
    headers: getAuthHeaders(),
    body: JSON.stringify(reportData)
  });
  return response.json();
};

// ASR (Speech-to-Text) API
export const transcribeAudio = async (audioBlob, language = 'english') => {
  const token = localStorage.getItem("token");
  
  const formData = new FormData();
  formData.append('audio', audioBlob, 'recording.wav');
  formData.append('language', language);
  
  const response = await fetch("http://localhost:5000/api/transcribe", {
    method: "POST",
    headers: {
      "Authorization": token ? `Bearer ${token}` : ""
      // Don't set Content-Type for FormData, browser will set it with boundary
    },
    body: formData
  });
  
  return response.json();
};

// Translation API
export const translateText = async (text, targetLanguage) => {
  const response = await fetch("http://localhost:5000/api/translate", {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify({ text, targetLanguage })
  });
  return response.json();
};

export const translateConsultation = async (consultation, targetLanguage) => {
  const response = await fetch("http://localhost:5000/api/translate-consultation", {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify({ consultation, targetLanguage })
  });
  return response.json();
};

export const detectLanguage = async (text) => {
  const response = await fetch("http://localhost:5000/api/detect-language", {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify({ text })
  });
  return response.json();
};

// Profile API
export const getProfile = async () => {
  const response = await fetch("http://localhost:5000/api/profile", {
    headers: getAuthHeaders()
  });
  return response.json();
};

export const updateProfile = async (profileData) => {
  const response = await fetch("http://localhost:5000/api/profile", {
    method: "PUT",
    headers: getAuthHeaders(),
    body: JSON.stringify(profileData)
  });
  return response.json();
};

// Notification API
export const getNotifications = async () => {
  const response = await fetch("http://localhost:5000/api/notifications", {
    headers: getAuthHeaders()
  });
  return response.json();
};

export const createNotification = async (message) => {
  const response = await fetch("http://localhost:5000/api/notifications", {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify({ message })
  });
  return response.json();
};

export const markNotificationAsRead = async (id) => {
  const response = await fetch(`http://localhost:5000/api/notifications/${id}/read`, {
    method: "PUT",
    headers: getAuthHeaders()
  });
  return response.json();
};

export const markAllNotificationsAsRead = async () => {
  const response = await fetch("http://localhost:5000/api/notifications/read-all", {
    method: "PUT",
    headers: getAuthHeaders()
  });
  return response.json();
};

export const deleteNotification = async (id) => {
  const response = await fetch(`http://localhost:5000/api/notifications/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders()
  });
  return response.json();
};

// Appointments API
export const getAppointments = async () => {
  const response = await fetch("http://localhost:5000/api/appointments", {
    headers: getAuthHeaders()
  });
  return response.json();
};

export const createAppointment = async (appointmentData) => {
  const response = await fetch("http://localhost:5000/api/appointments", {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(appointmentData)
  });
  return response.json();
};

export const updateAppointment = async (id, appointmentData) => {
  const response = await fetch(`http://localhost:5000/api/appointments/${id}`, {
    method: "PUT",
    headers: getAuthHeaders(),
    body: JSON.stringify(appointmentData)
  });
  return response.json();
};

export const deleteAppointment = async (id) => {
  const response = await fetch(`http://localhost:5000/api/appointments/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders()
  });
  return response.json();
};