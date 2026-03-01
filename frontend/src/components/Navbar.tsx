import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full bg-light py-6">
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
            <Link href="/" className="text-dark hover:text-primary transition-colors">
              Find Jobs
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Browse Companies
            </Link>
          </div>
        </div>

        {/* Right: Auth Buttons */}
        <div className="flex items-center gap-4">
          <Link 
            href="/login" 
            className="hidden md:block text-primary font-bold hover:underline"
          >
            Login
          </Link>
          <Link 
            href="/signup" 
            className="px-6 py-3 bg-primary text-white font-bold rounded-none hover:bg-primary-hover transition-all"
          >
            Sign Up
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;