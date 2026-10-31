// Smart BASE_URL detection for development and production
const getBaseUrl = () => {
  if (typeof window !== "undefined") {
    const { hostname } = window.location;
    // Local development or local network IP (e.g. mobile testing on same Wi-Fi)
    if (
      hostname === "localhost" ||
      hostname === "127.0.0.1" ||
      hostname.startsWith("192.168.") ||
      hostname.startsWith("10.")
    ) {
      return `http://${hostname}:5000`;
    }
    // Custom backend URL provided via environment
    if (process.env.REACT_APP_API_URL) {
      return process.env.REACT_APP_API_URL;
    }
    // Production deployed origin
    return window.location.origin;
  }
  return "http://localhost:5000";
};

const BASE_URL = getBaseUrl();

// Fast fetch with timeout helper to ensure the UI never hangs
export const fetchFast = async (url, options = {}, timeoutMs = 3000) => {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, { ...options, signal: controller.signal });
    clearTimeout(id);
    return res;
  } catch (err) {
    clearTimeout(id);
    throw err;
  }
};

export default BASE_URL;
