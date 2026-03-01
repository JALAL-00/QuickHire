"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save } from "lucide-react";

const CreateJobPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    category: "Design",
    description: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/jobs`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (result.success) {
        alert("Job posted successfully!");
        router.push("/admin");
      }
    } catch (err) {
      alert("Error creating job");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F8F8FD] py-12">
      <div className="container mx-auto px-6 max-w-3xl">
        <button 
          onClick={() => router.back()}
          className="flex items-center gap-2 text-muted font-semibold mb-8 hover:text-primary transition-colors"
        >
          <ArrowLeft size={20} /> Back to Dashboard
        </button>

        <div className="bg-white p-8 border border-gray-100 shadow-sm">
          <h1 className="text-2xl font-bold text-dark mb-8">Post a New Job</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-dark mb-2">Job Title</label>
                <input 
                  required
                  type="text"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 outline-none focus:border-primary"
                  placeholder="e.g. Senior Product Designer"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-dark mb-2">Company Name</label>
                <input 
                  required
                  type="text"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 outline-none focus:border-primary"
                  placeholder="e.g. QuickHire Inc."
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-dark mb-2">Location</label>
                <input 
                  required
                  type="text"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 outline-none focus:border-primary"
                  placeholder="e.g. London, UK (or Remote)"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-dark mb-2">Category</label>
                <select 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 outline-none focus:border-primary cursor-pointer"
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                >
                  {["Design", "Sales", "Marketing", "Finance", "Technology", "Engineering", "Business", "Human Resource"].map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-dark mb-2">Job Description</label>
              <textarea 
                required
                rows={8}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 outline-none focus:border-primary resize-none"
                placeholder="Describe the role, requirements, and responsibilities..."
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
              ></textarea>
            </div>

            <button 
              disabled={loading}
              className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 flex items-center justify-center gap-2 transition-colors disabled:bg-gray-400"
            >
              {loading ? "Posting..." : <><Save size={20} /> Post Job Listing</>}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default CreateJobPage;