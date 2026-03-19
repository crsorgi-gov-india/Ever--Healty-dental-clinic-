import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-white py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center overflow-x-auto hide-scrollbar pb-2 -mb-2 gap-8">
          {/* Logo */}
          <div className="flex items-center shrink-0">
            <a href="#home" className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold text-primary-700 tracking-tight">
                EVER-HEALTHY
              </span>
              <span className="text-[10px] sm:text-xs font-medium text-secondary-600 tracking-widest uppercase">
                Dental Care
              </span>
            </a>
          </div>

          {/* Call Now Button */}
          <div className="flex items-center">
            <a
              href="tel:+919877205554"
              className="flex items-center gap-2 bg-primary-600 text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-full font-medium hover:bg-primary-700 transition-colors shadow-sm hover:shadow-md whitespace-nowrap text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
