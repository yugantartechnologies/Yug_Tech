import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import EnrollmentModal from "../components/EnrollmentModal";
import FAQSection from "../components/FAQSection";
import { DevicePhoneMobileIcon, CpuChipIcon, ComputerDesktopIcon, ShoppingBagIcon, CheckCircleIcon, ClockIcon, UserGroupIcon } from '@heroicons/react/24/solid';

export default function MobileAppCourse() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const faqItems = [
    {
      question: "What technologies are covered in mobile app development course?",
      answer: "The course covers React Native, Flutter, app architecture, APIs, and deployment process.",
    },
    {
      question: "Will I build real mobile apps during training?",
      answer: "Yes, students build practical app modules and live project components.",
    },
    {
      question: "Do you provide internship after mobile app training?",
      answer: "Yes, students can apply for internship opportunities after completing the program.",
    },
  ];

  const course = {
    title: "Mobile App Development",
    description: "Build native and cross-platform mobile applications using React Native and Flutter.",
    icon: <DevicePhoneMobileIcon className="w-16 h-16 text-orange-500" />,
    duration: "5 Months",
    popular: false,
    features: [
      "React Native",
      "Flutter Development",
      "App Architecture",
      "State Management",
      "API Integration",
      "App Store Deployment"
    ],
    syllabus: [
      "Mobile App Fundamentals",
      "React Native Development",
      "Flutter Framework",
      "State Management",
      "API Integration",
      "Database Integration",
      "App Testing and Debugging",
      "App Store Deployment"
    ],
    prerequisites: "Basic programming knowledge",
    mode: "Online/Offline",
    technologies: [
      { name: "React Native", icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg", color: "#61DAFB" },
      { name: "Flutter", icon: "https://cdn.worldvectorlogo.com/logos/flutter.svg", color: "#02569B" },
      { name: "Dart", icon: "https://cdn.worldvectorlogo.com/logos/dart.svg", color: "#00B4AB" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "#F7DF1E" },
      { name: "Firebase", icon: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg", color: "#FFCA28" },
      { name: "SQLite", icon: "https://cdn.worldvectorlogo.com/logos/sqlite.svg", color: "#003B57" }
    ],
    careerOpportunities: [
      { title: "Mobile App Developer", description: "Develop mobile applications for iOS and Android.", icon: <DevicePhoneMobileIcon className="w-8 h-8 text-orange-500" /> },
      { title: "React Native Developer", description: "Build cross-platform apps with React Native.", icon: <CpuChipIcon className="w-8 h-8 text-green-500" /> },
      { title: "Flutter Developer", description: "Create beautiful apps with Flutter framework.", icon: <ComputerDesktopIcon className="w-8 h-8 text-purple-500" /> },
      { title: "App Store Specialist", description: "Manage app deployment and store optimization.", icon: <ShoppingBagIcon className="w-8 h-8 text-orange-500" /> },
    ],
    stats: [
      { label: "Duration", value: "5 Months", icon: <ClockIcon className="w-6 h-6 text-orange-500" /> },
      { label: "Mode", value: "Online/Offline", icon: <ComputerDesktopIcon className="w-6 h-6 text-green-500" /> },
      { label: "Students Enrolled", value: "300+", icon: <UserGroupIcon className="w-6 h-6 text-purple-500" /> },
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />

      <PageHeader
        title={course.title}
        subtitle="Master Mobile App Development"
          bgImage="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&auto=format&fit=crop"
      />

      <main className="flex-grow py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">

          {/* Course Overview */}
          <div className="site-card rounded-2xl p-12 mb-16">
            <div className="flex flex-col lg:flex-row items-center gap-8 mb-12">
              <div>{course.icon}</div>

              <div className="text-center lg:text-left">
                <h2 className="text-4xl font-bold text-slate-900 mb-4">{course.title}</h2>
                <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">{course.description}</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {course.stats.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-4 p-6 bg-slate-100 rounded-xl">
                  {stat.icon}
                  <div>
                    <p className="text-sm text-slate-600">{stat.label}</p>
                    <p className="text-xl font-bold text-slate-900">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-slate-100 rounded-lg border border-slate-200">
                    <CheckCircleIcon className="w-6 h-6 text-green-400" />
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div className="site-card rounded-2xl p-12 mb-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
              Technologies You'll Learn
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {course.technologies.map((tech, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center p-6 bg-slate-100 rounded-xl hover:bg-orange-50 transition-all duration-300 transform border border-slate-200"
                >
                  <img src={tech.icon} alt={tech.name} className="w-12 h-12 mb-3" />
                  <span className="text-sm font-semibold text-center" style={{ color: tech.color }}>
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Syllabus */}
          <div className="site-card rounded-2xl p-12 mb-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Course Syllabus</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {course.syllabus.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 bg-slate-100 rounded-lg border border-slate-200">
                  <span className="w-8 h-8 bg-orange-500 text-white rounded-lg flex items-center justify-center text-sm font-bold">
                    {idx + 1}
                  </span>
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Career Opportunities */}
          <div className="site-card rounded-2xl p-12 mb-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
              Career Opportunities
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {course.careerOpportunities.map((opportunity, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-slate-100 rounded-xl hover:bg-orange-50 transition-all duration-300 transform border border-slate-200"
                >
                  <div className="flex items-center gap-4 mb-3">
                    {opportunity.icon}
                    <h4 className="font-bold text-slate-900">{opportunity.title}</h4>
                  </div>
                  <p className="text-slate-600">{opportunity.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Prerequisites */}
          <div className="site-card rounded-2xl p-12 mb-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Prerequisites</h3>
            <p className="text-slate-600 text-lg">{course.prerequisites}</p>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-12 text-center text-slate-900 shadow-2xl">
          
                      <h3 className="text-3xl font-bold mb-4">
                        Ready to Start Your Journey?
                      </h3>
          
                      <p className="text-lg mb-8 opacity-90">
                        Join thousands of students who have transformed their careers with YugAntar Technologies
                      </p>
          
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
          
                        <button
                          onClick={() => setIsModalOpen(true)}
                          className="px-8 py-4 bg-slate-50 text-indigo-600 font-semibold text-lg rounded-xl hover:bg-slate-50 transition-all duration-300 transform"
                        >
                          Enroll Now
                        </button>
          
                        <Link
                          to="/courses"
                          className="px-8 py-4 border-2 border-white text-slate-900 font-semibold text-lg rounded-xl hover:bg-slate-50/10 transition-all duration-300"
                        >
                          Back to Courses
                        </Link>
          
                      </div>
          
                    </div>

        </div>
      </main>

      <EnrollmentModal
        course={course}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <FAQSection items={faqItems} schemaId="mobile-course-faq-schema" />

      <Footer />
    </div>
  );
}