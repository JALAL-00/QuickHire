import Link from 'next/link';
import Image from 'next/image';

const CallToAction = () => {
  return (
    <section className="pt-8 md:pt-10 pb-8 md:pb-10 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-primary rounded-none md:rounded-lg overflow-hidden relative flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-12 md:py-0 min-h-[400px]">
          
          {/* Left Content */}
          <div className="flex-1 z-10 text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Start posting <br />
              jobs today
            </h2>
            <p className="text-white/90 text-lg font-medium mb-8">
              Start posting jobs for only $10.
            </p>
            <Link 
              href="/admin" 
              className="inline-block bg-white text-primary font-bold text-lg px-8 py-3.5 hover:bg-gray-100 transition-colors shadow-lg"
            >
              Sign Up For Free
            </Link>
          </div>

          {/* Right Image */}
          <div className="flex-1 relative w-full h-[300px] md:h-[450px] mt-8 md:mt-0">
            {/* The image is positioned to stick to the bottom right */}
            <div className="absolute right-0 bottom-0 w-full h-full md:w-[120%] md:h-[110%] md:-right-10 md:-bottom-10">
              <Image
                src="/assets/dashboard.png"
                alt="Dashboard Preview"
                fill
                className="object-contain object-bottom md:object-right-bottom"
              />
            </div>
          </div>

          {/* Background Decorative Element (Optional Circles) */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>

        </div>
      </div>
    </section>
  );
};

export default CallToAction;