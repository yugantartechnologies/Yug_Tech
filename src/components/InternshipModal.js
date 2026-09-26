import React, { useState } from "react";
import BASE_URL from "../BASEURL";

export default function InternshipModal({ internship, isOpen, onClose }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        internship: internship?.title || "",
        experience: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [submittedData, setSubmittedData] = useState(null);

    const internshipOptions = [
        "Web Development Internship",
        "Python Development Internship",
        "Digital Marketing Internship",
        "UI/UX Design Internship",
        "Data Science Internship",
        "Java Development Internship"
    ];

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

        const newApplication = {
            id: Date.now().toString(),
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            internship: formData.internship || internship?.title || "IT Internship",
            experience: formData.experience,
            message: formData.message,
            createdAt: new Date().toISOString()
        };

        // 1. Save to LocalStorage for zero data loss
        try {
            const existing = JSON.parse(localStorage.getItem("yug_internship_inquiries") || "[]");
            existing.unshift(newApplication);
            localStorage.setItem("yug_internship_inquiries", JSON.stringify(existing));
            window.dispatchEvent(new Event("storage"));
            window.dispatchEvent(new Event("yug_inquiry_submitted"));
        } catch (err) {
            console.error("LocalStorage save error:", err);
        }

        // 2. Post to backend API
        try {
            await fetch(`${BASE_URL}/api/internship-inquiries`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newApplication)
            });
        } catch (error) {
            console.warn('Backend endpoint offline, saved locally to queue.');
        }

        setSubmittedData(newApplication);
        setShowSuccess(true);
        setIsSubmitting(false);
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-xs p-3 sm:p-4 overflow-y-auto"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-lg bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden animate-scale-in max-h-[90vh] flex flex-col my-auto border border-slate-200"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 text-white/80 hover:text-white bg-black/20 hover:bg-black/40 w-8 h-8 rounded-full flex items-center justify-center text-lg z-10 transition duration-200 cursor-pointer"
                    aria-label="Close Modal"
                >
                    ✕
                </button>

                {/* SUCCESS SCREEN */}
                {showSuccess ? (
                    <div className="p-6 sm:p-10 text-center overflow-y-auto">
                        <div className="mx-auto mb-5 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shadow-inner">
                            <span className="text-3xl sm:text-4xl">✅</span>
                        </div>

                        <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-2 tracking-tight">
                            Application Submitted!
                        </h2>

                        <p className="text-slate-600 text-sm sm:text-base mb-1">
                            Thank you <b className="text-slate-900">{submittedData?.name}</b>
                        </p>

                        <p className="text-slate-600 text-sm sm:text-base mb-5">
                            We'll contact you at <span className="font-semibold text-sky-600">{submittedData?.phone}</span>
                        </p>

                        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 mb-6 text-left">
                            <p className="text-xs text-slate-500 font-mono uppercase tracking-wider mb-1">Applied for Program</p>
                            <p className="font-bold text-slate-900 text-base">
                                {submittedData?.internship}
                            </p>
                        </div>

                        <button
                            onClick={onClose}
                            className="w-full py-3 rounded-xl bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 text-white font-bold hover:shadow-lg transition-all text-sm cursor-pointer"
                        >
                            Done
                        </button>
                    </div>
                ) : (
                    <>
                        {/* HEADER */}
                        <div className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 p-5 sm:p-6 text-white shrink-0">
                            <div className="flex items-center gap-3 sm:gap-4 pr-6">
                                <div className="p-2.5 bg-white/10 rounded-xl backdrop-blur-sm flex shrink-0 items-center justify-center">
                                    {internship?.icon || <span className="text-2xl">🎓</span>}
                                </div>
                                <div className="text-left">
                                    <h2 className="text-lg sm:text-xl font-bold leading-snug">Internship Application</h2>
                                    <p className="text-white/90 text-xs sm:text-sm font-medium line-clamp-1">{internship?.title || "IT & Technology Internship"}</p>
                                </div>
                            </div>
                        </div>

                        {/* BODY */}
                        <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4 sm:space-y-5 overflow-y-auto text-left">
                            {/* Personal Information */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                <Input
                                    label="Full Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your full name"
                                    required
                                />

                                <Input
                                    label="Email Address"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="you@example.com"
                                    required
                                />
                            </div>

                            {/* Contact & Program */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                <Input
                                    label="Phone Number"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="10-digit mobile number"
                                    pattern="[0-9]{10}"
                                    maxLength="10"
                                    inputMode="numeric"
                                    required
                                />

                                <div>
                                    <label className="block text-xs sm:text-sm font-semibold text-slate-900 mb-1.5">
                                        Select Program
                                    </label>

                                    <select
                                        name="internship"
                                        value={formData.internship}
                                        onChange={handleChange}
                                        className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 sm:py-3 
                                                text-slate-900 bg-slate-50 text-sm
                                                focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none font-medium"
                                        required
                                    >
                                        <option value="" style={{ color: "gray" }}>
                                        Choose an internship
                                        </option>

                                        {internshipOptions.map((option, index) => (
                                        <option
                                            key={index}
                                            value={option}
                                            style={{ color: "black", backgroundColor: "white" }}
                                        >
                                            {option}
                                        </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Experience Level */}
                            <div>
                                <label className="block text-xs sm:text-sm font-semibold text-slate-900 mb-1.5">
                                    Prior Experience Level
                                </label>

                                <select
                                    name="experience"
                                    value={formData.experience}
                                    onChange={handleChange}
                                    className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 sm:py-3 
                                            text-slate-900 bg-slate-50 text-sm
                                            focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none font-medium"
                                >
                                    <option value="" style={{ color: "gray" }}>
                                    Select experience level
                                    </option>

                                    <option value="beginner" style={{ color: "black", backgroundColor: "white" }}>
                                    Fresher (No prior experience)
                                    </option>

                                    <option value="intermediate" style={{ color: "black", backgroundColor: "white" }}>
                                    Intermediate (1-2 years)
                                    </option>

                                    <option value="advanced" style={{ color: "black", backgroundColor: "white" }}>
                                    Advanced (2+ years)
                                    </option>
                                </select>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-xs sm:text-sm font-semibold text-slate-900 mb-1.5">
                                    Why do you want this internship? (Optional)
                                </label>
                                <textarea
                                    name="message"
                                    rows="2"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 sm:py-3 bg-slate-50 text-slate-900 text-sm font-medium placeholder:text-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none resize-none"
                                    placeholder="Tell us about your goals and expectations"
                                />
                            </div>

                            {/* CTA Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 text-white font-bold hover:shadow-lg transition-all flex justify-center items-center gap-2 text-sm sm:text-base cursor-pointer"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        Submitting...
                                    </>
                                ) : (
                                    "Submit Application"
                                )}
                            </button>

                            <p className="text-[11px] text-center text-slate-500 font-medium">
                                🔒 Your information is secure and confidential
                            </p>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}

/* Reusable Input Component */
function Input({ label, ...props }) {
    return (
        <div>
            <label className="block text-xs sm:text-sm font-semibold text-slate-900 mb-1.5">
                {label}
            </label>
            <input
                {...props}
                className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 sm:py-3 bg-slate-50 text-slate-900 text-sm font-medium placeholder:text-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none"
            />
        </div>
    );
}