import { Briefcase, MapPin } from 'lucide-react';
import Link from 'next/link';

interface JobCardProps {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  categories: string[];
}

const JobCard = ({ id, title, company, location, type, categories }: JobCardProps) => {
  return (
    <Link 
      href={`/jobs/${id}`}
      className="group bg-white border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full"
    >
      <div>
        {/* Top: Logo & Type Badge */}
        <div className="flex justify-between items-start mb-6">
          <div className="w-12 h-12 bg-gray-50 border border-gray-100 flex items-center justify-center p-2">
            <Briefcase className="text-primary w-full h-full" />
          </div>
          <span className="px-3 py-1 border border-primary text-primary text-xs font-bold uppercase tracking-wider">
            {type}
          </span>
        </div>

        {/* Middle: Title & Company Info */}
        <h3 className="text-xl font-bold text-dark group-hover:text-primary transition-colors mb-2 leading-tight">
          {title}
        </h3>
        <div className="flex items-center text-muted text-sm gap-2 mb-6">
          <span>{company}</span>
          <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
          <span>{location}</span>
        </div>
      </div>

      {/* Bottom: Category Tags */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat, index) => (
          <span 
            key={index} 
            className={`px-3 py-1 rounded-full text-xs font-bold 
              ${cat === 'Marketing' ? 'bg-orange-50 text-orange-500 border border-orange-100' : 
                cat === 'Design' ? 'bg-green-50 text-green-500 border border-green-100' : 
                'bg-blue-50 text-blue-500 border border-blue-100'}
            `}
          >
            {cat}
          </span>
        ))}
      </div>
    </Link>
  );
};

export default JobCard;