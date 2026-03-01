"use client";

import { useState, useEffect } from "react";
import { Trash2, Plus, Briefcase, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Job } from "@/types/job";

const AdminDashboard = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchJobs = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/jobs`);
      const result = await res.json();
      if (result.success) setJobs(result.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const deleteJob = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this job?")) return;
    
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/jobs/${id}`, {
        method: "DELETE",
      });
      const result = await res.json();
      if (result.success) {
        setJobs(jobs.filter(job => job._id !== id));
        alert("Job deleted successfully");
      }
    } catch (err) {
      alert("Error deleting job");
    }
  };

  useEffect(() => { fetchJobs(); }, []);

  return (
    <main className="min-h-screen bg-[#F8F8FD] py-12">
      <div className="container mx-auto px-6 max-w-5xl">
        
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold text-dark">Admin Dashboard</h1>
            <p className="text-muted">Manage your active job listings</p>
          </div>
          <Link 
            href="/admin/create" 
            className="bg-primary hover:bg-primary-hover text-white font-bold px-6 py-3 flex items-center gap-2 transition-all shadow-lg shadow-indigo-100"
          >
            <Plus size={20} /> Post a New Job
          </Link>
        </div>

        {loading ? (
          <div className="text-center py-20 italic">Loading jobs...</div>
        ) : (
          <div className="bg-white border border-gray-100 shadow-sm overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="px-6 py-4 text-sm font-bold text-dark uppercase tracking-wider">Job Title</th>
                  <th className="px-6 py-4 text-sm font-bold text-dark uppercase tracking-wider">Category</th>
                  <th className="px-6 py-4 text-sm font-bold text-dark uppercase tracking-wider">Posted Date</th>
                  <th className="px-6 py-4 text-sm font-bold text-dark uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {jobs.map((job) => (
                  <tr key={job._id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-bold text-dark">{job.title}</div>
                      <div className="text-xs text-muted">{job.company} • {job.location}</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-muted">{job.category}</td>
                    <td className="px-6 py-4 text-sm text-muted">
                      {new Date(job.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-3">
                        <Link 
                          href={`/jobs/${job._id}`} 
                          target="_blank"
                          className="p-2 text-muted hover:text-primary transition-colors"
                          title="View Live"
                        >
                          <ExternalLink size={18} />
                        </Link>
                        <button 
                          onClick={() => deleteJob(job._id)}
                          className="p-2 text-muted hover:text-red-500 transition-colors"
                          title="Delete Job"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {jobs.length === 0 && (
              <div className="p-20 text-center text-muted">No jobs posted yet.</div>
            )}
          </div>
        )}
      </div>
    </main>
  );
};

export default AdminDashboard;