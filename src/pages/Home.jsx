import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import CourseHighlights from "../components/CourseHighlights";
import Testimonials from "../components/Testimonials";
import CTASection from "../components/CTASection";
import EnrollmentModal from "../components/EnrollmentModal";
import Footer from "../components/Footer";
import FAQSection from "../components/FAQSection";
import useFaqByCategory from "../hooks/useFaqByCategory";
import { FAQ_CATEGORIES } from "../constants/faqDefaults";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const faqItems = useFaqByCategory(FAQ_CATEGORIES.HOME);

  // SEO meta tags are centrally and dynamically managed by <MetaTags /> in App.js

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
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Navbar />

      <main className="flex-grow">
        <Hero onQuickEnroll={handleQuickEnroll} />

        {/* OTHER SECTIONS */}
        <Features />
        <CourseHighlights />
        <Testimonials />
        <CTASection onQuickEnroll={handleQuickEnroll} />
        <FAQSection items={faqItems} schemaId="home-faq-schema" />
      </main>

      <EnrollmentModal
        course={selectedCourse}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSuccess={() => console.log("Enrollment success")}
      />

      <Footer />
    </div>
  );
}