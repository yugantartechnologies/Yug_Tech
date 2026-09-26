import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import aboutContent from "../data/aboutContent";
import FreeConsultationModal from "../components/FreeConsultationModal";

import AboutHero from "../components/about/AboutHero";
import WhoWeAre from "../components/about/WhoWeAre";
import WhatWeDo from "../components/about/WhatWeDo";
import ImpactSection from "../components/about/ImpactSection";
import JourneyTimeline from "../components/about/JourneyTimeline";
import MissionVision from "../components/about/MissionVision";
import CoreValues from "../components/about/CoreValues";
import WhyChooseUs from "../components/about/WhyChooseUs";
import HowWeWork from "../components/about/HowWeWork";
import GrowthSection from "../components/about/GrowthSection";
import PartnersSection from "../components/about/PartnersSection";
import TestimonialsSection from "../components/about/TestimonialsSection";
import LocationSection from "../components/about/LocationSection";
import AboutCTA from "../components/about/AboutCTA";

export default function About() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  useEffect(() => {
    document.title = "About Yugantar Technologies | IT Solutions & Training Institute";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Learn about Yugantar Technologies & Training Institute, an Ahmedabad-based technology company providing IT solutions, digital growth services, practical training and internship opportunities."
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow">
        {/* 1. Hero Section */}
        <AboutHero 
          hero={aboutContent.hero} 
          onOpenConsultation={() => setIsConsultationOpen(true)} 
        />

        {/* 2. Who We Are Section */}
        <WhoWeAre company={aboutContent.company} />

        {/* 3. What We Do (6 Service Cards) */}
        <WhatWeDo services={aboutContent.services} />

        {/* 4. Impact / Statistics */}
        <ImpactSection stats={aboutContent.stats} />

        {/* 5. Our Journey (Timeline) */}
        <JourneyTimeline journey={aboutContent.journey} />

        {/* 6. Mission & Vision */}
        <MissionVision mission={aboutContent.mission} vision={aboutContent.vision} />

        {/* 7. Core Values (6 Cards) */}
        <CoreValues values={aboutContent.values} />

        {/* 8. Why Choose Yugantar */}
        <WhyChooseUs whyChooseUs={aboutContent.whyChooseUs} />

        {/* 9. How We Work (5-Step Process) */}
        <HowWeWork process={aboutContent.process} />

        {/* 11. Students + Businesses Dual Impact Cards */}
        <GrowthSection students={aboutContent.students} businesses={aboutContent.businesses} />

        {/* 12. Partners / Certifications (Hides gracefully if empty) */}
        <PartnersSection partners={aboutContent.partners} />

        {/* 13. Testimonials (Hides gracefully if empty) */}
        <TestimonialsSection testimonials={aboutContent.testimonials} />

        {/* 14. Office / Location */}
        <LocationSection contact={aboutContent.contact} />

        {/* 15. Final CTA */}
        <AboutCTA 
          cta={aboutContent.cta} 
          onOpenConsultation={() => setIsConsultationOpen(true)} 
        />
      </main>

      {/* Free Consultation Form Modal */}
      <FreeConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultService="General Consultation"
      />

      <Footer />
    </div>
  );
}