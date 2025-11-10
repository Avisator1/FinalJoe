// Ireland.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Ireland() {
  // Dynamically generate 42 Ireland images
  const irelandImages = Array.from({ length: 42 }, (_, i) => {
    const rotations = [-3, -2, -1, 1, 2, 3, 4];
    const heights = [300, 330, 350, 370, 400, 430, 450, 480, 510, 540, 570, 590];
    const spans = ['', 'md:col-span-2', 'lg:col-span-2', 'lg:row-span-2'];

    return {
      src: `https://photos.adiavi.com/images/ireland/${i + 1}.jpg`,
      height: heights[Math.floor(Math.random() * heights.length)],
      rotation: rotations[Math.floor(Math.random() * rotations.length)],
      span: spans[Math.floor(Math.random() * spans.length)],
    };
  });

  return (
    <div>
      <Navbar />
      <section className="bg-white me mx-auto max-w-[115rem] px-4 sm:px-6 md:px-10 py-16 md:py-32">
        {/* Header */}
        <div className="mb-12 mt-20 md:mb-20">
          <div className="flex items-center gap-3 md:gap-4 mb-4">
            <Link 
              to="/#locations" 
              className="text-lg md:text-xl tracking-wide text-gray-600 hover:text-black transition duration-300"
            >
              ← BACK TO LOCATIONS
            </Link>
            <p className="text-lg md:text-xl tracking-wide text-gray-800">IRELAND COLLECTION</p>
          </div>
          <h2 className="text-7xl sm:text-7xl md:text-[200px] font-[580] leading-none mb-6 md:mb-8 text-black">
            Ireland
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl text-black leading-snug max-w-4xl">
            Emerald landscapes, dramatic coastlines, and ancient castles—capturing the mystical beauty 
            and rich history of Ireland where every turn reveals another story waiting to be told.
          </p>
        </div>

        {/* Technology Used */}
        <div className="mb-12 md:mb-16">
          <p className="text-base md:text-lg tracking-wide text-gray-700 mb-2 uppercase">
            Shot With
          </p>
          <ul className="text-lg md:text-2xl text-black font-[500] leading-relaxed space-y-1 md:space-y-2">
            <li>SONY A7CR • 16-35mm Wide Lens</li>
            <li>Adobe Lightroom Classic • Capture One</li>
            <li>Summer 2023 • Coastal Ring Road Journey</li>
          </ul>
        </div>

        {/* Messy Image Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {irelandImages.map((image, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer ${image.span} ${
                index % 5 === 0 ? 'mt-10' : 
                index % 5 === 1 ? 'mt-4' : 
                index % 5 === 2 ? 'mt-14' : 
                index % 5 === 3 ? 'mt-6' : 'mt-8'
              } ${index % 7 === 0 ? 'lg:col-start-3' : ''}`}
            >
              <img
                src={image.src}
                alt={`Ireland ${index + 1}`}
                className={`w-full h-auto object-cover shadow-xl transition-all duration-500 ${
                  index % 4 === 0 ? 'border-4 border-white' : 'border-2 border-white'
                }`}
                style={{
                  transform: `rotate(${image.rotation}deg)`,
                  height: `${image.height}px`,
                  maxHeight: '650px'
                }}
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Mobile Grid */}
        <div className="md:hidden space-y-6">
          {irelandImages.map((image, index) => (
            <div key={index} className="relative group cursor-pointer">
              <img
                src={image.src}
                alt={`Ireland ${index + 1}`}
                className="w-full h-auto object-cover shadow-xl"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 md:mt-20 pt-8 md:pt-10 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-16">
            <div className="md:w-1/2">
              <p className="text-base md:text-lg tracking-wide text-gray-700 mb-3 md:mb-4 uppercase">
                About This Collection
              </p>
              <p className="text-lg md:text-2xl text-black leading-relaxed">
                From the wild Atlantic way to the serene lakes of Killarney, this series captures 
                Ireland's soul—the dramatic light, the ever-changing weather, and the deep sense of 
                history that permeates every landscape and ancient stone.
              </p>
            </div>
            <div className="md:w-1/2">
              <p className="text-base md:text-lg tracking-wide text-gray-700 mb-3 md:mb-4 uppercase">
                Locations Featured
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ul className="text-lg md:text-2xl text-black font-[500] space-y-1 md:space-y-2">
                  <li>Cliffs of Moher</li>
                  <li>Ring of Kerry</li>
                  <li>Dublin Streets</li>
                  <li>Giants Causeway</li>
                  <li>Killarney National Park</li>
                </ul>
                <ul className="text-lg md:text-2xl text-black font-[500] space-y-1 md:space-y-2">
                  <li>Dingle Peninsula</li>
                  <li>Rock of Cashel</li>
                  <li>Connemara</li>
                  <li>Skellig Michael</li>
                  <li>Wild Atlantic Way</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Cultural Elements */}
          <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 pt-8 border-t border-gray-200">
            <div>
              <p className="text-base md:text-lg tracking-wide text-gray-700 mb-2 uppercase">
                Light Conditions
              </p>
              <p className="text-lg md:text-2xl text-black font-[500]">Golden Hour & Soft Light</p>
            </div>
            <div>
              <p className="text-base md:text-lg tracking-wide text-gray-700 mb-2 uppercase">
                Cultural Focus
              </p>
              <p className="text-lg md:text-2xl text-black font-[500]">Landscape & Heritage</p>
            </div>
            <div>
              <p className="text-base md:text-lg tracking-wide text-gray-700 mb-2 uppercase">
                Color Palette
              </p>
              <p className="text-lg md:text-2xl text-black font-[500]">Emerald & Stone</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 md:mt-20 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 pt-8 md:pt-10 border-t border-gray-200">
          <Link 
            to="/#locations" 
            className="text-lg sm:text-xl md:text-2xl text-black font-[500] hover:text-gray-700 transition duration-300"
          >
            ← All Locations
          </Link>
          <div className="flex gap-4 sm:gap-8">
            <Link 
              to="/oregon" 
              className="text-lg sm:text-xl md:text-2xl text-black font-[500] hover:text-gray-700 transition duration-300"
            >
              ← Oregon
            </Link>
            <Link 
              to="/scotland" 
              className="text-lg sm:text-xl md:text-2xl text-black font-[500] hover:text-gray-700 transition duration-300"
            >
              Scotland →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Ireland;
