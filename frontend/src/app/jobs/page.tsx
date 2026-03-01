"use client";

import { useState, useEffect } from "react";
import { Search, MapPin, Filter, Briefcase } from "lucide-react";
import LatestJobCard from "@/components/LatestJobCard";
import { Job } from "@/types/job";

const FindJobsPage = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const query = new URLSearchParams();
      if (search) query.append("search", search);
      if (category) query.append("category", category);

      const response = await fetch(`http://localhost:5000/api/jobs?${query.toString()}`);
      const result = await response.json();
      
      if (result.success) {
        setJobs(result.data);
      }
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [category]); 

  return (
    <main className="min-h-screen bg-[#F8F8FD] py-12">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-dark mb-4">Find your <span className="text-accent">dream job</span></h1>
          <p className="text-muted">Browse through the latest job openings from top startups.</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* LEFT: Sidebar Filters */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-lg font-bold text-dark mb-4 flex items-center gap-2">
                <Filter size={18} className="text-primary" /> Filter by Category
              </h3>
              <div className="space-y-3">
                {["", "Design", "Sales", "Marketing", "Finance", "Technology", "Engineering", "Business", "Human Resource"].map((cat) => (
                  <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="category"
                      checked={category === cat}
                      onChange={() => setCategory(cat)}
                      className="w-5 h-5 accent-primary cursor-pointer"
                    />
                    <span className={`text-base ${category === cat ? 'text-primary font-bold' : 'text-muted group-hover:text-dark'}`}>
                      {cat === "" ? "All Categories" : cat}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Search Bar & Job List */}
          <div className="lg:col-span-3">
            
            {/* Horizontal Search Bar */}
            <div className="bg-white p-2 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-2 mb-8">
              <div className="flex-1 flex items-center px-4 border-r border-gray-100">
                <Search size={20} className="text-muted mr-3" />
                <input 
                  type="text" 
                  placeholder="Job title or keyword" 
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full py-3 outline-none text-dark font-medium"
                />
              </div>
              <button 
                onClick={fetchJobs}
                className="bg-primary hover:bg-primary-hover text-white font-bold px-8 py-3 transition-colors"
              >
                Search
              </button>
            </div>

            {/* Job Count */}
            <div className="mb-6 flex justify-between items-center">
               <h2 className="text-2xl font-bold text-dark">
                All Jobs <span className="text-muted font-normal text-lg ml-2">({jobs.length} results)</span>
               </h2>
            </div>

            {/* Loading State */}
            {loading ? (
              <div className="flex flex-col items-center justify-center py-20 gap-4">
                <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                <p className="text-muted font-medium">Fetching jobs...</p>
              </div>
            ) : jobs.length > 0 ? (
              <div className="grid gap-4">
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
              <div className="bg-white p-12 text-center border border-dashed border-gray-300 rounded-lg">
                <Briefcase size={48} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-xl font-bold text-dark mb-2">No jobs found</h3>
                <p className="text-muted">Try adjusting your search or category filters.</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </main>
  );
};

export default FindJobsPage;