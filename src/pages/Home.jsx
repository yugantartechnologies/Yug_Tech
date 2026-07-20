import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    document.title =
      "Yugantar Technologies | IT Training Institute & IT Services Company in Ahmedabad";

    const metaDescription = document.querySelector(
      'meta[name="description"]'
    );
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Yugantar Technologies is a leading IT Training Institute and IT Services Company in Ahmedabad. We provide Full Stack Development, MERN Stack, React JS, Python, Java, Flutter, Internship Programs, Website Development, Software Development, Mobile App Development, SEO, Digital Marketing, Graphic Design, UI/UX Design, Cloud Solutions, and Business Automation Services."
      );
    }
  }, []);

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