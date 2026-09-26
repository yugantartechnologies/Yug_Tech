import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import EnrollmentModal from "../components/EnrollmentModal";
import FAQSection from "../components/FAQSection";
import {
  PencilIcon,
  CpuChipIcon,
  EyeIcon,
  UserGroupIcon,
  CheckCircleIcon,
  ClockIcon,
  ComputerDesktopIcon
} from "@heroicons/react/24/solid";

export default function UiUxCourse() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const faqItems = [
    {
      question: "Is this UI/UX design course suitable for beginners?",
      answer: "Yes, the course is beginner friendly and starts from design fundamentals.",
    },
    {
      question: "Which design tools are included in training?",
      answer: "You will learn tools like Figma and Adobe XD with practical portfolio-based assignments.",
    },
    {
      question: "Do students get internship support after UI/UX training?",
      answer: "Yes, internship opportunities are provided after successful course completion.",
    },
  ];

  const course = {
    title: "UI/UX Design",
    description:
      "Master design principles, tools like Figma, and create stunning user interfaces.",
    icon: <PencilIcon className="w-16 h-16 text-orange-500" />,
    duration: "3 Months",
    features: [
      "Design Principles",
      "Figma & Adobe XD",
      "Prototyping",
      "User Research",
      "Wireframing",
      "Portfolio Development"
    ],
    syllabus: [
      "Design Fundamentals",
      "Color Theory and Typography",
      "User Research and Personas",
      "Wireframing and Prototyping",
      "Figma and Adobe XD Tools",
      "UI Design Principles",
      "UX Design Process",
      "Portfolio Creation"
    ],
    prerequisites: "No prior experience required",
    mode: "Online/Offline",
    technologies: [
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", color: "#F24E1E" },
      { name: "Adobe XD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg", color: "#FF61F6" },
      { name: "Sketch", icon: "https://cdn.worldvectorlogo.com/logos/sketch.svg", color: "#F7B500" },
      { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg", color: "#31A8FF" },
      { name: "Illustrator", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg", color: "#FF9A00" },
      { name: "InVision", icon: "https://cdn.worldvectorlogo.com/logos/invision.svg", color: "#FF3366" }
    ],
    careerOpportunities: [
      {
        title: "UI/UX Designer",
        description: "Design user interfaces and experiences for digital products.",
        icon: <PencilIcon className="w-8 h-8 text-orange-500" />
      },
      {
        title: "Product Designer",
        description: "Work on product design and user experience.",
        icon: <CpuChipIcon className="w-8 h-8 text-green-500" />
      },
      {
        title: "UX Researcher",
        description: "Conduct user research and usability testing.",
        icon: <EyeIcon className="w-8 h-8 text-purple-500" />
      },
      {
        title: "Design Consultant",
        description: "Provide design consulting services to businesses.",
        icon: <UserGroupIcon className="w-8 h-8 text-orange-500" />
      }
    ],
    stats: [
      { label: "Duration", value: "3 Months", icon: <ClockIcon className="w-6 h-6 text-orange-500" /> },
      { label: "Mode", value: "Online/Offline", icon: <ComputerDesktopIcon className="w-6 h-6 text-green-500" /> },
      { label: "Students Enrolled", value: "250+", icon: <UserGroupIcon className="w-6 h-6 text-purple-500" /> }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />

      <PageHeader title={course.title} subtitle="Master UI/UX Design"
        bgImage="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=1600&auto=format&fit=crop" />

      <main className="flex-grow py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">

          {/* Course Overview */}
          <div className="site-card rounded-2xl p-12 mb-16">
            <div className="flex flex-col lg:flex-row items-center gap-8 mb-12">
              <div className="flex-shrink-0">
                {course.icon}
              </div>

              <div className="text-center lg:text-left">
                <h2 className="text-4xl font-bold text-slate-900 mb-4">
                  {course.title}
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                  {course.description}
                </p>
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
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-4 bg-slate-100 rounded-lg border border-slate-200"
                  >
                    <CheckCircleIcon className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div className="site-card rounded-2xl p-12 mb-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
              Tools You'll Learn
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {course.technologies.map((tech, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center p-6 bg-slate-100 rounded-xl hover:bg-orange-50 transition-all duration-300 transform border border-slate-200"
                >
                  <img src={tech.icon} alt={tech.name} className="w-12 h-12 mb-3" />

                  <span
                    className="text-sm font-semibold text-center"
                    style={{ color: tech.color }}
                  >
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Syllabus */}
          <div className="site-card rounded-2xl p-12 mb-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">
              Course Syllabus
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {course.syllabus.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 bg-slate-100 rounded-lg border border-slate-200"
                >
                  <span className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-lg flex items-center justify-center text-sm font-bold">
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
                    <h4 className="font-bold text-slate-900">
                      {opportunity.title}
                    </h4>
                  </div>

                  <p className="text-slate-600">
                    {opportunity.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Prerequisites */}
          <div className="site-card rounded-2xl p-12 mb-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Prerequisites
            </h3>

            <p className="text-slate-600 text-lg">
              {course.prerequisites}
            </p>
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
        onSuccess={() => {
          console.log("Enrollment successful!");
        }}
      />

      <FAQSection items={faqItems} schemaId="uiux-course-faq-schema" />

      <Footer />
    </div>
  );
}