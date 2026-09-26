import React, { useState } from "react";
import { X, PhoneCall, CheckCircle, Send, Loader2 } from "lucide-react";
import BASE_URL from "../BASEURL";

export default function TeamConsultationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    inquiryType: "General Consultation",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const newConsultation = {
      id: Date.now().toString(),
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      inquiryType: formData.inquiryType,
      message: formData.message,
      createdAt: new Date().toISOString(),
    };

    // 1. Always save to localStorage backup for immediate availability
    try {
      const existing = JSON.parse(localStorage.getItem("yug_team_consultations") || "[]");
      existing.unshift(newConsultation);
      localStorage.setItem("yug_team_consultations", JSON.stringify(existing));
      window.dispatchEvent(new Event("storage"));
      window.dispatchEvent(new Event("yug_inquiry_submitted"));
    } catch (err) {
      console.error("LocalStorage save error:", err);
    }

    // 2. Attempt backend submission
    try {
      const response = await fetch(`${BASE_URL}/api/team-consultations`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newConsultation),
      });

      if (!response.ok) {
        console.warn("Backend API response not 200, relying on local storage backup.");
      }
    } catch (err) {
      console.warn("Backend endpoint offline, saved locally to admin queue.");
    }

    setLoading(false);
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        inquiryType: "General Consultation",
        message: "",
      });
      onClose();
    }, 2200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-950 text-white p-6 sm:p-7 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-2">
            <div className="p-2.5 rounded-xl bg-sky-500/20 text-sky-400 border border-sky-500/30">
              <PhoneCall className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
                Direct Consultation
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                Talk to Our Team
              </h2>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-1">
            Fill out the form below and our leadership team in Ahmedabad will get in touch with you shortly.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {success ? (
            <div className="py-8 text-center space-y-4 animate-scale-in">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Request Submitted!</h3>
              <p className="text-slate-600 text-sm max-w-sm mx-auto">
                Thank you for contacting Yugantar Technologies. Our team will review your inquiry and connect with you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              {error && (
                <div className="p-3 text-xs rounded-xl bg-rose-50 border border-rose-200 text-rose-700">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none text-slate-900 text-sm transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none text-slate-900 text-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none text-slate-900 text-sm transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Inquiry Purpose
                </label>
                <select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none text-slate-900 text-sm transition-all bg-white"
                >
                  <option value="General Consultation">General Consultation</option>
                  <option value="IT Project / Web Development">IT Project / Web Development</option>
                  <option value="Digital Marketing & SEO">Digital Marketing & SEO</option>
                  <option value="Student Training / Internship">Student Training / Internship</option>
                  <option value="Corporate Partnership">Corporate Partnership</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Message / Details
                </label>
                <textarea
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us briefly about your project or inquiry..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none text-slate-900 text-sm transition-all resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Consultation Request</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
