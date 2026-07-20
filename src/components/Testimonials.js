import React from "react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Shrusti Patel",
      role: "MERN Stack Intern",
      body: "I had a great experience during my internship at Yugantar Technologies and Group of Companies. The teaching style was very clear and practical. The mentors explained every concept step by step and helped us whenever we had doubts. We also got hands-on practice, which improved my skills and confidence. Overall, it was a very helpful and learning-focused internship experience.",
      rating: 5,
      reviewsCount: "1 review",
      time: "4 months ago",
      avatarBg: "bg-gradient-to-br from-indigo-500 to-purple-600"
    },
    {
      name: "Laxman Chaudhary",
      role: "UI/UX & Digital Marketing Student",
      body: "Best UI/UX and Digital Marketing training institute in Ahmedabad. The course helped me understand both creative design and online promotion strategies. Portfolio building support and practical campaign training make it career-focused and industry-ready.",
      rating: 5,
      reviewsCount: "2 reviews",
      time: "4 months ago",
      avatarBg: "bg-gradient-to-br from-amber-400 to-orange-500"
    },
    {
      name: "Aesha Patel",
      role: "UI/UX Designer Student",
      body: "If you are searching for the best UI/UX course in Ahmedabad, YugAntar Technologies & Training Institute in Navrangpura is a great option. The training is completely practical and job-oriented. They provide industry-level design projects and proper mentorship.",
      rating: 5,
      reviewsCount: "1 review",
      time: "4 months ago",
      avatarBg: "bg-gradient-to-br from-sky-400 to-blue-500"
    },
    {
      name: "Mihir Gajar",
      role: "Python Developer",
      body: "I found this institute from Google and this is the one of the best technical institute I ever found. I'm doing python course from this institution and to be honest this is the best institute for a people who seriously want to learn something ....there teaching techniques is so amazing that made learning easy...i honestly prefer this institute to learn any engineering concepts.",
      rating: 4,
      reviewsCount: "1 review",
      time: "4 months ago",
      avatarBg: "bg-gradient-to-br from-emerald-400 to-teal-500"
    },
    {
      name: "Khushal Choudary",
      role: "UI/UX Designer",
      body: "I enrolled in the UI/UX + Digital Marketing combo course at YugAntar Technologies & Training Institute in Navrangpura, Ahmedabad. This combination is perfect for students who want both design and marketing skills. The institute provides practical Figma training along with SEO and social media marketing. One of the best combo courses in Ahmedabad.",
      rating: 5,
      reviewsCount: "3 reviews",
      time: "4 months ago",
      avatarBg: "bg-gradient-to-br from-fuchsia-400 to-purple-600"
    },
    {
      name: "Kunal Shah",
      role: "Full Stack Developer",
      body: "Excellent project guidance and placement support at Yugantar Technologies. Building a complete React and Node.js application from scratch gave me the practical coding knowledge required for corporate placements. Highly recommended!",
      rating: 5,
      reviewsCount: "1 review",
      time: "4 months ago",
      avatarBg: "bg-gradient-to-br from-rose-400 to-pink-500"
    }
  ];

  // Double the array for seamless infinite looping
  const scrollingReviews = [...reviews, ...reviews];

  return (
    <section
      id="testimonials"
      className="relative py-28 bg-slate-50 text-slate-900 overflow-hidden border-b border-slate-200/50"
    >
      <div className="absolute inset-0 bg-slate-50 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sky-600 font-semibold text-sm tracking-[0.4em] uppercase mb-3">
            Testimonials
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-5">
            Students who gained <span className="bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent">career-ready skills</span>
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Real feedback from learners who completed practical training, internships, and placement support.
          </p>
        </div>
      </div>

      {/* Testimonials Auto-Scrolling Loop Wrapper */}
      <div className="relative w-full overflow-hidden py-4 z-10">
        {/* Fading Edge Overlays */}
        <div className="absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-20 pointer-events-none" />

        {/* Marquee Row */}
        <div className="animate-marquee-scroll flex gap-8">
          {scrollingReviews.map((r, i) => (
            <div
              key={i}
              className="w-[380px] sm:w-[420px] flex-shrink-0 bg-gradient-to-br from-white to-white border border-slate-200/70 rounded-3xl p-8 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(14,165,233,0.05)] hover:border-sky-400/40 transition-all duration-300 group cursor-default"
            >
              <div className="flex flex-col h-full">
                
                {/* Rating & Metadata */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, starIdx) => (
                      <svg
                        key={starIdx}
                        className={`w-4 h-4 ${starIdx < r.rating ? "text-amber-400 fill-amber-400" : "text-slate-200"}`}
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-500 border border-slate-200/40">
                    {r.reviewsCount} • {r.time}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-slate-600 text-sm sm:text-[14.5px] leading-relaxed mb-6 italic">
                  "{r.body}"
                </p>

                <div className="h-[1px] w-full bg-slate-100 mb-5 mt-auto" />

                {/* Profile Card */}
                <div className="flex items-center gap-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold text-white text-base transition-transform duration-300 group-hover:scale-105 shadow-sm ${r.avatarBg}`}>
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 group-hover:text-sky-600 transition-colors text-sm sm:text-base">{r.name}</h4>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{r.role}</p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}