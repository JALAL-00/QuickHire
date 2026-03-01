"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Briefcase, MapPin, Calendar, ArrowLeft, Send, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Job } from "@/types/job";

const JobDetailsPage = () => {
  const { id } = useParams();
  const router = useRouter();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resumeLink: "",
    coverNote: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/jobs/${id}`);
        const result = await res.json();
        if (result.success) {
          setJob(result.data);
        }
      } catch (err) {
        console.error("Error fetching job:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchJob();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/applications`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jobId: id,
          ...formData,
        }),
      });

      const result = await res.json();

      if (result.success) {
        setSuccess(true);
        setFormData({ name: "", email: "", resumeLink: "", coverNote: "" });
      } else {
        setError(result.message || "Failed to submit application.");
      }
    } catch (err) {
      setError("Server error. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  if (!job) return <div className="text-center py-20 text-2xl font-bold">Job not found</div>;

  return (
    <main className="min-h-screen bg-[#F8F8FD] py-12">
      <div className="container mx-auto px-6 max-w-5xl">
        
        <button 
          onClick={() => router.back()}
          className="flex items-center gap-2 text-muted font-semibold mb-8 hover:text-primary transition-colors"
        >
          <ArrowLeft size={20} /> Back to jobs
        </button>

        <div className="grid lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 bg-gray-50 border border-gray-100 flex items-center justify-center p-4">
                  <Briefcase className="text-primary w-full h-full" strokeWidth={1.5} />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-dark mb-2">{job.title}</h1>
                  <div className="flex items-center gap-4 text-muted font-medium">
                    <span>{job.company}</span>
                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                    <span className="flex items-center gap-1"><MapPin size={16} /> {job.location}</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-8">
                <h3 className="text-xl font-bold text-dark mb-4">Description</h3>
                <p className="text-muted leading-relaxed whitespace-pre-line">
                  {job.description}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-8 border border-gray-100 shadow-sm sticky top-8">
              <h3 className="text-xl font-bold text-dark mb-6">Apply Now</h3>
              
              {success ? (
                <div className="text-center py-8">
                  <CheckCircle className="text-green-500 w-16 h-16 mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-dark mb-2">Application Sent!</h4>
                  <p className="text-muted text-sm mb-6">Your application for {job.title} has been submitted successfully.</p>
                  <button 
                    onClick={() => setSuccess(false)}
                    className="text-primary font-bold hover:underline"
                  >
                    Apply for another role
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-dark mb-1">Full Name</label>
                    <input 
                      required
                      type="text"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 outline-none focus:border-primary"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-dark mb-1">Email Address</label>
                    <input 
                      required
                      type="email"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 outline-none focus:border-primary"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-dark mb-1">Resume Link (URL)</label>
                    <input 
                      required
                      type="url"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 outline-none focus:border-primary"
                      placeholder="https://drive.google.com/..."
                      value={formData.resumeLink}
                      onChange={(e) => setFormData({...formData, resumeLink: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-dark mb-1">Cover Note</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 outline-none focus:border-primary resize-none"
                      placeholder="Tell us why you're a good fit..."
                      value={formData.coverNote}
                      onChange={(e) => setFormData({...formData, coverNote: e.target.value})}
                    ></textarea>
                  </div>

                  {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

                  <button 
                    disabled={submitting}
                    className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 flex items-center justify-center gap-2 transition-colors disabled:bg-gray-400"
                  >
                    {submitting ? "Submitting..." : (
                      <>Submit Application <Send size={18} /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default JobDetailsPage;