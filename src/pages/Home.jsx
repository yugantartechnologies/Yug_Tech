import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AssociatedCompanies from "../components/AssociatedCompanies";
import HomeServicesSection from "../components/home/HomeServicesSection";
import CaseStudiesResultsSection from "../components/home/CaseStudiesResultsSection";
import StatsSection from "../components/StatsSection";
import HomeTechStackSection from "../components/home/HomeTechStackSection";
import HomeProcessSection from "../components/home/HomeProcessSection";
import Features from "../components/Features";
import CourseHighlights from "../components/CourseHighlights";
import Testimonials from "../components/Testimonials";
import HomeConsultationForm from "../components/home/HomeConsultationForm";
import CTASection from "../components/CTASection";
import FAQSection from "../components/FAQSection";
import EnrollmentModal from "../components/EnrollmentModal";
import Footer from "../components/Footer";
import useFaqByCategory from "../hooks/useFaqByCategory";
import { FAQ_CATEGORIES } from "../constants/faqDefaults";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const faqItems = useFaqByCategory(FAQ_CATEGORIES.HOME);

  const handleQuickEnroll = () => {
    setSelectedCourse({
      title: "Full Stack Development (MERN)",
      icon: "💻",
      duration: "6 Months",
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-sky-500/20 selection:text-slate-900 antialiased">
      {/* 1. Global Navigation Bar */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Executive Hero Showcase */}
        <Hero onQuickEnroll={handleQuickEnroll} />

        {/* 3. Corporate Clients & Partner Associates */}
        <AssociatedCompanies />

        {/* 4. Core IT Services & Digital Solutions */}
        <HomeServicesSection />

        {/* 5. Real Client Case Studies & Commercial Outcomes */}
        <CaseStudiesResultsSection />

        {/* 6. Company Impact & Verified Numbers */}
        <StatsSection />

        {/* 7. Industry Standard Technology Stack (Real SVGs) */}
        <HomeTechStackSection />

        {/* 8. 5-Phase Agile Project Delivery Process */}
        <HomeProcessSection />

        {/* 9. Corporate Strengths & Technical Foundations */}
        <Features />

        {/* 10. Professional Career Programs & Internships */}
        <CourseHighlights />

        {/* 11. Google Verified Client & Alumni Reviews */}
        <Testimonials />

        {/* 12. Direct On-Page Project Consultation & Inquiry Form (Real-Time Live Sync) */}
        <HomeConsultationForm />

        {/* 13. High-Impact Strategic Call to Action */}
        <CTASection onQuickEnroll={handleQuickEnroll} />

        {/* 14. Comprehensive FAQ Accordion */}
        <div className="py-18 sm:py-24 bg-slate-50 border-t border-slate-200/80">
          <FAQSection items={faqItems} schemaId="home-faq-schema" isLight={true} />
        </div>
      </main>

      {/* Course Enrollment Modal */}
      <EnrollmentModal
        course={selectedCourse}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSuccess={() => console.log("Enrollment success")}
      />

      {/* Global Comprehensive Corporate Footer */}
      <Footer />
    </div>
  );
}
