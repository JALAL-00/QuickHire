import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  PenTool, 
  BarChart2, 
  Megaphone, 
  Banknote, 
  Monitor, 
  Code2, 
  Briefcase, 
  Users 
} from 'lucide-react';

// Data for Companies
const companies = [
  { name: 'Vodafone', logo: '/assets/vodafone.png' },
  { name: 'Intel', logo: '/assets/intel.png' },
  { name: 'Tesla', logo: '/assets/tesla.png' },
  { name: 'AMD', logo: '/assets/amd.png' },
  { name: 'Talkit', logo: '/assets/talkit.png' },
];

// Data for Categories
const categories = [
  { name: "Design", count: 235, icon: PenTool },
  { name: "Sales", count: 756, icon: BarChart2 },
  { name: "Marketing", count: 140, icon: Megaphone },
  { name: "Finance", count: 325, icon: Banknote },
  { name: "Technology", count: 436, icon: Monitor },
  { name: "Engineering", count: 542, icon: Code2 },
  { name: "Business", count: 211, icon: Briefcase },
  { name: "Human Resource", count: 346, icon: Users },
];

const CategorySection = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-6">
        
        {/* --- PART 1: COMPANIES LOGOS --- */}
        <div className="mb-24">
            <p className="text-muted text-lg mb-8 font-medium">
            Companies we helped grow
            </p>
            
            <div className="flex flex-wrap justify-between items-center gap-8 opacity-100 hover:opacity-100 transition-opacity duration-300 grayscale">
            {companies.map((company, index) => (
                <div key={index} className="relative w-32 h-8 md:w-40 md:h-10">
                <Image
                    src={company.logo}
                    alt={company.name}
                    fill
                    className="object-contain"
                />
                </div>
            ))}
            </div>
        </div>

        {/* --- PART 2: CATEGORIES HEADER --- */}
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl md:text-[48px] font-bold text-dark leading-tight">
            Explore by <span className="text-accent">category</span>
          </h2>
          <Link 
            href="/jobs" 
            className="hidden md:flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all"
          >
            Show all jobs <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* --- PART 3: CATEGORIES GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, index) => (
            <Link 
              href={`/jobs?category=${cat.name}`} 
              key={index}
              className={`group border p-8 transition-all duration-300 hover:shadow-xl flex flex-col justify-between min-h-[240px]
                ${cat.name === 'Marketing' 
                  ? 'bg-primary border-primary text-white shadow-lg shadow-indigo-200' // Active state
                  : 'bg-white border-gray-200 hover:border-primary hover:text-primary'
                }
              `}
            >
              {/* Top Row: Icon */}
              <div className="mb-6">
                <cat.icon 
                  className={`w-12 h-12 ${
                    cat.name === 'Marketing' ? 'text-white' : 'text-primary'
                  }`} 
                  strokeWidth={1.5}
                />
              </div>

              {/* Bottom Row: Text & Arrow */}
              <div>
                <h3 className={`text-2xl font-bold mb-3 ${
                   cat.name === 'Marketing' ? 'text-white' : 'text-dark group-hover:text-primary'
                }`}>
                  {cat.name}
                </h3>
                <div className="flex justify-between items-center">
                  <p className={`text-base flex items-center gap-2 ${
                    cat.name === 'Marketing' ? 'text-white/80' : 'text-muted'
                  }`}>
                    {cat.count} jobs available
                  </p>
                  
                  <ArrowRight className={`w-6 h-6 transition-transform group-hover:translate-x-2 ${
                     cat.name === 'Marketing' ? 'text-white' : 'text-dark group-hover:text-primary'
                  }`} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile "Show all" link */}
        <div className="mt-10 md:hidden text-center">
             <Link 
            href="/jobs" 
            className="inline-flex items-center gap-2 text-primary font-bold"
          >
            Show all jobs <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default CategorySection;