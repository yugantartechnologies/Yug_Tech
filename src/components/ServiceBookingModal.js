import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BASE_URL from "../BASEURL";

export default function ServiceBookingModal({ service, isOpen, onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: service?.title || "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    let { name, value } = e.target;
    
    // For phone field, only allow digits and limit to 10
    if (name === 'phone') {
      value = value.replace(/[^0-9]/g, '').slice(0, 10);
    }
    
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newBooking = {
      id: Date.now().toString(),
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: formData.service || service?.title || "IT Solution",
      message: formData.message,
      createdAt: new Date().toISOString(),
      submittedAt: new Date().toISOString(),
    };

    // 1. Save to localStorage for zero data loss
    try {
      const existing = JSON.parse(localStorage.getItem("yug_service_bookings") || "[]");
      existing.unshift(newBooking);
      localStorage.setItem("yug_service_bookings", JSON.stringify(existing));
      window.dispatchEvent(new Event("storage"));
      window.dispatchEvent(new Event("yug_inquiry_submitted"));
    } catch (err) {
      console.error("LocalStorage save error:", err);
    }

    // 2. Post to backend API
    try {
      await fetch(`${BASE_URL}/api/service-bookings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBooking)
      });
    } catch (error) {
      console.warn("Backend endpoint offline, saved locally to queue.");
    }

    setSubmittedData(newBooking);
    setShowSuccess(true);
    setIsSubmitting(false);
  };

  const handleClose = () => {
    setShowSuccess(false);
    setFormData({ name: "", email: "", phone: "", service: service?.title || "", message: "" });
    setSubmittedData(null);
    onClose();
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.3 } }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70  p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <motion.div
            className="relative w-full max-w-2xl site-card rounded-3xl overflow-hidden bg-white text-slate-900 border border-slate-200 shadow-2xl"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button
              onClick={handleClose}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-700 z-10 font-bold text-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ✕
            </motion.button>

            {/* SUCCESS STATE */}
            <AnimatePresence mode="wait">
              {showSuccess ? (
                <motion.div
                  key="success"
                  className="p-8 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="mx-auto mb-4 w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-3xl shadow-inner"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    ✅
                  </motion.div>

                  <h2 className="text-2xl font-bold text-slate-900 mb-2">
                    Service Booking Confirmed!
                  </h2>

                  <p className="text-slate-600 text-sm mb-1">
                    Thank you <span className="font-bold text-sky-600">{submittedData?.name}</span>
                  </p>

                  <p className="text-slate-500 text-xs mb-6">
                    Our technical consultant will contact you at{" "}
                    <span className="font-semibold text-slate-800">
                      +91 {submittedData?.phone}
                    </span>
                  </p>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-6">
                    <p className="text-xs text-slate-500 font-medium mb-1">Selected Service</p>
                    <p className="font-bold text-base text-slate-900">
                      {submittedData?.service}
                    </p>
                  </div>

                  <a
                    href={`https://wa.me/919054372690?text=${encodeURIComponent(
                      `Hello YugAntar Technologies, I submitted a service booking inquiry for ${submittedData?.service}. My Name is ${submittedData?.name}, Mobile: ${submittedData?.phone}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow-lg flex items-center justify-center gap-2 transition"
                  >
                    💬 Connect on WhatsApp for Instant Consultation
                  </a>
                </motion.div>
              ) : (
                <motion.div key="form" variants={formVariants} initial="hidden" animate="visible">
                  {/* HEADER */}
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-8 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative flex items-center gap-6">
                      <motion.div
                        className="text-6xl opacity-90"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, type: "spring" }}
                      >
                        {service?.icon || "🔧"}
                      </motion.div>
                      <div>
                        <h2 className="text-2xl font-bold mb-2">Service Booking</h2>
                        <p className="text-primary-100">Book our premium IT services</p>
                      </div>
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-orange-500/10 rounded-lg blur-xl"></div>
                  </div>

                  {/* BODY */}
                  <form onSubmit={handleSubmit} className="p-8 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        label="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        icon="👤"
                        required
                      />

                      <Input
                        label="Email Address"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        icon="📧"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        label="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="10-digit mobile number"
                        pattern="[0-9]{10}"
                        maxLength="10"
                        inputMode="numeric"
                        icon="📱"
                        required
                      />

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          Selected Service
                        </label>
                        <div className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 bg-gray-50 text-gray-700 font-medium">
                          {service?.title || "Service"}
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Additional Requirements (Optional)
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us more about your requirements..."
                        rows="4"
                        className="w-full rounded-xl border-2 border-slate-200 px-4 py-3 bg-slate-50 text-slate-900 font-semibold placeholder:text-slate-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all resize-none outline-none"
                      />
                    </div>

                    {/* CTA */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-lg hover:shadow-lg transition-all flex justify-center items-center gap-3 disabled:opacity-50"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-lg"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          Submitting...
                        </>
                      ) : (
                        <>
                          🚀 Book Service
                        </>
                      )}
                    </motion.button>

                    {/* TRUST */}
                    <div className="text-center">
                      <p className="text-sm text-slate-500 flex items-center justify-center gap-2">
                        <span>🔒</span>
                        Your data is 100% secure & confidential
                      </p>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* Enhanced Input Component */
function Input({ label, icon, ...props }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-900 mb-3">
        {label}
      </label>
      <div className="relative">
        <input
          {...props}
          className="w-full rounded-xl border-2 border-slate-200 px-4 py-3 pl-12 bg-slate-50 text-slate-900 font-semibold placeholder:text-slate-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all outline-none"
        />
        {icon && (
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}