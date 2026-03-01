"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { LogOut, Search } from "lucide-react";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname(); 
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("admin_auth");
    setIsLoggedIn(auth === "true");
  }, [pathname]);

  const handleLogout = () => {
    localStorage.removeItem("admin_auth");
    setIsLoggedIn(false);
    router.push("/");
  };

  return (
    <nav className="w-full bg-light py-6 border-b border-gray-100">
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Left: Logo & Links */}
        <div className="flex items-center gap-12">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            <span className="text-xl font-bold text-dark tracking-tight">
              QuickHire
            </span>
          </Link>

          {/* NAV LINKS (Desktop) */}
          <div className="hidden md:flex items-center gap-8 text-muted font-medium">
            <Link href="/jobs" className={`hover:text-primary transition-colors ${pathname === '/jobs' ? 'text-primary' : 'text-dark'}`}>
              Find Jobs
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Browse Companies
            </Link>
          </div>
        </div>

        {/* Right: Auth Buttons or Logout */}
        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <>
              <Link 
                href="/admin" 
                className={`hidden md:block font-bold hover:underline ${pathname === '/admin' ? 'text-primary' : 'text-muted'}`}
              >
                Dashboard
              </Link>
              <button 
                onClick={handleLogout}
                className="flex items-center gap-2 px-6 py-3 border-2 border-red-500 text-red-500 font-bold hover:bg-red-500 hover:text-white transition-all"
              >
                <LogOut size={18} /> Logout
              </button>
            </>
          ) : (
            <>
              <Link 
                href="/admin" 
                className="hidden md:block text-primary font-bold hover:underline"
              >
                Login
              </Link>
              <Link 
                href="/" 
                className="px-6 py-3 bg-primary text-white font-bold rounded-none hover:bg-primary-hover transition-all"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;