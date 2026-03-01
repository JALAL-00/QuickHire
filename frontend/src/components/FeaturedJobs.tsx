"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import JobCard from './JobCard';
import { Job } from '@/types/job';

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/jobs`);
        const result = await res.json();
        if (result.success) {
          // Show the first 8 jobs as "Featured"
          setJobs(result.data.slice(0, 8));
        }
      } catch (err) {
        console.error("Error fetching featured jobs:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <section className="pt-8 md:pt-10 pb-16 md:pb-24 bg-white">
      <div className="container mx-auto px-6">
        
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

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-64 bg-gray-50 animate-pulse border border-gray-100"></div>
            ))}
          </div>
        ) : jobs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {jobs.map((job) => (
              <JobCard 
                key={job._id} 
                id={job._id}
                title={job.title}
                company={job.company}
                location={job.location}
                type="Full time"
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

export default FeaturedJobs;