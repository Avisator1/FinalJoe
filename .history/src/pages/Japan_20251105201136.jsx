// Japan.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Japan() {
  const japanImages = [
    { src: "https://photos.adiavi.com/images/japan/Set%201-008.jpg", width: 500, height: 350, rotation: -2 },
    { src: "https://photos.adiavi.com/images/japan/Set%201-009.jpg", width: 400, height: 600, rotation: 1 },
    { src: "https://photos.adiavi.com/images/japan/Set%201-010.jpg", width: 600, height: 400, rotation: 3 },
    { src: "https://photos.adiavi.com/images/japan/Set%201-011.jpg", width: 350, height: 500, rotation: -1 },
    { src: "https://photos.adiavi.com/images/japan/Set%201-012.jpg", width: 550, height: 380, rotation: 2 },
    { src: "https://photos.adiavi.com/images/japan/Set%201-013.jpg", width: 450, height: 300, rotation: -3 },
    { src: "https://photos.adiavi.com/images/japan/Set%201-014.jpg", width: 380, height: 520, rotation: 1 },
    { src: "https://photos.adiavi.com/images/japan/Set%201-015.jpg", width: 520, height: 350, rotation: -2 },
    { src: "https://photos.adiavi.com/images/japan/Set%201-016.jpg", width: 420, height: 280, rotation: 4 },
    { src: "https://photos.adiavi.com/images/japan/Set%201-017.jpg", width: 580, height: 400, rotation: -1 },
    { src: "https://photos.adiavi.com/images/japan/Set%201-019.jpg", width: 480, height: 320, rotation: -3 },
    { src: "https://photos.adiavi.com/images/japan/Set%201-020.jpg", width: 530, height: 370, rotation: 1 },
    { src: "https://photos.adiavi.com/images/japan/Set%201-021.jpg", width: 370, height: 530, rotation: -2 },
    { src: "https://photos.adiavi.com/images/japan/Set%201-022.jpg", width: 440, height: 290, rotation: 3 },
    { src: "https://photos.adiavi.com/images/japan/Set%201-023.jpg", width: 290, height: 440, rotation: -1 },
    { src: "https://photos.adiavi.com/images/japan/Set%201-024.jpg", width: 510, height: 340, rotation: 2 },
    { src: "https://photos.adiavi.com/images/japan/Set%201-025.jpg", width: 340, height: 510, rotation: -3 },
    { src: "https://photos.adiavi.com/images/japan/Set%201-026.jpg", width: 460, height: 310, rotation: 1 },
    { src: "https://photos.adiavi.com/images/japan/Set%201-027.jpg", width: 310, height: 460, rotation: -2 },
    { src: "https://photos.adiavi.com/images/japan/Set%201-028.jpg", width: 490, height: 330, rotation: 3 },
    { src: "https://photos.adiavi.com/images/japan/Set%201-029.jpg", width: 330, height: 490, rotation: -1 },
    { src: "https://photos.adiavi.com/images/japan/Set%201-030.jpg", width: 470, height: 315, rotation: 2 },
  ];

  return (
    <div>
      <Navbar />
      <section className="bg-white me mx-auto max-w-[115rem] px-4 sm:px-6 md:px-10 py-16 md:py-32">
        {/* Header */}
        <div className="mb-12 md:mb-20">
          <div className="flex items-center gap-3 md:gap-4 mb-4">
            <Link 
              to="/#locations" 
              className="text-lg md:text-xl tracking-wide text-gray-600 hover:text-black transition duration-300"
            >
              ← BACK TO LOCATIONS
            </Link>
            <p className="text-lg md:text-xl tracking-wide text-gray-800">JAPAN COLLECTION</p>
          </div>
          <h2 className="text-5xl sm:text-7xl md:text-[200px] font-[580] leading-none mb-6 md:mb-8 text-black">
            Japan
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl text-black leading-snug max-w-4xl">
            A visual journey through the Land of the Rising Sun—from the neon-lit streets of Tokyo 
            to the serene temples of Kyoto, capturing the perfect blend of tradition and modernity.
          </p>
        </div>

        {/* Technology Used */}
        <div className="mb-12 md:mb-16">
          <p className="text-base md:text-lg tracking-wide text-gray-700 mb-2 uppercase">
            Shot With
          </p>
          <ul className="text-lg md:text-2xl text-black font-[500] leading-relaxed space-y-1 md:space-y-2">
            <li>SONY ZV-E10 • 35mm Prime Lens</li>
            <li>Adobe Lightroom Classic</li>
            <li>Spring 2023 • 3 Weeks Across Japan</li>
          </ul>
        </div>

        {/* Messy Image Grid - Desktop version */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {japanImages.map((image, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer ${
                index % 3 === 1 ? 'mt-12' : index % 3 === 2 ? 'mt-6' : ''
              } ${index % 4 === 0 ? 'md:col-span-2' : ''} ${
                index % 5 === 0 ? 'lg:col-span-1' : ''
              }`}
            >
              <img
                src={image.src}
                alt={`Japan ${index + 1}`}
                className="w-full h-auto object-cover shadow-lg transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl"
                style={{
                  transform: `rotate(${image.rotation}deg)`,
                  height: `${image.height}px`
                }}
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Mobile Image Grid - Simple stacked layout */}
        <div className="md:hidden space-y-6">
          {japanImages.map((image, index) => (
            <div key={index} className="relative group cursor-pointer">
              <img
                src={image.src}
                alt={`Japan ${index + 1}`}
                className="w-full h-auto object-cover shadow-lg"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 md:mt-20 pt-8 md:pt-10 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12">
            <div className="md:w-1/2">
              <p className="text-base md:text-lg tracking-wide text-gray-700 mb-3 md:mb-4 uppercase">
                About This Collection
              </p>
              <p className="text-lg md:text-2xl text-black leading-relaxed">
                This series captures the essence of Japanese culture—the quiet dignity of its ancient 
                traditions meeting the vibrant energy of its modern cities. Each photograph tells a story 
                of contrast and harmony.
              </p>
            </div>
            <div className="md:w-1/2">
              <p className="text-base md:text-lg tracking-wide text-gray-700 mb-3 md:mb-4 uppercase">
                Locations Featured
              </p>
              <ul className="text-lg md:text-2xl text-black font-[500] space-y-1 md:space-y-2">
                <li>Tokyo • Shibuya Crossing</li>
                <li>Kyoto • Fushimi Inari Shrine</li>
                <li>Osaka • Dotonbori District</li>
                <li>Nara • Todai-ji Temple</li>
                <li>Hakone • Mount Fuji Views</li>
              </ul>
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
          <Link 
            to="/#locations" 
            className="text-lg sm:text-xl md:text-2xl text-black font-[500] hover:text-gray-700 transition duration-300"
          >
            View Photography Work →
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Japan;