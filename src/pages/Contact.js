import React, { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import BASE_URL, { fetchFast } from "../BASEURL";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.title = "Contact | YugAntar Technologies";
    window.scrollTo(0, 0);
  }, []);
  
  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "phone") {
      value = value.replace(/[^0-9]/g, "").slice(0, 10);
    }
    setFormData({ ...formData, [name]: value });
  };

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newInquiry = {
      id: Date.now().toString(),
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      createdAt: new Date().toISOString()
    };

    // 1. LocalStorage backup for zero data loss
    try {
      const existing = JSON.parse(localStorage.getItem("yug_general_inquiries") || "[]");
      existing.unshift(newInquiry);
      localStorage.setItem("yug_general_inquiries", JSON.stringify(existing));
      window.dispatchEvent(new Event("storage"));
      window.dispatchEvent(new Event("yug_inquiry_submitted"));
    } catch (err) {
      console.error("LocalStorage save error:", err);
    }

    // 2. Post to backend
    try {
      await fetchFast(`${BASE_URL}/api/inquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newInquiry)
      }, 3000);
    } catch (error) {
      console.warn("Backend API offline, general inquiry cached locally.");
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen font-sans">
      <Navbar />
      
      {/* Hero Section with Animated Glow */}
      <div className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 blur-[120px] rounded-lg"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-300/10 blur-[120px] rounded-lg delay-700"></div>
        <PageHeader 
          title="Start a Conversation" 
          subtitle="Whether you have a question or a project in mind, our team is ready to help." 
        />
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 sm:pb-32">
        
        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-24">
          {[
            { t: "Call Directly", c: "+91 9054372690", i: <Phone className="w-8 h-8 text-orange-500" />, b: "hover:border-orange-500/30" },
            { t: "Inquiry Support", c: "Available Mon - Sat (9 AM - 7 PM)", i: <Phone className="w-8 h-8 text-orange-500" />, b: "hover:border-orange-500/30" },
            { t: "Work with Us", c: "info@yugantartechnologies.com", i: <Mail className="w-8 h-8 text-orange-500" />, b: "hover:border-orange-500/30" }
          ].map((item, i) => (
            <div key={i} className={`p-5 sm:p-8 rounded-2xl sm:rounded-[2rem] site-card ${item.b} transition-all duration-300 group`}>
              <div className="mb-4 transition-transform duration-300 group-hover:scale-110">{item.i}</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-slate-900">{item.t}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.c}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12">
          
          {/* Futuristic Form */}
          <div className="site-card w-full lg:w-3/5 rounded-2xl sm:rounded-[3rem] p-5 sm:p-8 md:p-12 relative">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-10 tracking-tight">Send us a <span className="text-orange-500 font-black">Digital Brief</span></h2>
            
            {submitted && (
              <div className="p-4 mb-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 font-semibold text-sm">
                Thank you! Your inquiry has been submitted successfully. Our team will get back to you shortly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div className="relative group">
                  <input
                    type="text" name="name" value={formData.name} onChange={handleChange} required
                    className="w-full bg-transparent border-b-2 border-slate-300 py-3 focus:border-orange-500 outline-none transition-all placeholder:text-slate-600 text-slate-900"
                    placeholder="Your Name"
                  />
                </div>
                <div className="relative group">
                  <input
                    type="text" name="phone" value={formData.phone} onChange={handleChange} required
                    className="w-full bg-transparent border-b-2 border-slate-300 py-3 focus:border-orange-500 outline-none transition-all placeholder:text-slate-600 text-slate-900"
                    placeholder="Phone Number"
                  />
                </div>
              </div>

              <input
                type="email" name="email" value={formData.email} onChange={handleChange} required
                className="w-full bg-transparent border-b-2 border-slate-300 py-3 focus:border-orange-500 outline-none transition-all placeholder:text-slate-600 text-slate-900"
                placeholder="Email Address"
              />

              <textarea
                name="message" rows="4" value={formData.message} onChange={handleChange} required
                className="w-full bg-transparent border-b-2 border-slate-300 py-3 focus:border-orange-500 outline-none transition-all resize-none placeholder:text-slate-600 text-slate-900"
                placeholder="Project details or questions..."
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto group relative inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-4 font-bold text-white transition-all duration-200 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 rounded-xl shadow-lg shadow-orange-500/25 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-300 disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? "TRANSMITTING..." : "SEND MESSAGE"}
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </form>
          </div>

          {/* Official Location & Support */}
          <div className="w-full lg:w-2/5 space-y-8">
            {/* Official Office Address Card */}
            <div className="rounded-2xl sm:rounded-[3rem] p-5 sm:p-8 bg-slate-900 text-white border border-slate-800 shadow-2xl flex flex-col justify-between">
              <div>
                <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-orange-500/20 text-orange-400 border border-orange-500/30 uppercase tracking-wider font-mono inline-flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  Official Office Address
                </span>
                <h3 className="text-2xl font-bold mt-4 mb-3 text-white">Visit Our Headquarters</h3>
                <p className="text-slate-200 text-base font-semibold leading-relaxed">
                  A-604, Sanskrit Galleria, Near Hanuman Temple, Rangoli Ice Cream, Gurukul Road, Memnagar, Ahmedabad - 380052
                </p>
                <p className="text-slate-400 text-xs mt-3 leading-relaxed">
                  Connect with our team for in-person project meetings, software consultations, and course enrollments.
                </p>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://maps.google.com/?q=Sanskrit+Galleria+Gurukul+Road+Memnagar+Ahmedabad+380052"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white font-bold py-3.5 px-5 rounded-2xl shadow-lg shadow-blue-500/20 transition text-sm"
                >
                  <MapPin className="w-4 h-4" />
                  Get Directions
                  <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                </a>

                <a
                  href="tel:9054372690"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold py-3.5 px-6 rounded-2xl shadow-lg shadow-orange-500/20 hover:shadow-orange-500/35 transition text-sm"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-br from-secondary-500/10 to-primary-500/10 p-10 rounded-[3rem] border border-white/5">
              <h3 className="text-2xl font-bold mb-6 italic">Support Hours</h3>
              <div className="space-y-4">
                {[
                  { d: "Weekdays", t: "09:00 - 19:00" },
                  { d: "Saturday", t: "09:00 - 17:00" },
                  { d: "Sunday", t: "Emergency Only", c: "text-orange-500" }
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="text-slate-600">{row.d}</span>
                    <span className={`font-mono font-bold ${row.c || 'text-slate-900'}`}>{row.t}</span>
                  </div>
                ))}
              </div>
              <a href="tel:+919054372690" className="mt-8 block text-center py-4 rounded-2xl bg-slate-100/80 border border-slate-700 hover:bg-slate-700 transition-all font-bold tracking-widest text-xs uppercase text-orange-500">
                Direct Emergency Call
              </a>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}