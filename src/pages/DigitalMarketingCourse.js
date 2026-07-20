import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import EnrollmentModal from "../components/EnrollmentModal";
import FAQSection from "../components/FAQSection";

import {
  CodeBracketIcon,
  MegaphoneIcon ,
  ChartBarIcon,
  GlobeAltIcon,
  CheckCircleIcon,
  ClockIcon,
  UserGroupIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/solid";

import {
  SiGoogleanalytics,
  SiGoogleads,
  SiFacebook,
  SiInstagram,
  SiX,
  SiMailchimp,
} from "react-icons/si";

export default function DigitalMarketingCourse() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const faqItems = [
    {
      question: "What is the best digital marketing course in Ahmedabad?",
      answer:
        "YugAntar Technologies provides a professional digital marketing course with practical training and internship.",
    },
    {
      question: "Do you cover SEO, Google Ads and social media marketing?",
      answer:
        "Yes, our digital marketing course includes SEO, Google Ads, social media marketing, and analytics.",
    },
    {
      question: "Do you provide internship?",
      answer: "Yes, students get internship opportunities with real projects.",
    },
  ];

  useEffect(() => {
    document.title =
      "Digital Marketing Course Ahmedabad - YugAntar Technologies";
  }, []);

  const course = {
    title: "Digital Marketing",
    description:
      "Master digital marketing strategies, SEO, social media marketing, and analytics to grow businesses online.",
    icon: <ChartBarIcon className="w-16 h-16 text-orange-500" />,
    duration: "3 Months",

    features: [
      "SEO & SEM",
      "Social Media Marketing",
      "Content Marketing",
      "Google Analytics",
      "Email Marketing",
      "PPC Advertising",
    ],

    syllabus: [
      "Digital Marketing Fundamentals",
      "Search Engine Optimization (SEO)",
      "Search Engine Marketing (SEM)",
      "Social Media Marketing",
      "Content Marketing & Copywriting",
      "Email Marketing & Automation",
      "Google Analytics & Data Analysis",
      "PPC Advertising (Google Ads)",
      "Conversion Rate Optimization",
      "Digital Marketing Strategy",
    ],

    prerequisites: "Basic computer skills and internet knowledge",

  technologies: [
  {
    name: "Google Analytics",
    icon: <SiGoogleanalytics className="w-12 h-12" />,
    color: "#FF6F00" // deeper orange (better visibility)
  },
  {
    name: "Google Ads",
    icon: <SiGoogleads className="w-12 h-12" />,
    color: "#34A853" // green (logo multi-color mathi ek strong color)
  },
  {
    name: "Facebook",
    icon: <SiFacebook className="w-12 h-12" />,
    color: "#1877F2" // original blue
  },
  {
    name: "Instagram",
    icon: <SiInstagram className="w-12 h-12" />,
    color: "#C13584" // gradient mathi strong pink
  },
  {
    name: "Twitter (X)",
    icon: <SiX className="w-12 h-12" />,
    color: "#FFFFFF" // white (dark bg par perfect)
  },
  {
    name: "Mailchimp",
    icon: <SiMailchimp className="w-12 h-12" />,
    color: "#FFD700" // bright yellow (visible)
  },
],

    careerOpportunities: [
      {
        title: "Digital Marketing Manager",
        description: "Lead digital marketing campaigns and strategies.",
        icon: <ChartBarIcon className="w-8 h-8 text-orange-500" />,
      },
      {
        title: "SEO Specialist",
        description: "Optimize websites and improve search rankings.",
        icon: <GlobeAltIcon className="w-8 h-8 text-green-500" />,
      },
      {
        title: "Social Media Manager",
        description: "Handle social media growth and engagement.",
        icon: <MegaphoneIcon  className="w-8 h-8 text-purple-500" />,
      },
      {
        title: "PPC Specialist",
        description: "Run paid ad campaigns on Google & Meta.",
        icon: <CodeBracketIcon className="w-8 h-8 text-orange-500" />,
      },
    ],

    stats: [
      {
        label: "Duration",
        value: "3 Months",
        icon: <ClockIcon className="w-6 h-6 text-orange-500" />,
      },
      {
        label: "Mode",
        value: "Online / Offline",
        icon: <ComputerDesktopIcon className="w-6 h-6 text-green-400" />,
      },
      {
        label: "Students Enrolled",
        value: "320+",
        icon: <UserGroupIcon className="w-6 h-6 text-purple-400" />,
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">

      <Navbar />

      <PageHeader
        title={course.title}
        subtitle="Master Digital Marketing"
        bgImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&auto=format&fit=crop"
      />

      <main className="flex-grow py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">

          {/* Overview */}
          <div className="site-card rounded-2xl p-12 mb-16">
            <div className="flex flex-col lg:flex-row items-center gap-8 mb-12">
              <div>{course.icon}</div>

              <div className="text-center lg:text-left">
                <h2 className="text-4xl font-bold mb-4">
                  {course.title}
                </h2>
                <p className="text-lg text-slate-600 max-w-2xl">
                  {course.description}
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {course.stats.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-4 p-6 bg-slate-100 rounded-xl">
                  {stat.icon}
                  <div>
                    <p className="text-sm text-slate-600">{stat.label}</p>
                    <p className="text-xl font-bold">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Features */}
            <h3 className="text-2xl font-bold mb-6">Key Features</h3>

            <div className="grid md:grid-cols-2 gap-4">
              {course.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-slate-100 rounded-lg border border-slate-200">
                  <CheckCircleIcon className="w-6 h-6 text-green-400" />
                  <span className="text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="site-card rounded-2xl p-12 mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Tools & Platforms You'll Learn
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {course.technologies.map((tech, idx) => (
                <div key={idx} style={{ color: tech.color }} className="flex flex-col items-center p-6 bg-slate-100 rounded-xl hover:bg-orange-50 transition">
                  {tech.icon}
                  <span
                    className="text-sm font-semibold mt-2 text-center"
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
            <h3 className="text-2xl font-bold mb-8">Course Syllabus</h3>

            <div className="grid md:grid-cols-2 gap-6">
              {course.syllabus.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 bg-slate-100 rounded-lg">
                  <span className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-sm font-bold">
                    {idx + 1}
                  </span>
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Career */}
          <div className="site-card rounded-2xl p-12 mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Career Opportunities
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              {course.careerOpportunities.map((op, idx) => (
                <div key={idx} className="p-6 bg-slate-100 rounded-xl hover:bg-orange-50 transition">
                  <div className="flex items-center gap-4 mb-3">
                    {op.icon}
                    <h4 className="font-bold">{op.title}</h4>
                  </div>
                  <p className="text-slate-600">{op.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Prerequisites */}
          <div className="site-card rounded-2xl p-12 mb-16">
            <h3 className="text-2xl font-bold mb-6">Prerequisites</h3>
            <p className="text-slate-600 text-lg">
              {course.prerequisites}
            </p>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-12 text-center shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Start Your Journey?
            </h3>

            <p className="text-lg mb-8 text-gray-100">
              Join thousands of students who built their careers with YugAntar Technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 bg-slate-50 text-indigo-600 font-semibold rounded-xl hover:bg-slate-50"
              >
                Enroll Now
              </button>

              <Link
                to="/courses"
                className="px-8 py-4 border-2 border-white rounded-xl hover:bg-slate-50/10"
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

      <FAQSection items={faqItems} schemaId="digital-marketing-faq-schema" />

      <Footer />
    </div>
  );
}