export const FAQ_CATEGORIES = {
  HOME: "Homepage",
  COURSE: "Course",
  SERVICE: "Service",
  BLOG: "Blog",
};

export const FAQ_CATEGORY_OPTIONS = [
  FAQ_CATEGORIES.HOME,
  FAQ_CATEGORIES.COURSE,
  FAQ_CATEGORIES.SERVICE,
  FAQ_CATEGORIES.BLOG,
];

export const DEFAULT_FAQS_BY_CATEGORY = {
  [FAQ_CATEGORIES.HOME]: [
    {
      question: "What is the best digital marketing course in Ahmedabad?",
      answer:
        "Our Digital Marketing Course includes SEO, Google Ads and social media marketing.",
    },
    {
      question: "How long is the MERN stack course?",
      answer:
        "The MERN stack development course duration is usually 6 months including live projects.",
    },
    {
      question: "Do you provide internship?",
      answer:
        "Yes, students get internship opportunities after completing training programs.",
    },
  ],
  [FAQ_CATEGORIES.COURSE]: [
    {
      question: "Which are the most popular IT courses?",
      answer:
        "Our popular programs include MERN stack, Digital Marketing, UI/UX Design, Python Development, and Data Science.",
    },
    {
      question: "Do courses include practical projects?",
      answer:
        "Yes, every course includes practical assignments and live project work to build real industry skills.",
    },
    {
      question: "Do you provide internship after training?",
      answer:
        "Yes, students get internship opportunities after completing the training programs.",
    },
  ],
  [FAQ_CATEGORIES.SERVICE]: [
    {
      question: "What IT services do you provide?",
      answer:
        "We provide web development, mobile app development, custom software, ERP, CRM, API integrations, and digital marketing services.",
    },
    {
      question: "Can I book a consultation before starting a project?",
      answer:
        "Yes, you can book a free consultation to discuss your requirements and project scope.",
    },
    {
      question: "Do you provide support after project delivery?",
      answer:
        "Yes, we provide ongoing maintenance and support for delivered software solutions.",
    },
  ],
  [FAQ_CATEGORIES.BLOG]: [
    {
      question: "What topics are covered in your blog?",
      answer:
        "We publish insights on web development, mobile apps, AI, digital marketing, and practical IT career guidance.",
    },
    {
      question: "How often do you publish blog articles?",
      answer:
        "We regularly update our blog with new tech insights, trend analysis, and business-focused guides.",
    },
    {
      question: "Can I contact your team for implementation support?",
      answer:
        "Yes, you can contact our team to discuss implementation or project consultation.",
    },
  ],
};
