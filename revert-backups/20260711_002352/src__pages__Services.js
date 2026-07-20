import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceBookingModal from "../components/ServiceBookingModal";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import FAQSection from "../components/FAQSection";
import useFaqByCategory from "../hooks/useFaqByCategory";
import { FAQ_CATEGORIES } from "../constants/faqDefaults";
import {
  Globe,
  Search,
  Megaphone,
  ShoppingCart,
  Smartphone,
  Gamepad2,
  MapPin,
  Link2,
  Map,
  Check,
} from "lucide-react";

export default function Services() {
  const [bookingModal, setBookingModal] = useState({ isOpen: false, service: null });
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.12 });
  const faqItems = useFaqByCategory(FAQ_CATEGORIES.SERVICE);

  useEffect(() => {
    document.title = "IT Services Ahmedabad - YugAntar Technologies";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Best IT services in Ahmedabad - Web, Mobile, Game, E-Commerce, CRM, ERP, API & Field Force solutions.'
      );
    }
  }, []);

  const handleBookService = (service) => setBookingModal({ isOpen: true, service });
  const handleCloseBookingModal = () => setBookingModal({ isOpen: false, service: null });

  const services = [
    {
      title: "Website Development",
      description: "Landing page, static website, dynamic website, and e-commerce website development services.",
      icon: <Globe className="w-8 h-8 text-orange-500" />,
      popular: true,
      features: ["Landing pages", "Static websites", "Dynamic websites", "E-commerce development", "Support & maintenance"],
      detailPath: "/website-development-ahmedabad"
    },
    {
      title: "SEO Service",
      description: "Complete SEO services for businesses in Ahmedabad including local, on-page, off-page, and technical SEO.",
      icon: <Search className="w-8 h-8 text-orange-500" />,
      popular: false,
      features: ["Local SEO", "On-page SEO", "Off-page SEO", "Technical SEO", "Monthly SEO reports"],
      detailPath: "/seo-services-ahmedabad"
    },
    {
      title: "Social Media Management (SMM)",
      description: "Social media marketing and management services to grow your brand and engagement.",
      icon: <Megaphone className="w-8 h-8 text-orange-500" />,
      popular: false,
      features: ["Content strategy", "Account management", "Audience growth", "Paid campaign support", "Performance tracking"],
      detailPath: "/social-media-marketing-ahmedabad"
    },
     {
      title: "E-Commerce Development",
      description: "Custom e-commerce solutions to sell products online securely and efficiently.",
      icon: <ShoppingCart className="w-8 h-8 text-amber-400" />,
      popular: true,
      features: ["Custom stores", "Payment integration", "Order management", "SEO-friendly", "Cart & checkout"]
    },
    {
      title: "Mobile Application Development",
      description: "End-to-end mobile app development for Android and iOS platforms with robust UI/UX.",
      icon: <Smartphone className="w-8 h-8 text-orange-500" />,
      popular: false,
      features: ["Android & iOS apps", "Flutter / React Native", "UI/UX design", "App deployment", "Ongoing support"]
    },
    {
      title: "Game Development",
      description: "Interactive and engaging games for mobile and web using modern game engines.",
      icon: <Gamepad2 className="w-8 h-8 text-purple-400" />,
      popular: false,
      features: ["2D & 3D games", "Unity & Web games", "Game UI/UX", "Multiplayer integration", "Optimization"]
    },
    {
      title: "GBM (Google Business Management)",
      description: "Google Business Profile management to improve local maps visibility and lead generation.",
      icon: <MapPin className="w-8 h-8 text-red-400" />,
      popular: false,
      features: ["GBP setup", "Profile optimization", "Local map visibility", "Review management support", "Insights tracking"],
      detailPath: "/google-business-profile-management-ahmedabad"
    },
    {
      title: "API Development & Integration",
      description: "Secure and scalable API development for seamless integration between applications and third-party services.",
      icon: <Link2 className="w-8 h-8 text-teal-400" />,
      popular: false,
      features: ["REST & GraphQL APIs", "Third-party integrations", "Authentication & security", "High performance APIs", "API documentation"]
    },
    {
      title: "Field Force Management System",
      description: "Smart field force management solutions to track, manage, and optimize your on-field workforce operations.",
      icon: <Map className="w-8 h-8 text-cyan-400" />,
      popular: false,
      features: ["Live location tracking", "Task & attendance management", "Reports & analytics", "Mobile app integration", "Real-time notifications"]
    },
  ];

  return (
    <div className="bg-slate-50 text-slate-900">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-slate-50 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-12">

          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-slate-900 leading-tight">
              Our <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">IT Services</span>
            </h1>

            <p className="text-lg text-slate-600 mb-8 max-w-lg mx-auto lg:mx-0">
              Transform your business with cutting-edge IT solutions crafted for your success. We provide modern web development, mobile applications, and scalable software solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-2 rounded-xl font-bold text-slate-900 shadow-xl hover:from-orange-400 hover:to-orange-500 transition-all duration-300"
              >
                Book Free Consultation
              </Link>

              <a
                href="tel:+916355582605"
                className="px-6 py-3 border border-slate-300 text-orange-600 font-semibold rounded-xl hover:bg-orange-50 hover:text-orange-700 transition-all duration-300 text-center"
              >
                Call: +91 6355582605
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative group max-w-md w-full">
              {/* Glow */}
<div className="site-card relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="IT Services"
                  className="w-full h-[350px] object-cover transition-transform duration-500"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-center text-slate-900">
          Explore Our Services
        </h2>
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group site-card rounded-3xl overflow-hidden p-8 transform transition-all duration-500`}
              style={{
                transitionDelay: `${index * 100}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                minHeight: "450px",
                display: "flex",
                flexDirection: "column"
              }}
            >
              {service.popular && (
                <span className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded-lg bg-orange-500/10 text-orange-600 border border-orange-500/20 z-10">
                  Popular
                </span>
              )}
              
              {/* Icon container */}
              <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-xl bg-slate-100 border border-slate-200 text-orange-600 transition-all duration-500 group-hover:border-orange-400/30">
                {service.icon}
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-2 text-slate-900 group-hover:text-orange-500 transition-colors">{service.title}</h3>
              <p className="text-slate-600 text-sm md:text-base mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="text-slate-600 mb-6 space-y-2 flex-grow">
                {service.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-orange-500 flex-shrink-0 mt-1" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-1 gap-3 mt-auto">
                <button
                  onClick={() => handleBookService(service)}
                  className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-2.5 rounded-xl font-bold text-slate-900 shadow-xl hover:from-orange-400 hover:to-orange-500 transition-all duration-300"
                >
                  Book Service
                </button>
                {service.detailPath ? (
                  <Link
                    to={service.detailPath}
                    className="w-full inline-flex items-center justify-center gap-3 border border-slate-300 px-5 py-2.5 rounded-xl font-bold text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-all duration-300 text-sm"
                  >
                    View Details
                  </Link>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-16 site-card rounded-3xl p-12 text-center mx-6 lg:mx-auto max-w-7xl">
        <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900">
          Ready to Transform Your Business?
        </h3>
        <p className="text-lg lg:text-xl mb-8 text-slate-600">
          Partner with YugAntar Technologies for end-to-end IT solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-2 rounded-xl font-bold text-slate-900 shadow-xl hover:from-orange-400 hover:to-orange-500 transition-all duration-300"
          >
            Book Free Consultation
          </Link>
          <a
            href="tel:+916355582605"
            className="px-6 py-3 border border-slate-300 text-orange-600 font-semibold rounded-xl hover:bg-orange-50 hover:text-orange-700 transition-all duration-300 text-center"
          >
            Call: +91 6355582605
          </a>
        </div>
      </section>

      <ServiceBookingModal
        service={bookingModal.service}
        isOpen={bookingModal.isOpen}
        onClose={handleCloseBookingModal}
      />

      <FAQSection items={faqItems} schemaId="services-faq-schema" />

      <Footer />
    </div>
  );
}