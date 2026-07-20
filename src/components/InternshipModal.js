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
        "Mobile App Development Internship",
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

        try {
            const response = await fetch(`${BASE_URL}/api/internship-inquiries`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    createdAt: new Date().toISOString()
                })
            });

            if (response.ok) {
                // eslint-disable-next-line no-unused-vars
                const data = await response.json();
                setSubmittedData(formData);
                setShowSuccess(true);
                setIsSubmitting(false);

                setTimeout(() => {
                    onClose();
                    setShowSuccess(false);
                    setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        internship: internship?.title || "",
                        experience: "",
                        message: ""
                    });
                    setSubmittedData(null);
                }, 2500);
            } else {
                console.error('Failed to submit application');
                setIsSubmitting(false);
                alert('Failed to submit application. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting application:', error);
            setIsSubmitting(false);
            alert('Error submitting application. Please check your connection.');
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70  p-4"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-lg site-card rounded-3xl overflow-hidden animate-scale-in"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-slate-400 hover:text-gray-700 text-2xl"
                >
                    ✕
                </button>

                {/* SUCCESS */}
                {showSuccess ? (
                    <div className="p-10 text-center">
                        <div className="mx-auto mb-6 w-20 h-20 rounded-lg bg-green-100 flex items-center justify-center">
                            <span className="text-4xl">✅</span>
                        </div>

                        <h2 className="text-2xl font-bold text-white mb-2">
                            Application Submitted!
                        </h2>

                        <p className="text-gray-600 mb-1">
                            Thank you <b>{submittedData?.name}</b>
                        </p>

                        <p className="text-gray-600 mb-4">
                            We'll contact you at <span className="font-semibold text-orange-600">{submittedData?.phone}</span>
                        </p>

                        <div className="bg-gray-50 rounded-xl p-4">
                            <p className="text-sm text-slate-500">Applied for</p>
                            <p className="font-semibold text-white">
                                {submittedData?.internship}
                            </p>
                        </div>
                    </div>
                ) : (
                    <>
                        {/* HEADER */}
                        <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white">
                            <div className="flex items-center gap-4">
                                <div className="text-4xl">{internship?.icon}</div>
                                <div>
                                    <h2 className="text-xl font-bold">Internship Application</h2>
                                    <p className="text-white/90 text-sm">{internship?.title}</p>
                                </div>
                            </div>
                        </div>

                        {/* BODY */}
                        <form onSubmit={handleSubmit} className="p-6 space-y-5">
                            {/* Personal Information */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                                        Select Internship Program
                                    </label>

                                    <select
                                        name="internship"
                                        value={formData.internship}
                                        onChange={handleChange}
                                        className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 
                                                text-gray-900 bg-slate-50 
                                                focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
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
                                <label className="block text-sm font-semibold text-slate-900 mb-2">
                                    Prior Experience Level
                                </label>

                                <select
                                    name="experience"
                                    value={formData.experience}
                                    onChange={handleChange}
                                    className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 
                                            text-gray-900 bg-slate-50 
                                            focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none"
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
                                <label className="block text-sm font-semibold text-slate-900 mb-2">
                                    Why do you want this internship? (Optional)
                                </label>
                                <textarea
                                    name="message"
                                    rows="3"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 resize-none"
                                    placeholder="Tell us about your goals, expectations, and why you're interested in this internship"
                                />
                            </div>

                            {/* CTA */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold hover:opacity-90 transition-all flex justify-center items-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-lg animate-spin"></div>
                                        Submitting...
                                    </>
                                ) : (
                                    "Submit Application"
                                )}
                            </button>

                            <p className="text-xs text-center text-slate-500">
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
            <label className="block text-sm font-semibold text-slate-900 mb-2">
                {label}
            </label>
            <input
                {...props}
                className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
            />
        </div>
    );
}