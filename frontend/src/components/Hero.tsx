import Image from "next/image";
import { Search, MapPin, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-full bg-light pt-16 pb-0 overflow-hidden min-h-[700px]">

      {/* Background Geometric Pattern - Top Right */}
      <div className="absolute top-0 right-0 w-[55%] h-full pointer-events-none z-0">
        {/* Actual pattern image if available */}
        <div className="absolute inset-0">
          <Image
            src="/assets/pattern.png"
            alt="pattern"
            fill
            className="object-cover object-left-top"
          />
        </div>
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-8 relative z-10">

        {/* LEFT COLUMN */}
        <div className="pt-12 lg:pt-16 pb-24 max-w-[600px]">

          {/* Main Heading */}
          <h1 className="text-[56px] lg:text-[72px] font-extrabold text-dark leading-[1.05] tracking-tight mb-8">
            Discover <br />
            more than <br />
            <span className="text-accent relative inline-block">
              5000+ Jobs
              {/* Hand-drawn scribble underline - matches the double-stroke style in Figma */}
              <svg
                className="absolute -bottom-5 left-0 w-full"
                viewBox="0 0 380 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* First stroke - main wave */}
                <path
                  d="M3 18C60 8 150 2 280 14C310 17 340 19 377 16"
                  stroke="#26A4FF"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                />
                {/* Second stroke - slight offset below for double-line effect */}
                <path
                  d="M3 23C55 14 145 9 275 20C308 23 340 24 377 22"
                  stroke="#26A4FF"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.7"
                />
              </svg>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-muted text-lg font-normal mb-12 leading-relaxed max-w-[460px]">
            Great platform for the job seeker that searching for new career heights and passionate about startups.
          </p>

          {/* Search Bar */}
          <div className="bg-white shadow-[0_16px_48px_rgba(0,0,0,0.08)] flex flex-col md:flex-row items-stretch max-w-[680px]">

            {/* Keyword Input */}
            <div className="flex-1 px-5 py-4 border-b md:border-b-0 md:border-r border-gray-200">
              <div className="flex items-center gap-3 h-full">
                <Search className="text-dark w-5 h-5 shrink-0" strokeWidth={2.2} />
                <div className="flex flex-col w-full">
                  <input
                    type="text"
                    placeholder="Job title or keyword"
                    className="w-full outline-none text-dark placeholder-[#A8ADB7] font-medium text-[15px] bg-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Location Selector */}
            <div className="flex-1 px-5 py-4 border-b md:border-b-0 border-gray-200">
              <div className="flex items-center gap-3 h-full">
                <MapPin className="text-dark w-5 h-5 shrink-0" strokeWidth={2.2} />
                <div className="relative w-full flex items-center">
                  <select className="w-full outline-none text-dark font-medium bg-transparent cursor-pointer appearance-none text-[15px] pr-6">
                    <option>Florence, Italy</option>
                    <option>London, UK</option>
                    <option>New York, USA</option>
                    <option>Berlin, Germany</option>
                  </select>
                  <ChevronDown className="absolute right-0 w-4 h-4 text-dark pointer-events-none" strokeWidth={2.2} />
                </div>
              </div>
            </div>

            {/* Search Button */}
            <button className="bg-primary hover:bg-primary-hover text-white font-bold text-[15px] px-8 py-4 transition-all duration-200 whitespace-nowrap shrink-0">
              Search my job
            </button>
          </div>

          {/* Popular Tags */}
          <div className="mt-6 text-sm text-dark font-medium flex items-center gap-1 flex-wrap">
            <span className="text-muted font-normal">Popular :</span>
            {["UI Designer", "UX Researcher", "Android", "Admin"].map((tag, i, arr) => (
              <span key={tag} className="cursor-pointer hover:text-primary transition-colors">
                {tag}{i < arr.length - 1 ? "," : ""}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN - Man Image */}
        <div className="hidden lg:flex items-end justify-center relative">
          <div className="relative w-[580px] h-[660px]">
            <Image
              src="/assets/man.png"
              alt="Job Seeker"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;