import React from "react";
import { ScreenFitText } from "./ScreenToText";
import { HashLink as Link } from "react-router-hash-link";

const Footer = () => {
  const menuItems = [
    { name: "Home", to: "/" },
    { name: "Trips", to: "/#trips" },
    { name: "Japan", to: "/japan" },
    { name: "Ireland", to: "/ireland" },
    { name: "Cayman", to: "/cayman" },
    { name: "Scotland", to: "/scotland" }
  ];

  return (
    <footer className="bg-[#ecebeb] me coolvetia-font text-black w-full relative z-10 mt-40">
      <div className="max-w-[115rem] mx-auto px-4">
        <div className="w-full flex justify-between items-start py-10 text-xs sm:text-sm font-medium uppercase tracking-wide">
          <div className="min-w-[150px]">
            <p className="mb-2 sm:mb-3">Joe McDavid</p>
            <p>Photographer</p>
          </div>

          <div className="flex justify-center flex-1 px-8 gap-8 sm:gap-16">
            {/* Photography-related links */}
  
          </div>

          <div className="min-w-[150px] text-right text-black">
            <div className="space-y-1">
              <Link 
                to="/" 
                smooth 
                className="cursor-pointer hover:opacity-80 transition block"
              >
                Home
              </Link>
              <Link 
                to="/#trips" 
                smooth 
                className="cursor-pointer hover:opacity-80 transition block"
              >
                Trips
              </Link>
              <Link 
                to="/#contact" 
                smooth 
                className="cursor-pointer hover:opacity-80 transition block"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* BIG TEXT */}
        <div className="py-4 sm:py-6 !text-white">
          <ScreenFitText>
            Joe McDavid
          </ScreenFitText>
        </div>

        {/* Bottom Row */}
        <div className="w-full py-6 sm:py-8 flex flex-col sm:flex-row text-black justify-between items-center gap-4 text-xs sm:text-sm font-medium uppercase text-black/80 border-t border-black">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            <p>
              THOUSANDS OF MEMORIES CAPTURED
            </p>
          </div>

          <p>© 2025 Joe McDavid</p>

          <div className="flex gap-4 sm:gap-6 text-black">
            <p className="cursor-pointer hover:opacity-80 transition">Terms</p>
            <p className="cursor-pointer hover:opacity-80 transition">Privacy</p>
          </div>

          <p className="cursor-pointer hover:opacity-80 text-black transition">joemcdavid</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;