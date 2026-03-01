import { Briefcase } from 'lucide-react';
import Link from 'next/link';

interface LatestJobCardProps {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  categories: string[];
}

const LatestJobCard = ({ id, title, company, location, type, categories }: LatestJobCardProps) => {
  return (
    <Link 
      href={`/jobs/${id}`}
      className="flex items-center gap-4 md:gap-6 p-6 bg-white border border-gray-100 hover:shadow-xl transition-all duration-300 group z-10"
    >
      {/* Left: Logo Container */}
      <div className="w-16 h-16 bg-white border border-gray-100 flex-shrink-0 flex items-center justify-center p-3">
        <Briefcase className="text-primary w-full h-full" strokeWidth={1.5} />
      </div>

      {/* Middle: Info */}
      <div className="flex-1">
        <h3 className="text-lg md:text-xl font-bold text-dark group-hover:text-primary transition-colors leading-tight mb-1">
          {title}
        </h3>
        <div className="flex items-center text-muted text-sm gap-2 mb-3">
          <span>{company}</span>
          <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
          <span>{location}</span>
        </div>
        
        {/* Badges/Tags - Exactly like Figma */}
        <div className="flex flex-wrap gap-2">
          <span className="px-4 py-1 bg-[#56CDAD]/10 text-[#56CDAD] rounded-full text-xs font-bold border border-[#56CDAD]/20">
            {type}
          </span>
          <div className="w-[1px] h-6 bg-gray-200 mx-1 hidden md:block"></div>
          {categories.map((cat, i) => (
             <span key={i} className={`px-4 py-1 rounded-full text-xs font-bold border
                ${cat === 'Marketing' ? 'bg-[#FFB836]/10 text-[#FFB836] border-[#FFB836]/20' : 
                  'bg-[#4640DE]/10 text-[#4640DE] border-[#4640DE]/20'}
             `}>
                {cat}
             </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default LatestJobCard;