/**
 * Central Content Configuration for About Page
 * Yugantar Technologies & Training Institute
 * 
 * All content rendered on the About page is managed from this single file.
 * You can edit headings, descriptions, stats, services, team members,
 * mission/vision, timeline, contact info, and image paths below.
 */

const aboutContent = {
  // 1. Hero Section
  hero: {
    eyebrow: "ABOUT YUGANTAR TECHNOLOGIES",
    title: "Empowering People. Building Businesses. Creating Digital Futures.",
    description: "Yugantar Technologies & Training Institute helps businesses build stronger digital experiences and helps aspiring professionals develop practical, industry-ready technology skills.",
    primaryButton: "Explore Our Services",
    primaryLink: "/services",
    secondaryButton: "Talk to Our Team",
    secondaryLink: "/contact",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Yugantar Technologies Team Collaboration"
  },

  // 2. Who We Are Section
  company: {
    eyebrow: "WHO WE ARE",
    title: "Technology That Helps People and Businesses Move Forward.",
    paragraphs: [
      "Yugantar Technologies & Training Institute was established in Navrangpura, Ahmedabad, with a mission to bridge the gap between academic tech learning and real-world industrial software execution.",
      "We combine full-suite IT development services—including web development, custom software, SEO, and digital marketing—with practical, hands-on training and internship programs designed to build technical confidence."
    ],
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Yugantar Technologies Office & Operations"
  },

  // 3. What We Do (Services Cards)
  services: [
    {
      id: "web-dev",
      title: "Web Development",
      description: "Custom high-performance websites, single-page applications, and scalable e-commerce portals built with React and modern stacks.",
      icon: "Globe"
    },
    {
      id: "digital-growth",
      title: "Digital Growth",
      description: "Data-driven SEO strategies, Google Business Profile optimization, and social media campaigns to drive active inquiries.",
      icon: "TrendingUp"
    },
    {
      id: "business-solutions",
      title: "Business Solutions",
      description: "Tailored CRM/ERP systems, custom API integrations, and field force management applications for streamlined operations.",
      icon: "Building2"
    },
    {
      id: "tech-training",
      title: "Technology Training",
      description: "Industry-aligned learning modules in Full-Stack MERN, Python, Java, Data Science, and UI/UX design led by expert mentors.",
      icon: "GraduationCap"
    },
    {
      id: "internship-prog",
      title: "Internship Programs",
      description: "Real-world project experience providing hands-on mentorship, production code practice, and career launchpad opportunities.",
      icon: "Briefcase"
    },
    {
      id: "adv-tech",
      title: "Advanced Technology",
      description: "Modern cloud deployment pipelines, RESTful API architectures, mobile app solutions, and ongoing technical support.",
      icon: "Cpu"
    }
  ],

  // 4. Impact / Statistics
  stats: [
    {
      number: "50+",
      label: "Business Projects",
      sublabel: "Delivered for Clients"
    },
    {
      number: "5000+",
      label: "Students / Learners",
      sublabel: "Trained & Mentored"
    },
    {
      number: "20+",
      label: "Digital Solutions",
      sublabel: "Web, Mobile & ERP"
    },
    {
      number: "4.9★",
      label: "Google Rating",
      sublabel: "Navrangpura Ahmedabad"
    }
  ],

  // 5. Our Journey (Timeline)
  journey: [
    {
      year: "Foundation",
      title: "The Beginning",
      description: "Yugantar Technologies was founded in Navrangpura, Ahmedabad, to bridge academic learning with real-world IT industry execution."
    },
    {
      year: "Transformation",
      title: "IT Solutions & Services",
      description: "Expanded into full-service web development, custom software, SEO, and digital transformation for businesses in Gujarat."
    },
    {
      year: "Growth",
      title: "Technology & Training Excellence",
      description: "Launched structured internship programs and specialized tech tracks, empowering thousands of students and scaling client businesses."
    }
  ],

  // 6. Mission & Vision
  mission: {
    title: "Our Mission",
    description: "To empower students, professionals and businesses with practical technology, digital solutions and continuous support that create meaningful growth.",
    icon: "Target"
  },
  vision: {
    title: "Our Vision",
    description: "To become a trusted technology partner for businesses and a career-building platform for the next generation of technology professionals.",
    icon: "Rocket"
  },

  // 7. Core Values
  values: [
    {
      id: "innovation",
      title: "Innovation",
      description: "Pushing boundaries with modern frameworks, tools, and digital solutions designed for production scalability.",
      icon: "Lightbulb"
    },
    {
      id: "integrity",
      title: "Integrity",
      description: "Honest guidance, transparent outcomes, and authentic commitments to clients and learners alike.",
      icon: "Shield"
    },
    {
      id: "customer-first",
      title: "Customer First",
      description: "Putting business objectives and student career success at the core of every solution we build.",
      icon: "Users"
    },
    {
      id: "continuous-learning",
      title: "Continuous Learning",
      description: "Constantly evolving with global technology trends, modern frameworks, and industry practices.",
      icon: "RefreshCw"
    },
    {
      id: "excellence",
      title: "Excellence",
      description: "Delivering production-grade quality, clean code architectures, and high-performance user interfaces.",
      icon: "Award"
    },
    {
      id: "collaboration",
      title: "Collaboration",
      description: "Fostering strong teamwork between business clients, experienced mentors, and ambitious learners.",
      icon: "Handshake"
    }
  ],

  // 8. Why Choose Yugantar
  whyChooseUs: {
    eyebrow: "WHY CHOOSE YUGANTAR?",
    title: "A Trusted Technology Partner & Career Institute",
    benefits: [
      {
        title: "Industry-Focused Approach",
        description: "Solutions and training structured around current market standards and practical implementation.",
        icon: "CheckCircle"
      },
      {
        title: "Practical Expertise",
        description: "Proven experience in building web applications, mobile tools, and full digital platforms.",
        icon: "Code2"
      },
      {
        title: "Customized Solutions",
        description: "Tailored IT strategies and learning blueprints designed to fit specific goals.",
        icon: "Settings"
      },
      {
        title: "Dedicated Support",
        description: "Ongoing guidance, post-launch maintenance, and continuous student career assistance.",
        icon: "Headphones"
      },
      {
        title: "Learning + Implementation",
        description: "Combining theoretical clarity with hands-on live project building and execution.",
        icon: "Layers"
      },
      {
        title: "Long-Term Partnership",
        description: "Building lasting relationships with businesses and lifelong connections with alumni.",
        icon: "Heart"
      }
    ]
  },

  // 9. How We Work (5-Step Process)
  process: [
    {
      step: "01",
      title: "Understand",
      description: "Analyzing business needs or student learning goals to establish clear, measurable objectives."
    },
    {
      step: "02",
      title: "Plan",
      description: "Structuring custom technical architecture, wireframes, or personalized learning tracks."
    },
    {
      step: "03",
      title: "Build",
      description: "Developing robust software, clean user interfaces, or conducting hands-on project sessions."
    },
    {
      step: "04",
      title: "Launch",
      description: "Deploying production-ready applications or launching real-world internship projects."
    },
    {
      step: "05",
      title: "Grow",
      description: "Providing continuous optimization, post-launch support, and career advancement guidance."
    }
  ],

  // 10. Our Team
  team: [
    {
      id: "1",
      name: "Bhagwanaram Chaudhary",
      designation: "Founder / CEO",
      description: "As the Founder & CEO of Yugantar Technologies, Bhagwanaram leads the overarching strategic vision, enterprise technology innovation, and industry alignment. With deep expertise in IT management and digital growth, he has spearheaded client software initiatives while building a practical training platform that empowers students and businesses across Ahmedabad.",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800",
      linkedin: "https://www.linkedin.com/company/yugantartechnologies"
    },
    {
      id: "2",
      name: "Swayam Arya",
      designation: "Social Media Manager",
      description: "Swayam leads social media marketing campaigns, brand identity strategies, and digital content distribution at Yugantar Technologies. He specializes in Meta Ads management, Instagram Reels production, and data-driven audience engagement strategies to maximize client brand authority and organic reach.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800",
      linkedin: "https://www.linkedin.com/company/yugantartechnologies"
    },
    {
      id: "3",
      name: "Jainil Prajapati",
      designation: "Team Leader",
      description: "Jainil oversees full-stack development workflows, system architecture design, and quality engineering standards. He coordinates software deployment pipelines, manages technical project timelines, and ensures production-grade code execution across web applications and enterprise solutions.",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=800",
      linkedin: "https://www.linkedin.com/company/yugantartechnologies"
    }
  ],

  // 11. Students + Businesses Dual Cards
  students: {
    eyebrow: "FOR STUDENTS",
    title: "Build Your Technology Career",
    description: "Gain practical skills, work on live production projects, and get direct mentorship from experienced developers.",
    flow: ["Learn", "Build", "Intern", "Grow"],
    buttonText: "Explore Training Programs",
    buttonLink: "/courses"
  },
  businesses: {
    eyebrow: "FOR BUSINESSES",
    title: "Build and Grow Your Digital Business",
    description: "Scale your market presence with custom web development, mobile apps, SEO optimization, and software solutions.",
    flow: ["Discover", "Plan", "Build", "Grow"],
    buttonText: "Explore IT Services",
    buttonLink: "/services"
  },

  // 12. Partners / Certifications (Empty array hides section gracefully)
  partners: [],

  // 13. Testimonials (Empty array hides section gracefully)
  testimonials: [],

  // 14. Office / Location
  contact: {
    title: "Get In Touch With Yugantar Technologies",
    subtitle: "Our team is currently shifting to a new office location in Ahmedabad. For all client consultations, course enrollments, and inquiries, please connect with us directly via phone or email.",
    address: "Ahmedabad, Gujarat (New Office Opening Soon)",
    phone: "+91 9054372690",
    email: "info@yugantartechnologies.com",
    mapsUrl: "",
    image: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Yugantar Technologies Consultation"
  },

  // 15. Final CTA
  cta: {
    title: "Let's Build Something Meaningful Together.",
    description: "Whether you are looking to grow your business digitally or build your career in technology, Yugantar Technologies is here to help you take the next step.",
    primaryButton: "Talk to Our Team",
    primaryLink: "/contact",
    secondaryButton: "Explore Our Services",
    secondaryLink: "/services"
  }
};

export default aboutContent;
