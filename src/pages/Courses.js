import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CourseCard from "../components/CourseCard";
import EnrollmentModal from "../components/EnrollmentModal";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import FAQSection from "../components/FAQSection";
import useFaqByCategory from "../hooks/useFaqByCategory";
import { FAQ_CATEGORIES } from "../constants/faqDefaults";

export default function Courses() {

  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.12 });
  const faqItems = useFaqByCategory(FAQ_CATEGORIES.COURSE);

  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  useEffect(() => {
    document.title = "IT Courses Ahmedabad - YugAntar Technologies";
  }, []);

  const courses = [
  {
    title: "Full Stack Development (MERN)",
    description: "Master MongoDB, Express, React, and Node.js to build modern web applications.",
    imageUrl: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=600&auto=format&fit=crop",
    duration: "3 Months",
    popular: true,
    features: [
      "React.js & Redux",
      "Node.js & Express",
      "MongoDB Database",
      "RESTful APIs",
      "Authentication",
      "Deployment"
    ]
  },
   {
    title: "UI/UX Design",
    description: "Learn design principles and tools like Figma to create amazing user interfaces.",
    imageUrl: "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?w=600&auto=format&fit=crop",
    duration: "3 Months",
    popular: true,
    features: [
      "Design Principles",
      "Figma",
      "Wireframing",
      "Prototyping",
      "User Research",
      "Portfolio"
    ]
  },
  {
  title: "Digital Marketing",
  description: "Learn SEO, social media marketing, Google Ads, and strategies to grow businesses online.",
  imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop",
  duration: "3 Months",
  popular: true,
  features: [
    "Search Engine Optimization (SEO)",
    "Social Media Marketing",
    "Google Ads & PPC",
    "Content Marketing",
    "Email Marketing",
    "Analytics & Reporting"
  ]
},
  {
  title: "Python Development",
  description: "Learn Python programming and Django framework to build scalable web apps.",
  imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&auto=format&fit=crop",
  duration: "3 Months",
  popular: false,
  features: [
    "Python Fundamentals",
    "Django Framework",
    "Database Management",
    "API Development",
    "Web Scraping",
    "Data Analysis"
  ]
},
  {
    title: "Java Full Stack",
    description: "Comprehensive Java training with Spring Boot and enterprise technologies.",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop",
    duration: "3 Months",
    popular: false,
    features: [
      "Core Java",
      "Spring Boot",
      "Hibernate ORM",
      "Microservices",
      "JSP & Servlets",
      "Enterprise Applications"
    ]
  },
 
  {
    title: "Data Science & AI/ML",
    description: "Learn data analysis, machine learning and AI with Python.",
    imageUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&auto=format&fit=crop",
    duration: "3 Months",
    popular: true,
    features: [
      "Python for Data Science",
      "Machine Learning",
      "Deep Learning",
      "Data Visualization",
      "NLP",
      "Projects"
    ]
  },
];

  const handleEnroll = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">

      <Navbar />

      {/* Hero Section */}
      <section className="bg-slate-50 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20 flex flex-col lg:flex-row items-center gap-10">

          <div className="lg:w-1/2">
            <h1 className="text-3xl lg:text-5xl font-bold mb-4 text-slate-900">
              Our IT Courses
            </h1>

            <p className="text-lg text-slate-600 mb-6">
              Learn industry-ready technologies and start your career in IT with expert training and live projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-2 rounded-xl font-bold text-slate-900 shadow-xl"
              >
                Book Free Demo Class
              </Link>

              <a
                href="tel:+916355582605"
                className="px-6 py-3 border-2 border-orange-500 text-orange-600 rounded-xl font-semibold hover:bg-orange-50 hover:text-orange-700 transition"
              >
                Call: +91 6355582605
              </a>

            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <img
              src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg"
              alt="IT Courses"
              className="rounded-3xl shadow-2xl w-full max-w-md transition duration-500"
            />
          </div>

        </div>
      </section>

      {/* Courses Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="text-center mb-12">

          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Explore Our Courses 
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto">
            Choose from our industry-focused IT courses designed to help you build real-world skills and start a successful tech career.
          </p>

        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >

          {courses.map((course, index) => (
            <div
              key={index}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(40px)",
                transition: "all 0.6s ease",
                transitionDelay: `${index * 120}ms`,
              }}
              className=" transition duration-300"
            >
              <CourseCard course={course} onEnroll={handleEnroll} />
            </div>
          ))}

        </div>

      </section>

      {/* CTA Section */}
      <section className="mt-16 site-card rounded-3xl p-12 text-center mx-6 lg:mx-auto max-w-7xl">

        <h3 className="text-3xl font-bold mb-4">
          Ready to Start Your IT Career?
        </h3>

        <p className="text-lg text-slate-600 mb-8">
          Join thousands of students who have built successful careers with YugAntar Technologies.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-2 rounded-xl font-bold text-slate-900 shadow-xl "
          >
            Book Free Demo Class
          </Link>

          <a
            href="tel:+916355582605"
            className="px-6 py-3 border-2 border-orange-500 text-orange-500 rounded-xl font-semibold hover:bg-orange-600 hover:text-slate-900 transition"
          >
            Call: +91 6355582605
          </a>

        </div>

      </section>

      {/* Modal */}
      <EnrollmentModal
        course={selectedCourse}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      <FAQSection items={faqItems} schemaId="courses-faq-schema" />

      <Footer />

    </div>
  );
}