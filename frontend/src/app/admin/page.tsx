"use client";

import { useState, useEffect } from "react";
import { Trash2, Plus, Briefcase, ExternalLink, Lock } from "lucide-react";
import Link from "next/link";
import { Job } from "@/types/job";

const AdminDashboard = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [password, setPassword] = useState("");

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

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin123") { // Simple hardcoded password for demo
      setIsAuthorized(true);
      localStorage.setItem("admin_auth", "true");
      fetchJobs();
    } else {
      alert("Invalid Admin Password");
    }
  };

  const deleteJob = async (id: string) => {
    if (!window.confirm("Are you sure?")) return;
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/jobs/${id}`, { method: "DELETE" });
    if (res.ok) setJobs(jobs.filter(job => job._id !== id));
  };

  useEffect(() => {
    const auth = localStorage.getItem("admin_auth");
    if (auth === "true") {
      setIsAuthorized(true);
      fetchJobs();
    }
  }, []);

  // --- LOGIN UI ---
  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-[#F8F8FD] flex items-center justify-center p-6">
        <div className="bg-white p-8 border border-gray-100 shadow-xl max-w-md w-full text-center">
          <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock size={32} />
          </div>
          <h1 className="text-2xl font-bold text-dark mb-2">Admin Access</h1>
          <p className="text-muted mb-8">Please enter the admin password to manage job listings.</p>
          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="password" 
              placeholder="Enter Password"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 outline-none focus:border-primary text-center font-bold tracking-widest"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
            />
            <button className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-3 transition-all">
              Login to Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  // --- DASHBOARD UI ---
  return (
    <main className="min-h-screen bg-[#F8F8FD] py-12">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold text-dark">Admin Dashboard</h1>
            <button 
              onClick={() => { localStorage.removeItem("admin_auth"); setIsAuthorized(false); }}
              className="text-xs text-red-500 font-bold hover:underline"
            >
              Logout
            </button>
          </div>
          <Link href="/admin/create" className="bg-primary hover:bg-primary-hover text-white font-bold px-6 py-3 flex items-center gap-2">
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
                  <th className="px-6 py-4 text-sm font-bold text-dark uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {jobs.map((job) => (
                  <tr key={job._id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-bold text-dark">{job.title}</div>
                      <div className="text-xs text-muted">{job.company}</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-muted">{job.category}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-3">
                        <Link href={`/jobs/${job._id}`} target="_blank" className="p-2 text-muted hover:text-primary"><ExternalLink size={18} /></Link>
                        <button onClick={() => deleteJob(job._id)} className="p-2 text-muted hover:text-red-500"><Trash2 size={18} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
};

export default AdminDashboard;