import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FAQSection from "../components/FAQSection";
import useFaqByCategory from "../hooks/useFaqByCategory";
import { FAQ_CATEGORIES } from "../constants/faqDefaults";

export default function Blog() {
  const faqItems = useFaqByCategory(FAQ_CATEGORIES.BLOG);
  useEffect(() => {
    document.title = "IT Blog & Insights - YugAntar Technologies";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Latest insights on web development, mobile apps, AI, and IT trends from YugAntar Technologies."
      );
    }
    window.scrollTo(0, 0);
  }, []);

  const articles = [
    {
      title: "Top Web Development Trends in 2024",
      description: "Explore the most important web development trends like AI integration, progressive web apps, and serverless architecture.",
      category: "Web Development",
      readTime: "5 min read",
      slug: "web-development-trends",
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "How Mobile Apps Transform Modern Businesses",
      description: "Mobile apps help businesses automate operations, improve customer engagement, and boost revenue through digital solutions.",
      category: "Mobile Development",
      readTime: "6 min read",
      slug: "mobile-app-business-growth",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "AI & Machine Learning for Startups",
      description: "Discover how AI-powered tools and machine learning models help startups improve efficiency and gain competitive advantage.",
      category: "AI & ML",
      readTime: "7 min read",
      slug: "ai-ml-startups",
      color: "from-orange-500 to-yellow-500"
    },
    {
      title: "Why Every Business Needs a CRM System",
      description: "CRM systems help manage leads, track sales, automate workflows, and improve customer relationships effectively.",
      category: "Business Solutions",
      readTime: "5 min read",
      slug: "crm-business-benefits",
      color: "from-green-500 to-emerald-400"
    },
    {
      title: "Cloud Computing Benefits for Growing Companies",
      description: "Cloud technology allows businesses to scale faster, reduce infrastructure cost, and maintain high data security.",
      category: "Cloud Solutions",
      readTime: "4 min read",
      slug: "cloud-computing-benefits",
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Cybersecurity Best Practices for Businesses",
      description: "Learn essential cybersecurity strategies to protect your business data, applications, and digital infrastructure.",
      category: "Cybersecurity",
      readTime: "6 min read",
      slug: "cybersecurity-best-practices",
      color: "from-red-500 to-rose-400"
    },
    {
      title: "UI UX Career Guide",
      description: "Career guidance for students interested in UI/UX design and growth opportunities.",
      category: "WordPress",
      readTime: "External article",
      externalUrl: "https://yugantartechnologies.wordpress.com/2026/04/29/ui-ux-career-guide/",
      color: "from-sky-500 to-blue-500"
    },
    {
      title: "Importance of SEO",
      description: "Understand why SEO is critical for visibility, traffic, and business growth.",
      category: "WordPress",
      readTime: "External article",
      externalUrl: "https://yugantartechnologies.wordpress.com/2026/04/21/importance-of-seo/",
      color: "from-cyan-500 to-teal-500"
    },
    {
      title: "Digital Marketing Career Guide",
      description: "Explore digital marketing career options, skills, and future opportunities.",
      category: "WordPress",
      readTime: "External article",
      externalUrl: "https://yugantartechnologies.wordpress.com/2026/04/17/digital-marketing-career-guide/",
      color: "from-purple-500 to-fuchsia-500"
    },
    {
      title: "What Is MERN Stack?",
      description: "A simple introduction to MERN stack and how it is used in modern web development.",
      category: "WordPress",
      readTime: "External article",
      externalUrl: "https://yugantartechnologies.wordpress.com/2026/04/16/what-is-mern-stack/",
      color: "from-indigo-500 to-blue-600"
    },
    {
      title: "Best IT Training Institute in Ahmedabad",
      description: "Industry-skills-focused guide for students choosing the right IT training institute.",
      category: "WordPress",
      readTime: "External article",
      externalUrl: "https://yugantartechnologies.wordpress.com/2026/04/15/best-it-training-institute-in-ahmedabad-build-your-career-with-industry-skills/",
      color: "from-emerald-500 to-green-500"
    },
    {
      title: "Career Opportunities After Learning",
      description: "Learn about career opportunities after technical upskilling and training.",
      category: "Blogspot",
      readTime: "External article",
      externalUrl: "https://yugantartechnologies.blogspot.com/2026/04/career-opportunities-after-learning.html",
      color: "from-orange-500 to-amber-500"
    },
    {
      title: "How to Use Social Media to Share Blogs",
      description: "Practical social media methods to distribute blog content effectively.",
      category: "Blogspot",
      readTime: "External article",
      externalUrl: "https://yugantartechnologies.blogspot.com/2026/04/how-to-use-social-media-to-share-blogs.html",
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "What Is SEO and Why It Is Important",
      description: "Beginner-friendly explanation of SEO and why every business needs it.",
      category: "Blogspot",
      readTime: "External article",
      externalUrl: "https://yugantartechnologies.blogspot.com/2026/04/what-is-seo-and-why-it-is-important-for.html",
      color: "from-lime-500 to-green-500"
    },
    {
      title: "How Digital Marketing Helps Businesses",
      description: "A practical look at digital marketing impact on business growth.",
      category: "Blogspot",
      readTime: "External article",
      externalUrl: "https://yugantartechnologies.blogspot.com/2026/04/how-digital-marketing-helps-businesses.html",
      color: "from-violet-500 to-purple-500"
    },
    {
      title: "Why Website Development Skills Are Important",
      description: "Understand the value of website development skills in modern careers.",
      category: "Blogspot",
      readTime: "External article",
      externalUrl: "https://yugantartechnologies.blogspot.com/2026/04/why-website-development-skills-are.html",
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Top Benefits of Learning MERN Stack",
      description: "Benefits of learning MERN stack for students and aspiring developers.",
      category: "Blogspot",
      readTime: "External article",
      externalUrl: "https://yugantartechnologies.blogspot.com/2026/04/top-benefits-of-learning-mern-stack.html",
      color: "from-teal-500 to-cyan-500"
    },
    {
      title: "Best IT Training Institute in Ahmedabad (Blogspot)",
      description: "An overview of practical IT training benefits and career outcomes.",
      category: "Blogspot",
      readTime: "External article",
      externalUrl: "https://yugantartechnologies.blogspot.com/2026/04/best-it-training-institute-in-ahmedabad.html",
      color: "from-amber-500 to-orange-500"
    },
    {
      title: "Best IT Training Institute in Ahmedabad (Medium)",
      description: "Why YugAntar Technologies is a strong option for IT training in Ahmedabad.",
      category: "Medium",
      readTime: "External article",
      externalUrl: "https://medium.com/@yugantartechnologies01/if-you-are-looking-for-the-best-it-training-institute-in-ahmedabad-yugantar-technologies-is-one-of-915ba2ed8af8",
      color: "from-gray-500 to-slate-500"
    },
    {
      title: "MERN Stack Course in Ahmedabad - Become Full Stack Developer",
      description: "Detailed guide on MERN stack course outcomes and full stack career path.",
      category: "Medium",
      readTime: "External article",
      externalUrl: "https://medium.com/@yugantartechnologies01/mern-stack-course-in-ahmedabad-become-full-stack-developer-ea787fb6967a",
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "I Tried Learning Coding in Ahmedabad - Here's What Happened",
      description: "A personal learning journey and takeaways for coding students.",
      category: "Medium",
      readTime: "External article",
      externalUrl: "https://medium.com/@yugantartechnologies01/i-tried-learning-coding-in-ahmedabad-heres-what-happened-8607497e5264",
      color: "from-fuchsia-500 to-pink-500"
    },
    {
      title: "MERN Stack Explained in the Simplest Way Possible",
      description: "Simple and clear MERN stack explanation for beginners.",
      category: "Medium",
      readTime: "External article",
      externalUrl: "https://medium.com/@yugantartechnologies01/mern-stack-explained-in-the-simplest-way-possible-c9725e6a661f",
      color: "from-indigo-500 to-violet-500"
    },
    {
      title: "Why Most Students Fail in Digital Marketing and How to Fix It",
      description: "Common mistakes in digital marketing learning and practical solutions.",
      category: "Medium",
      readTime: "External article",
      externalUrl: "https://medium.com/@yugantartechnologies01/why-most-students-fail-in-digital-marketing-and-how-to-fix-it-b6b03f20e818",
      color: "from-rose-500 to-red-500"
    },
    {
      title: "How Local Business in Ahmedabad Are Growing with SEO",
      description: "Local SEO growth insights and practical business-focused examples.",
      category: "Medium",
      readTime: "External article",
      externalUrl: "https://medium.com/@yugantartechnologies01/how-local-business-in-ahmedabad-are-growing-with-seo-63825a967e85",
      color: "from-cyan-500 to-sky-500"
    },
    {
      title: "UI UX Design Is Not Just About Creativity - Here's the Truth",
      description: "Real-world view of UI/UX beyond visuals and creativity.",
      category: "Medium",
      readTime: "External article",
      externalUrl: "https://medium.com/@yugantartechnologies01/ui-ux-design-is-not-just-about-creativity-heres-the-truth-eb4345c762c9",
      color: "from-purple-500 to-indigo-500"
    }
  ];

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen font-sans selection:bg-orange-500/30">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
           <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-500/10 blur-[120px] rounded-lg"></div>
           <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-500/10 blur-[120px] rounded-lg"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-3/5 text-center lg:text-left">
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-orange-500 uppercase bg-orange-200/10 border border-orange-200/20 rounded-lg">
                Knowledge Hub
              </span>
              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight text-slate-900">
                Tech Insights & <br />
                <span className="text-orange-500">Future Trends.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed">
                Stay ahead of the curve with expert perspectives on AI, Cloud, and Software Engineering. We translate complex tech into business growth.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-2 rounded-xl font-bold text-slate-900 shadow-xl "
                >
                  Get IT Consultation
                </Link>
              </div>
            </div>
            <div className="lg:w-2/5 relative">
                <div className="absolute from-orange-500 to-orange-600"></div>
                <img
                  src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg"
                  alt="Tech Analysis"
                  className="relative rounded-2xl shadow-2xl border border-slate-700 w-full object-cover h-[350px]"
                />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24 bg-slate-50">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">Latest Articles</h2>
                <div className="h-1.5 w-24 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg"></div>
            </div>
            <p className="text-slate-600 max-w-md">
                Exploring the intersection of technology and business strategy through deep-dives and tutorials.
            </p>
        </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="group relative site-card border border-slate-200 rounded-3xl p-8 hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >
              {/* Icon with Glowing background */}
              {/* <div className={`w-16 h-16 flex items-center justify-center text-4xl rounded-2xl bg-gradient-to-br ${article.color} mb-6 shadow-lg group- transition-transform duration-500`}>
                {article.icon}
              </div> */}

              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-bold tracking-widest uppercase text-orange-500 bg-orange-200/10 px-3 py-1 rounded-md">
                  {article.category}
                </span>
                <span className="text-xs text-slate-700 font-medium italic">
                  {article.readTime}
                </span>
              </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-600 transition-colors duration-300 leading-tight text-slate-900">
                {article.title}
              </h3>

              <p className="text-slate-700 text-sm leading-relaxed mb-8 flex-grow">
                {article.description}
              </p>

              {article.externalUrl ? (
                <a
                  href={article.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-orange-500 transition-all"
                >
                  READ ARTICLE
                  <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 text-sm font-bold text-slate-700">
                  Coming soon
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Modern CTA Section */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="relative rounded-[40px] p-12 md:p-20 overflow-hidden text-center border border-slate-700 bg-gradient-to-b from-white/5 to-transparent">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-orange-500/20 blur-[80px] rounded-lg"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-orange-500/20 blur-[80px] rounded-lg"></div>

            <h3 className="text-3xl md:text-5xl font-black mb-6 relative z-10">
              Ready to transform your <br className="hidden md:block"/> digital presence?
            </h3>
            <p className="text-slate-600 text-lg mb-10 max-w-xl mx-auto relative z-10">
              Join 50+ businesses in Ahmedabad that scaled their operations with our custom IT solutions.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-2 rounded-xl font-bold text-slate-900 shadow-xl "
            >
              Start Your Project Now
            </Link>
        </div>
      </section>

      <FAQSection items={faqItems} schemaId="blog-faq-schema" />

      <Footer />
    </div>
  );
}