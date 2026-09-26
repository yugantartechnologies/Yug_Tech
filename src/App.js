import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Services from './pages/Services';
import SeoServicesAhmedabad from './pages/SeoServicesAhmedabad';
import SocialMediaMarketingAhmedabad from './pages/SocialMediaMarketingAhmedabad';
import WebsiteDevelopmentAhmedabad from './pages/WebsiteDevelopmentAhmedabad';
import GoogleBusinessProfileManagementAhmedabad from './pages/GoogleBusinessProfileManagementAhmedabad';
import PerformanceMarketingAhmedabad from './pages/PerformanceMarketingAhmedabad';
import Internship from './pages/Internship';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BacklinkGuide from './pages/BacklinkGuide';
import FullStackCourse from './pages/FullStackCourse';
import PythonCourse from './pages/PythonCourse';
import JavaCourse from './pages/JavaCourse';
import UiUxCourse from './pages/UiUxCourse';
import DataScienceCourse from './pages/DataScienceCourse';
import MobileAppCourse from './pages/MobileAppCourse';
import DigitalMarketingCourse from './pages/DigitalMarketingCourse';
import AdminLogin from './admin/AdminLogin';
import AdminDashboard from './admin/AdminDashboard';
import AdminInternshipList from './admin/AdminInternshipList';
import AdminCourseInquiries from './admin/AdminCourseInquiries';
import AdminGeneralInquiries from './admin/AdminGeneralInquiries';
import AdminServiceInquiries from './admin/AdminServiceInquiries';
import AdminFreeConsultations from './admin/AdminFreeConsultations';
import AdminTeamConsultations from './admin/AdminTeamConsultations';
import Attendance from './pages/Attendance';
import AdminAttendance from './admin/AdminAttendance';
import AdminFaq from './admin/AdminFaq';
// import FloatingEnrollButton from './components/FloatingEnrollButton';
import StudentRegistration from './components/StudentRegistration';
import ScrollToTop from './components/ScrollTop';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import WhatsAppButton from './components/WhatsAppButton';
import MetaTags from './components/MetaTags';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
        <MetaTags />
        <ScrollProgress />
        <ScrollToTop />
        <CustomCursor />
        <Routes>
         
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/full-stack-mern" element={<FullStackCourse />} />
          <Route path="/mern-stack-course-ahmedabad" element={<FullStackCourse />} />
          <Route path="/courses/python-development" element={<PythonCourse />} />
          <Route path="/courses/java-full-stack" element={<JavaCourse />} />
          <Route path="/courses/ui-ux-design" element={<UiUxCourse />} />
          <Route path="/ui-ux-design-course-ahmedabad" element={<UiUxCourse />} />
          <Route path="/courses/data-science-ai-ml" element={<DataScienceCourse />} />
          <Route path="/courses/mobile-app-development" element={<MobileAppCourse />} />
          <Route path="/courses/digital-marketing" element={<DigitalMarketingCourse />} />
          <Route path="/digital-marketing-course-ahmedabad" element={<DigitalMarketingCourse />} />
          <Route path="/services" element={<Services />} />
          <Route path="/seo-services-ahmedabad" element={<SeoServicesAhmedabad />} />
          <Route path="/social-media-marketing-ahmedabad" element={<SocialMediaMarketingAhmedabad />} />
          <Route path="/website-development-ahmedabad" element={<WebsiteDevelopmentAhmedabad />} />
          <Route path="/google-business-profile-management-ahmedabad" element={<GoogleBusinessProfileManagementAhmedabad />} />
          <Route path="/performance-marketing-ahmedabad" element={<PerformanceMarketingAhmedabad />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/backlink-guide" element={<BacklinkGuide />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/course-inquiries" element={<AdminCourseInquiries />} />
          <Route path="/admin/internships" element={<AdminInternshipList />} />
          <Route path="/admin/general-inquiries" element={<AdminGeneralInquiries />} />
          <Route path="/admin/service-inquiries" element={<AdminServiceInquiries />} />
          <Route path="/admin/free-consultations" element={<AdminFreeConsultations />} />
          <Route path="/admin/team-consultations" element={<AdminTeamConsultations />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/admin/attendance" element={<AdminAttendance />} />
          <Route path="/admin/Fqa" element={<AdminFaq />} />
          <Route path="/registration" element={<StudentRegistration />} />
        </Routes>
        <WhatsAppButton />
        {/* <FloatingEnrollButton /> */}
      </div>
    </Router>
  );
}

export default App;
