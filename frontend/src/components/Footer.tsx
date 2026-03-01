import Link from 'next/link';
import { Facebook, Instagram, Twitter, Linkedin, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#202430] text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Col 1: Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                QuickHire
              </span>
            </Link>
            <p className="text-[#9CA3AF] leading-relaxed max-w-[300px]">
              Great platform for the job seeker that passionate about startups. Find your dream job easier.
            </p>
          </div>

          {/* Col 2: About */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-8">About</h4>
            <ul className="space-y-4 text-[#9CA3AF]">
              <li><Link href="#" className="hover:text-white transition-colors">Companies</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Advice</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Col 3: Resources */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-8">Resources</h4>
            <ul className="space-y-4 text-[#9CA3AF]">
              <li><Link href="#" className="hover:text-white transition-colors">Help Docs</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Guide</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Updates</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="lg:col-span-4">
            <h4 className="text-lg font-bold mb-8">Get job notifications</h4>
            <p className="text-[#9CA3AF] mb-8 leading-relaxed">
              The latest job news, articles, sent to your inbox weekly.
            </p>
            <div className="flex w-full">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white px-4 py-3.5 text-dark outline-none w-full border-none placeholder:text-gray-400"
              />
              <button className="bg-primary hover:bg-primary-hover px-8 py-3.5 font-bold transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#9CA3AF] font-medium text-base">
            2021 @ QuickHire. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            <SocialIcon icon={<Facebook size={18} />} />
            <SocialIcon icon={<Instagram size={18} />} />
            <SocialIcon icon={<Globe size={18} />} />
            <SocialIcon icon={<Linkedin size={18} />} />
            <SocialIcon icon={<Twitter size={18} />} />
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
    <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-all text-white">
        {icon}
    </Link>
);

export default Footer;