import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    "Home",
    "Trips",
    "Japan",
    "Ireland",
    "Cayman",
    "Scotland",
  ];

  return (
    <div className="w-full me">
      {/* Main Navbar - Completely hidden when menu is open */}
      {!menuOpen && (
        <nav className="fixed mix-blend-difference backdrop-blur-md transition-all duration-500 top-2 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] md:w-[calc(100%-4rem)] max-w-[112rem] rounded-lg px-8 z-[999999]">
          {/* Header */}
          <div className="flex items-center justify-between py-5 relative z-[60]">
            {/* Left - Logo */}
            <a href="/" className="text-2xl font-[500] tracking-wide text-white">
              Joe Mcdavid
            </a>

            {/* Center - Subtitle */}
            <div className="hidden md:block text-lg font-[500] tracking-wide text-white absolute left-1/2 -translate-x-1/2">
              Photographer
            </div>

            {/* Right - Links */}
            <div className="hidden md:flex items-center gap-8 font-[500] text-white text-lg tracking-wide">
              <a
                href="/contact"
                className="hover:bg-white hover:text-black px-2 py-2 rounded-xl transition duration-150"
              >
                Contact
              </a>
              <button
                className="text-white text-lg hover:underline"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle Menu"
              >
                Menu
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-white text-2xl z-[60]"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
            >
              <FiMenu size={28} />
            </button>
          </div>
        </nav>
      )}

      {/* Fullscreen Overlay Menu - With Animation */}
      {menuOpen && (
        <div className="fixed inset-0 z-[999998] flex flex-col">
          {/* Animated Radial Blur Background */}
          <div className="absolute inset-0 bg-[#161310] transition-all duration-700 ease-out animate-fadeIn">
            {/* Radial gradient overlay for enhanced effect */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/50 to-black/80 animate-radialFade"></div>
          </div>
          
          {/* Content with Slide-in Animation */}
          <div className="relative z-10 flex flex-col h-full animate-slideUp">
            {/* Top Bar - Higher z-index to ensure visibility */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-gray-800/50 relative z-20">
              <div className="text-2xl font-[500] text-white">Joe Mcdavid</div>
              <button
                className="text-white text-2xl hover:text-gray-300 transition-colors"
                onClick={() => setMenuOpen(false)}
                aria-label="Close Menu"
              >
                <FiX size={28} />
              </button>
            </div>

            {/* Menu Links with Staggered Animation - Truly Left Aligned */}
            <div className="flex-1 flex items-start justify-start me  relative z-10 pt-20">
              <div className="w-full px-8 me ">
                <div className="space-y-2 w-full">
                  {menuItems.map((item, index) => (
                    <div 
                      key={index} 
                      className="border-b border-gray-100/50 last:border-b-0 w-full animate-slideIn"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <a
                        href={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-[400] py-4 md:py-6 text-white hover:text-gray-300 transition-all duration-300 text-left hover:pl-4 w-full"
                        onClick={() => setMenuOpen(false)}
                      >
                        {item}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes radialFade {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideIn {
          from { transform: translateX(-30px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
        .animate-radialFade {
          animation: radialFade 0.8s ease-out forwards;
        }
        .animate-slideUp {
          animation: slideUp 0.7s ease-out forwards;
        }
        .animate-slideIn {
          animation: slideIn 0.5s ease-out forwards;
          opacity: 0;
          animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
