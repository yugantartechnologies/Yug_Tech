import React from "react";
import { Link } from "react-router-dom";

export default function CourseCard({ course, onEnroll }) {
  const getCourseSlug = (title) => {
    const slugs = {
      "Full Stack Development (MERN)": "full-stack-mern",
      "Python Development": "python-development",
      "Java Full Stack": "java-full-stack",
      "UI/UX Design": "ui-ux-design",
      "Data Science & AI/ML": "data-science-ai-ml",
      "Mobile App Development": "mobile-app-development",
      "Digital Marketing": "digital-marketing",
    };

    return (
      slugs[title] ||
      title
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "")
    );
  };

  return (
    <div className="group premium-card-hover-light bg-white border border-slate-200/90 rounded-2xl">
      <div className="relative h-48 overflow-hidden">
        <img
          src={course.imageUrl}
          alt={course.title}
          className="absolute inset-0 w-full h-full object-cover transition duration-500"
        />

        <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-lg text-xs font-semibold shadow">
          {course.duration}
        </div>

        {course.popular && (
          <div className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-lg text-xs font-bold shadow">
            Popular
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-orange-500 transition">
          {course.title}
        </h3>

        <p className="text-sm text-slate-600 mb-4 leading-relaxed">
          {course.description}
        </p>

        <ul className="space-y-2 mb-6">
          {course.features.slice(0, 4).map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
              <svg
                className="w-4 h-4 text-orange-400 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              {feature}
            </li>
          ))}

          {course.features.length > 4 && (
            <li className="text-xs text-slate-500 pl-6">
              + {course.features.length - 4} more features
            </li>
          )}
        </ul>

        <div className="pt-4 border-t border-slate-200 space-y-3">
          <Link
            to={`/courses/${getCourseSlug(course.title)}`}
            className="w-full px-4 py-2.5 border border-orange-500 text-orange-500 font-semibold text-sm rounded-lg hover:bg-orange-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
          >
            View Details
          </Link>

          <button
            onClick={() => onEnroll && onEnroll(course)}
            className="w-full inline-flex items-center justify-center gap-3 bg-orange-600 hover:bg-orange-700 px-5 py-2.5 rounded-lg font-bold text-white transition"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}
