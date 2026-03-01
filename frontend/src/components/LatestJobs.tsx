"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import LatestJobCard from './LatestJobCard';
import { Job } from '@/types/job';

const LatestJobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/jobs`);
        const result = await res.json();
        if (result.success) {
          // Show the latest 8 jobs
          setJobs(result.data.slice(0, 8));
        }
      } catch (err) {
        console.error("Error fetching latest jobs:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <section className="relative py-20 md:py-28 bg-[#F8F8FD] overflow-hidden">
      
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none z-0 opacity-40">
        <Image 
            src="/assets/pattern.png" 
            alt="background-pattern" 
            fill
            className="object-contain object-right-bottom rotate-180"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-dark leading-tight">
            Latest <span className="text-accent">jobs open</span>
          </h2>
          <Link href="/jobs" className="hidden md:flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all">
            Show all jobs <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {loading ? (
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-32 bg-white animate-pulse border border-gray-100"></div>
            ))}
          </div>
        ) : jobs.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jobs.map((job) => (
              <LatestJobCard 
                key={job._id} 
                id={job._id}
                title={job.title}
                company={job.company}
                location={job.location}
                type="Full-time"
                categories={[job.category]}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-10 text-muted italic">No jobs posted yet.</div>
        )}

      </div>
    </section>
  );
};

export default LatestJobs;