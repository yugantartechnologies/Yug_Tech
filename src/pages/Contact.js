import React, { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import BASE_URL from "../BASEURL";
import { MapPin, Phone, Mail } from "lucide-react";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch(`${BASE_URL}/api/inquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, createdAt: new Date().toISOString() })
      });

      if (response.ok) {
        alert("Success! We'll reach out to you shortly.");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert("Unable to submit right now. Please try again in a moment.");
      }
    } catch (error) {
      alert("Network error. Please check your internet connection and retry.");
    } finally {
      setIsSubmitting(false);
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

      <main className="max-w-7xl mx-auto px-6 pb-32">
        
        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            { t: "Drop by Office", c: "2nd floor, Yash Aqua, 204, Vijay Cross Rd, University Area, Ahmedabad, Gujarat 380009", i: <MapPin className="w-8 h-8 text-orange-500" />, b: "hover:border-orange-500/30" },
            { t: "Call Directly", c: "+91 6355582605", i: <Phone className="w-8 h-8 text-orange-500" />, b: "hover:border-orange-500/30" },
            { t: "Work with Us", c: "info@yugantartechnologies.com", i: <Mail className="w-8 h-8 text-orange-500" />, b: "hover:border-orange-500/30" }
          ].map((item, i) => (
            <div key={i} className={`p-8 rounded-[2rem] site-card ${item.b} transition-all duration-300 group`}>
              <div className="mb-4 transition-transform duration-300 group-hover:scale-110">{item.i}</div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">{item.t}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.c}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Futuristic Form */}
          <div className="site-card w-full lg:w-3/5 rounded-[3rem] p-8 md:p-12 relative">
            <h2 className="text-3xl font-bold mb-10 tracking-tight">Send us a <span className="text-orange-500 font-black">Digital Brief</span></h2>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
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
                className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-slate-900 transition-all duration-200 bg-orange-500 hover:bg-orange-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-200 disabled:opacity-50"
              >
                {isSubmitting ? "TRANSMITTING..." : "SEND MESSAGE"}
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </form>
          </div>

          {/* Map & Schedule */}
          <div className="w-full lg:w-2/5 space-y-8">
            {/* Map */}
            <div className="rounded-[3rem] overflow-hidden border border-slate-700 h-72 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.6979264149036!2d72.5482483!3d23.0348785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f9fd600001%3A0xe54d24172f3e0924!2sYash%20Aqua!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
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