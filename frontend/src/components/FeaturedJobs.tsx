import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import JobCard from './JobCard';

const featuredJobs = [
  { id: '1', title: 'Email Marketing', company: 'Revolut', location: 'Madrid, Spain', type: 'Full time', categories: ['Marketing', 'Design'] },
  { id: '2', title: 'Brand Designer', company: 'Dropbox', location: 'San Francisco, US', type: 'Full time', categories: ['Design', 'Business'] },
  { id: '3', title: 'Email Marketing', company: 'Pitch', location: 'Berlin, Germany', type: 'Full time', categories: ['Marketing'] },
  { id: '4', title: 'Visual Designer', company: 'Blinklist', location: 'Granada, Spain', type: 'Full time', categories: ['Design'] },
  { id: '5', title: 'Product Designer', company: 'ClassPass', location: 'Manchester, UK', type: 'Full time', categories: ['Marketing', 'Design'] },
  { id: '6', title: 'Lead Designer', company: 'Canva', location: 'Ontario, Canada', type: 'Full time', categories: ['Design', 'Business'] },
  { id: '7', title: 'Brand Strategist', company: 'GoDaddy', location: 'Marseille, France', type: 'Full time', categories: ['Marketing'] },
  { id: '8', title: 'Data Analyst', company: 'Twitter', location: 'San Diego, US', type: 'Full time', categories: ['Technology'] },
];

const FeaturedJobs = () => {
  return (
    <section className="pt-8 md:pt-10 pb-16 md:pb-24 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-dark leading-tight">
            Featured <span className="text-accent">jobs</span>
          </h2>
          <Link 
            href="/jobs" 
            className="hidden md:flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all"
          >
            Show all jobs <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredJobs.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>

        {/* Mobile Link */}
        <div className="mt-10 md:hidden text-center">
             <Link href="/jobs" className="inline-flex items-center gap-2 text-primary font-bold">
            Show all jobs <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default FeaturedJobs;