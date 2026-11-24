import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const AssociatedCompanies = () => {
  const companies = [
    {
      name: "Kevalon Technology",
      logo: "https://res.cloudinary.com/dirqmm0ky/image/upload/v1770038233/Screenshot_2026-02-02_184509-removebg-preview_jvl967.png",
    },
    {
      name: "Techmicra",
      logo: "https://techmicra.co.in/img/core-img/techlogo.png",
    },
    {
      name: "Airson Web Solutions",
      logo: "https://airsonweb.com/assets/images/resources/logo.png",
    },
    {
      name: "Metro Midas",
      logo: "https://metromidas.com/static/media/metro-midas-logo.79bdbaa635b26da0dfab.png",
    },
    {
      name: "Kevalon Technology",
      logo: "https://res.cloudinary.com/dirqmm0ky/image/upload/v1770038233/Screenshot_2026-02-02_184509-removebg-preview_jvl967.png",
    },
    {
      name: "Techmicra",
      logo: "https://techmicra.co.in/img/core-img/techlogo.png",
    },
    {
      name: "Airson Web Solutions",
      logo: "https://airsonweb.com/assets/images/resources/logo.png",
    },
    {
      name: "Metro Midas",
      logo: "https://metromidas.com/static/media/metro-midas-logo.79bdbaa635b26da0dfab.png",
    }
  ];

  return (
    <section className="relative w-full py-12 sm:py-16 bg-white text-slate-900 overflow-hidden border-b border-slate-200/80">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-sky-600 font-bold text-xs tracking-widest uppercase mb-1.5">
            Industry Ecosystem & Placement Partners
          </p>
          <h3 className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-800">
            Trusted By Growing Companies & Leading IT Organizations
          </h3>
        </div>

        {/* Carousel */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 2400,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
        >
          {companies.map((company, index) => (
            <SwiperSlide key={index}>
              <div className="h-24 sm:h-28 flex flex-col items-center justify-center p-3 rounded-2xl border border-slate-200/80 bg-slate-50/60 hover:bg-white hover:border-slate-300 hover:shadow-md transition-all duration-300 group">
                <div className="w-full h-12 flex items-center justify-center mb-1.5">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="max-h-9 max-w-[120px] object-contain filter grayscale group-hover:grayscale-0 opacity-75 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
                <p className="text-[11px] font-semibold text-slate-600 group-hover:text-slate-900 transition-colors truncate max-w-full">
                  {company.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default AssociatedCompanies;
