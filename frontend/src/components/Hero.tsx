import Image from "next/image";
import { Search, MapPin, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-full bg-light pt-12 pb-24 overflow-hidden min-h-[650px]">
      
      {/* BACKGROUND PATTERN (Top Right) */}
      <div className="absolute top-0 right-0 w-[56%] h-full pointer-events-none z-0 hidden lg:block">
        <Image 
            src="/assets/pattern.png" 
            alt="pattern" 
            fill
            className="object-contain object-right-top opacity-100"
        />
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-10 relative z-10 items-center">
        
        {/* LEFT COLUMN: Text & Search */}
        <div className="max-w-xl">
          <h1 className="text-[56px] lg:text-[76px] font-bold text-dark leading-[1.1] mb-6 tracking-tight">
            Discover <br />
            more than <br />
            <span className="text-accent relative inline-block">
              5000+ Jobs
              {/* Blue Marker Scribble */}
              <svg
                className="absolute -bottom-3 left-0 w-full h-4 text-accent"
                viewBox="0 0 200 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.00025 6.99997C25.7501 2.67594 72.5 -1.00003 198 4.49997"
                  stroke="currentColor"
                  strokeWidth="4" // Thicker stroke
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="text-muted text-lg mb-10 leading-relaxed">
            Great platform for the job seeker that searching for new career heights and passionate about startups.
          </p>

          {/* SEARCH BAR (White Box Container) */}
          <div className="bg-white p-2 shadow-search flex flex-col md:flex-row items-center">
            
            {/* Input 1: Keyword */}
            <div className="flex items-center flex-1 px-4 py-3 w-full">
                <Search className="text-dark w-5 h-5 mr-3 shrink-0" />
                <input 
                    type="text" 
                    placeholder="Job title or keyword" 
                    className="w-full outline-none text-dark placeholder-muted font-medium bg-transparent"
                />
            </div>

            {/* Vertical Divider */}
            <div className="hidden md:block w-[1px] h-8 bg-gray-200 mx-2"></div>
            <div className="md:hidden w-full h-[1px] bg-gray-200 my-2"></div>

            {/* Input 2: Location */}
            <div className="flex items-center flex-1 px-4 py-3 w-full relative">
                <MapPin className="text-dark w-5 h-5 mr-3 shrink-0" />
                <div className="w-full relative">
                    <select className="w-full outline-none text-dark font-medium bg-transparent cursor-pointer appearance-none z-10 relative">
                        <option>Florence, Italy</option>
                        <option>London, UK</option>
                        <option>New York, USA</option>
                    </select>
                </div>
                <ChevronDown className="w-4 h-4 text-muted absolute right-4 pointer-events-none" />
            </div>

            {/* Search Button */}
            <button className="w-full md:w-auto bg-primary hover:bg-primary-hover text-white font-bold px-8 py-3 transition-colors">
              Search my job
            </button>
          </div>

          {/* POPULAR TAGS */}
          <div className="mt-6 text-sm">
            <span className="text-dark font-medium mr-2">Popular :</span>
            <span className="text-muted">UI Designer, UX Researcher, Android, Admin</span>
          </div>
        </div>

        {/* RIGHT COLUMN: Man Image */}
        <div className="relative h-[600px] w-full hidden lg:block">
            <div className="absolute bottom-0 right-0 w-[450px]">
                <Image 
                    src="/assets/man.png" 
                    alt="Happy Job Seeker" 
                    width={600} 
                    height={800} 
                    className="object-contain"
                    priority
                />
            </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;