import React, { useState } from "react";
import { X, Calendar, CheckCircle, Send, Loader2, ShieldCheck } from "lucide-react";
import BASE_URL from "../BASEURL";

export default function FreeConsultationModal({ isOpen, onClose, defaultService = "General Consultation" }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    businessName: "",
    service: defaultService || "General Consultation",
    preferredDate: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "phone") {
      value = value.replace(/[^0-9+ ]/g, "").slice(0, 15);
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const newConsultation = {
      id: "fc_" + Date.now(),
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim(),
      businessName: formData.businessName.trim() || "N/A",
      service: formData.service || "General Consultation",
      preferredDate: formData.preferredDate || new Date().toISOString().split("T")[0],
      message: formData.message.trim() || "Free consultation request",
      status: "New",
      createdAt: new Date().toISOString()
    };

    // 1. Save to LocalStorage backup for 0 data loss
    try {
      const existing = JSON.parse(localStorage.getItem("yug_free_consultations") || "[]");
      existing.unshift(newConsultation);
      localStorage.setItem("yug_free_consultations", JSON.stringify(existing));
      window.dispatchEvent(new Event("storage"));
      window.dispatchEvent(new Event("yug_inquiry_submitted"));
    } catch (err) {
      console.error("LocalStorage save error:", err);
    }

    // 2. Submit to backend API endpoint if available
    try {
      await fetch(`${BASE_URL}/api/free-consultations`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newConsultation)
      });
    } catch (err) {
      console.warn("Backend offline or endpoint unmapped, saved locally to admin queue.");
    }

    setLoading(false);
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        businessName: "",
        service: defaultService || "General Consultation",
        preferredDate: "",
        message: ""
      });
      onClose();
    }, 2200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
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
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
                100% Free & No Obligation
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                Book Free Consultation
              </h2>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-1">
            Schedule a 1-on-1 session with our tech & marketing specialists in Ahmedabad.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
          {success ? (
            <div className="py-8 text-center space-y-4 animate-scale-in">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Consultation Booked!</h3>
              <p className="text-slate-600 text-sm max-w-sm mx-auto">
                Thank you! Your free consultation request has been registered. Our expert team will get in touch with you shortly.
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Company / Business Name
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="e.g. TechCorp / Startup"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none text-slate-900 text-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-sky-500" />
                    <span>Preferred Date</span>
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none text-slate-900 text-sm transition-all bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Interested Service / Topic
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none text-slate-900 text-sm transition-all bg-white"
                >
                  <option value="Website & Web App Development">Website & Web App Development</option>
                  <option value="SEO & Search Engine Ranking">SEO & Search Engine Ranking</option>
                  <option value="Social Media & Performance Marketing">Social Media & Performance Marketing</option>
                  <option value="Google Business Profile Optimization">Google Business Profile Optimization</option>
                  <option value="Custom CRM & Software Development">Custom CRM & Software Development</option>
                  <option value="IT Internship & Skill Training">IT Internship & Skill Training</option>
                  <option value="General Tech Consultation">General Tech Consultation</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Project Details / Goal
                </label>
                <textarea
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us briefly about your business goals or what you'd like to discuss..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none text-slate-900 text-sm transition-all resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/35 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Confirm Free Consultation</span>
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
