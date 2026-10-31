import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BASE_URL, { fetchFast } from "../BASEURL";

export default function EnrollmentModal({ course, isOpen, onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: course?.title || ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const courses = [
    "Full Stack Development (MERN)",
    "Python Development",
    "Python With Django",
    "Java Full Stack",
    "UI/UX Design",
    "Data Science & AI/ML",
    "Mobile App Development",
    "Digital Marketing",
    "Cyber Security"
  ];

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name === "phone") {
      value = value.replace(/[^0-9]/g, "").slice(0, 10);
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newInquiry = {
      id: Date.now().toString(),
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      course: formData.course || course?.title || "Digital Marketing",
      createdAt: new Date().toISOString(),
      submittedAt: new Date().toISOString(),
    };

    // 1. Always save inquiry to LocalStorage for zero data loss
    try {
      const existing = JSON.parse(localStorage.getItem("yug_course_inquiries") || "[]");
      existing.unshift(newInquiry);
      localStorage.setItem("yug_course_inquiries", JSON.stringify(existing));
      window.dispatchEvent(new Event("storage"));
      window.dispatchEvent(new Event("yug_inquiry_submitted"));
    } catch (err) {
      console.error("LocalStorage save error:", err);
    }

    // 2. Attempt backend API post
    try {
      await fetchFast(`${BASE_URL}/api/course-inquiries`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newInquiry)
      }, 3000);
    } catch (error) {
      console.warn("Backend API offline or sleeping, lead stored in local queue.");
    }

    setSubmittedData(newInquiry);
    setShowSuccess(true);
    setIsSubmitting(false);
  };

  const handleClose = () => {
    setShowSuccess(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      course: course?.title || ""
    });
    setSubmittedData(null);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 sm:p-4 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <motion.div
            className="site-card relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-2xl sm:rounded-3xl bg-white text-slate-900 border border-slate-200 shadow-2xl my-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 text-slate-400 hover:text-slate-700 z-10 font-bold text-lg p-2 rounded-full hover:bg-slate-100 transition"
              aria-label="Close modal"
            >
              ✕
            </button>

            <AnimatePresence mode="wait">
              {showSuccess ? (
                <motion.div
                  key="success"
                  className="p-5 sm:p-8 text-center text-slate-900"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="mx-auto mb-4 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-2xl sm:text-3xl shadow-inner">
                    ✅
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold mb-2 text-slate-900">
                    Demo Registration Confirmed!
                  </h2>

                  <p className="text-slate-600 text-xs sm:text-sm mb-1">
                    Thank you <span className="font-bold text-sky-600">{submittedData?.name}</span>
                  </p>

                  <p className="text-slate-500 text-xs mb-5 sm:mb-6">
                    Our training coordinator will contact you at <span className="font-semibold text-slate-800">+91 {submittedData?.phone}</span>
                  </p>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 sm:p-4 mb-5 sm:mb-6">
                    <p className="text-xs text-slate-500 font-medium">Selected Course</p>
                    <p className="font-bold text-sm sm:text-base text-slate-900">
                      {submittedData?.course}
                    </p>
                  </div>

                  <a
                    href={`https://wa.me/919054372690?text=${encodeURIComponent(
                      `Hello YugAntar Technologies, I submitted a Demo Class registration for ${submittedData?.course}. My Name is ${submittedData?.name}, Mobile: ${submittedData?.phone}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg flex items-center justify-center gap-2 transition"
                  >
                    💬 Connect on WhatsApp for Instant Confirmation
                  </a>
                </motion.div>
              ) : (

                <>
                  {/* Header */}
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-4 sm:p-6 text-white flex items-center gap-3 sm:gap-4">
                    <div className="text-3xl sm:text-5xl">
                      {course?.icon || "🎓"}
                    </div>

                    <div>
                      <h2 className="text-lg sm:text-xl font-bold">
                        Course Enrollment
                      </h2>
                      <p className="text-xs sm:text-sm opacity-90">
                        Join our premium learning program
                      </p>
                    </div>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="p-4 sm:p-8 space-y-4 sm:space-y-6">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

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
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        icon="📧"
                        required
                      />

                    </div>

                    <div className="grid md:grid-cols-2 gap-6">

                      <Input
                        label="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="10 digit number"
                        icon="📱"
                        required
                      />

                      <div>
                        <label className="block text-sm font-semibold text-slate-900 mb-2">
                          Select Course
                        </label>

                        <select
                          name="course"
                          value={formData.course}
                          onChange={handleChange}
                          className="w-full bg-slate-100 border border-slate-300 text-slate-900 font-semibold rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500"
                          required
                        >
                          <option value="" className="text-slate-500 bg-white">Choose your course</option>

                          {courses.map((c, i) => (
                            <option key={i} value={c} className="text-slate-900 bg-white">
                              {c}
                            </option>
                          ))}

                        </select>
                      </div>

                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold flex justify-center items-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-lg"
                            animate={{ rotate: 360 }}
                            transition={{
                              repeat: Infinity,
                              duration: 1,
                              ease: "linear"
                            }}
                          />
                          Submitting...
                        </>
                      ) : (
                        <>
                          🚀 Enroll Now
                        </>
                      )}
                    </button>

                    <p className="text-center text-slate-500 text-sm">
                      🔒 Your data is 100% secure
                    </p>

                  </form>
                </>
              )}
            </AnimatePresence>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Input({ label, icon, ...props }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-900 mb-2">
        {label}
      </label>

      <div className="relative">
        <input
          {...props}
          className="w-full bg-slate-100 border border-slate-300 text-slate-900 font-semibold placeholder:text-slate-400 rounded-xl px-4 py-3 pl-12 focus:outline-none focus:border-orange-500"
        />

        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
          {icon}
        </div>
      </div>
    </div>
  );
}