import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CourseCard from "../components/CourseCard";
import EnrollmentModal from "../components/EnrollmentModal";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import FAQSection from "../components/FAQSection";
import useFaqByCategory from "../hooks/useFaqByCategory";
import { FAQ_CATEGORIES } from "../constants/faqDefaults";
import itEducationHeroImg from "../public/it_services_hero.jpg";

export default function Courses() {

  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.12 });
  const faqItems = useFaqByCategory(FAQ_CATEGORIES.COURSE);

  const handleEnrollClick = (course) => {
    setSelectedCourse(course || { title: "Full Stack Development (MERN)" });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

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
    title: "Data Science & Machine Learning",
    description: "Learn data analysis, predictive modeling, and machine learning algorithms with Python.",
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

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">

      <Navbar />

      {/* Hero Section */}
      <section className="bg-slate-50 pt-20 sm:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 lg:py-20 flex flex-col lg:flex-row items-center gap-8 sm:gap-10">

          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <h1 className="text-3xl lg:text-5xl font-bold mb-4 text-slate-900">
              Our IT Courses
            </h1>

            <p className="text-base sm:text-lg text-slate-600 mb-6 max-w-xl mx-auto lg:mx-0">
              Learn industry-ready technologies and start your career in IT with expert training and live projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">

              <button
                onClick={() => handleEnrollClick(null)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3.5 rounded-xl font-bold text-white shadow-xl hover:shadow-orange-500/35 hover:-translate-y-0.5 transition cursor-pointer text-sm"
              >
                Book Free Demo Class
              </button>

              <a
                href="tel:+919054372690"
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3.5 border-2 border-orange-500 text-orange-600 rounded-xl font-semibold hover:bg-orange-50 hover:text-orange-700 transition text-sm"
              >
                Call: +91 9054372690
              </a>

              <a
                href="tel:+917859982605"
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3.5 border-2 border-sky-500 text-sky-600 rounded-xl font-semibold hover:bg-sky-50 hover:text-sky-700 transition text-sm"
              >
                Call: +91 7859982605
              </a>

            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center w-full">
            <div className="relative w-full max-w-xl group">
              {/* Glow Spotlight Effect */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-orange-500/20 via-sky-500/20 to-indigo-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition duration-700 pointer-events-none" />

              {/* Professional IT Showcase Image Frame */}
              <div className="relative bg-slate-950 border border-slate-800 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                {/* Clean Header Bar */}
                <div className="flex items-center justify-between border-b border-slate-800/80 px-4 sm:px-5 py-3 bg-slate-900/90 backdrop-blur-md">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="w-3 h-3 rounded-full bg-amber-500" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500" />
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-950 border border-slate-800 px-3 py-1 rounded-lg text-[11px] font-mono text-slate-300">
                    <span className="text-orange-400">🌐</span> yugantartechnologies.com
                  </div>
                  <div className="w-12" />
                </div>

                {/* Clean High Quality Hero Image */}
                <div className="relative h-72 sm:h-96 md:h-[400px] w-full overflow-hidden bg-slate-900">
                  <img
                    src={itEducationHeroImg}
                    alt="Yugantar Technologies IT Education & Software Training"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop";
                    }}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 block"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Courses Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">

        <div className="text-center mb-8 sm:mb-12">

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
            Explore Our Courses 
          </h2>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            Choose from our industry-focused IT courses designed to help you build real-world skills and start a successful tech career.
          </p>

        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10"
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

          <button
            onClick={() => handleEnrollClick(null)}
            className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 rounded-xl font-bold text-white shadow-xl hover:shadow-orange-500/35 hover:-translate-y-0.5 transition cursor-pointer"
          >
            Book Free Demo Class
          </button>

          <a
            href="tel:+919054372690"
            className="px-6 py-3 border-2 border-orange-500 text-orange-600 rounded-xl font-semibold hover:bg-orange-50 transition"
          >
            Call: +91 9054372690
          </a>

          <a
            href="tel:+917859982605"
            className="px-6 py-3 border-2 border-sky-500 text-sky-600 rounded-xl font-semibold hover:bg-sky-50 transition"
          >
            Call: +91 7859982605
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