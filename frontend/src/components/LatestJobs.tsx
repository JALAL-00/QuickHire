import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import LatestJobCard from './LatestJobCard';

const latestJobs = [
  { id: '9', title: 'Social Media Assistant', company: 'Nomad', location: 'Paris, France', type: 'Full-time', categories: ['Marketing', 'Design'] },
  { id: '10', title: 'Social Media Assistant', company: 'Netify', location: 'Paris, France', type: 'Full-time', categories: ['Marketing', 'Design'] },
  { id: '11', title: 'Brand Designer', company: 'Dropbox', location: 'San Francisco, USA', type: 'Full-time', categories: ['Marketing', 'Design'] },
  { id: '12', title: 'Brand Designer', company: 'Maze', location: 'San Francisco, USA', type: 'Full-time', categories: ['Marketing', 'Design'] },
  { id: '13', title: 'Interactive Developer', company: 'Terraform', location: 'Hamburg, Germany', type: 'Full-time', categories: ['Marketing', 'Design'] },
  { id: '14', title: 'Interactive Developer', company: 'Udacity', location: 'Hamburg, Germany', type: 'Full-time', categories: ['Marketing', 'Design'] },
  { id: '15', title: 'HR Manager', company: 'Packer', location: 'Lucerne, Switzerland', type: 'Full-time', categories: ['Marketing', 'Design'] },
  { id: '16', title: 'HR Manager', company: 'Webflow', location: 'Lucerne, Switzerland', type: 'Full-time', categories: ['Marketing', 'Design'] },
];

const LatestJobs = () => {
  return (
    <section className="relative py-20 md:py-28 bg-[#F8F8FD] overflow-hidden">
      
      {/* Background Pattern - Flipped/Positioned differently than Hero */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none z-0 opacity-40">
        <Image 
            src="/assets/pattern.png" 
            alt="background-pattern" 
            fill
            className="object-contain object-right-bottom rotate-180"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-dark leading-tight">
            Latest <span className="text-accent">jobs open</span>
          </h2>
          <Link href="/jobs" className="hidden md:flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all">
            Show all jobs <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Grid (2 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {latestJobs.map((job) => (
            <LatestJobCard key={job.id} {...job} />
          ))}
        </div>

        {/* Mobile Link */}
        <div className="mt-12 md:hidden text-center">
             <Link href="/jobs" className="inline-flex items-center gap-2 text-primary font-bold">
            Show all jobs <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default LatestJobs;