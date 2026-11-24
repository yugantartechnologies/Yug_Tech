import React from "react";
import { Star, CheckCircle2 } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Shrusti Patel",
      role: "MERN Stack Intern & Developer",
      tag: "Intern Alumni",
      body: "I had a great experience during my internship at Yugantar Technologies. The teaching style was very clear, structured and practical. The mentors explained every concept step by step and helped us whenever we had doubts. We also got hands-on practice on real client modules, which improved my skills and confidence immensely.",
      rating: 5,
      source: "Google Verified Review",
      initial: "SP"
    },
    {
      name: "Laxman Chaudhary",
      role: "UI/UX & Growth Specialist",
      tag: "Course Student",
      body: "One of the best practical UI/UX and Digital Marketing training experiences in Ahmedabad. The course helped me understand creative design systems in Figma as well as high-converting online campaign strategies. Portfolio building support and real client case studies made it truly job-ready.",
      rating: 5,
      source: "Google Verified Review",
      initial: "LC"
    },
    {
      name: "Aesha Patel",
      role: "Product Designer",
      tag: "UI/UX Student",
      body: "If you are searching for practical UI/UX design training in Ahmedabad, YugAntar Technologies at Sanskrit Galleria, Memnagar is the top choice. The training is completely hands-on with real software prototypes rather than outdated theory.",
      rating: 5,
      source: "Google Verified Review",
      initial: "AP"
    },
    {
      name: "Mihir Gajar",
      role: "Python Backend Developer",
      tag: "Python Student",
      body: "I found this institute on Google and it exceeded all expectations. Doing the Python development course here gave me strong confidence in database design, Django REST frameworks, and clean code principles. Mentors are patient and genuinely supportive.",
      rating: 5,
      source: "Google Verified Review",
      initial: "MG"
    },
    {
      name: "Khushal Choudary",
      role: "Full-Stack Web Designer",
      tag: "Web Design Student",
      body: "Enrolled in the UI/UX + Digital Marketing combo. The institute provides practical Figma training along with on-page SEO audits and performance marketing analytics. Highly valuable for anyone wanting to build modern client websites.",
      rating: 5,
      source: "Google Verified Review",
      initial: "KC"
    },
    {
      name: "Kunal Shah",
      role: "Software Engineer",
      tag: "Engineering Student",
      body: "Excellent project guidance and direct placement interview support. Building a complete React and Node.js application from scratch gave me the practical coding knowledge required to clear technical corporate interviews.",
      rating: 5,
      source: "Google Verified Review",
      initial: "KS"
    }
  ];

  return (
    <section
      id="testimonials"
      className="py-18 sm:py-24 bg-white text-slate-900 border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>4.9 / 5.0 Rating • Student Reviews</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            What Our <span className="text-sky-600">Students & Interns Say</span>
          </h2>

          <p className="mt-4 text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Genuine Google reviews and career experiences shared by students and interns who trained on live industry projects at Yugantar Technologies.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 hover:bg-white border border-slate-200/90 hover:border-amber-300 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Top Row: Stars & Source */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <span className="text-[11px] font-medium text-slate-500 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    {r.source}
                  </span>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-6 italic">
                  "{r.body}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-200/70 flex items-center justify-between gap-2">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-full bg-sky-600 text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-xs">
                    {r.initial}
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-sm text-slate-900 group-hover:text-sky-600 transition-colors truncate">
                      {r.name}
                    </h4>
                    <p className="text-xs text-slate-500 truncate">
                      {r.role}
                    </p>
                  </div>
                </div>

                <span className="text-[10.5px] font-semibold text-sky-700 bg-sky-50 border border-sky-200/80 px-2 py-0.5 rounded-md shrink-0 whitespace-nowrap">
                  {r.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
