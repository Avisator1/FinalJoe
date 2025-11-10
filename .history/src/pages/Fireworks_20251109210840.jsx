// Fireworks.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Fireworks() {
  // Dynamically generate all 20 images
  const fireworksImages = Array.from({ length: 20 }, (_, i) => ({
    src: `https://photos.adiavi.com/images/fireworks/${i + 1}.jpg`,
    rotation: Math.floor(Math.random() * 7) - 3, // -3 to +3 degrees
    span:
      Math.random() < 0.3
        ? 'md:col-span-2'
        : Math.random() < 0.15
        ? 'lg:col-span-2'
        : '',
    height: Math.floor(Math.random() * 250) + 300, // 300–550px
  }));

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
            <p className="text-lg md:text-xl tracking-wide text-gray-800">
              FIREWORKS COLLECTION
            </p>
          </div>
          <h2 className="text-7xl sm:text-7xl md:text-[200px] font-[580] leading-none mb-6 md:mb-8 text-black">
            Fireworks
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl text-black leading-snug max-w-4xl">
            Explosive colors, dramatic skies, and fleeting moments of brilliance—capturing the 
            spectacular artistry of pyrotechnics where light paints the night with temporary magic.
          </p>
        </div>

        {/* Technology Used */}
        <div className="mb-12 md:mb-16">
          <p className="text-base md:text-lg tracking-wide text-gray-700 mb-2 uppercase">
            Shot With
          </p>
          <ul className="text-lg md:text-2xl text-black font-[500] leading-relaxed space-y-1 md:space-y-2">
            <li>SONY A7CR • Tripod & Long Exposure</li>
            <li>Adobe Lightroom Classic • Photoshop</li>
            <li>Various Celebrations • 2022-2023 Night Sky Series</li>
          </ul>
        </div>

        {/* Image Grid - Desktop */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {fireworksImages.map((image, index) => (
            <div
              key={index}
              className={`relative ${image.span} ${
                index % 4 === 0 ? 'mt-10' :
                index % 4 === 1 ? 'mt-4' :
                index % 4 === 2 ? 'mt-14' : 'mt-6'
              } ${index === 3 ? 'lg:col-start-1' : ''}`}
            >
              <img
                src={image.src}
                alt={`Fireworks ${index + 1}`}
                className={`w-full h-auto object-cover shadow-xl ${
                  index % 3 === 0 ? 'border-4 border-white' : 'border-2 border-white'
                }`}
                style={{
                  transform: `rotate(${image.rotation}deg)`,
                  height: `${image.height}px`,
                  maxHeight: '650px'
                }}
              />
            </div>
          ))}
        </div>

        {/* Image Grid - Mobile */}
        <div className="md:hidden space-y-6">
          {fireworksImages.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={image.src}
                alt={`Fireworks ${index + 1}`}
                className="w-full h-auto object-cover shadow-xl"
              />
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
                This pyrotechnic series captures the breathtaking beauty of fireworks displays—from 
                intimate local celebrations to grand professional shows. Each long exposure reveals 
                the intricate patterns and vibrant colors that flash across the night sky.
              </p>
            </div>
            <div className="md:w-1/2">
              <p className="text-base md:text-lg tracking-wide text-gray-700 mb-3 md:mb-4 uppercase">
                Events & Displays
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ul className="text-lg md:text-2xl text-black font-[500] space-y-1 md:space-y-2">
                  <li>Fourth of July</li>
                  <li>New Year's Eve</li>
                  <li>Music Festivals</li>
                  <li>Sporting Events</li>
                  <li>Local Celebrations</li>
                </ul>
                <ul className="text-lg md:text-2xl text-black font-[500] space-y-1 md:space-y-2">
                  <li>Professional Displays</li>
                  <li>Cultural Festivals</li>
                  <li>Wedding Finales</li>
                  <li>Theme Park Shows</li>
                  <li>City Celebrations</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Details */}
          <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 pt-8 border-t border-gray-200">
            <div>
              <p className="text-base md:text-lg tracking-wide text-gray-700 mb-2 uppercase">
                Exposure Technique
              </p>
              <p className="text-lg md:text-2xl text-black font-[500]">
                Long Exposure & Tripod
              </p>
            </div>
            <div>
              <p className="text-base md:text-lg tracking-wide text-gray-700 mb-2 uppercase">
                Timing
              </p>
              <p className="text-lg md:text-2xl text-black font-[500]">
                Night & Low Light
              </p>
            </div>
            <div>
              <p className="text-base md:text-lg tracking-wide text-gray-700 mb-2 uppercase">
                Focus
              </p>
              <p className="text-lg md:text-2xl text-black font-[500]">
                Color Trails & Patterns
              </p>
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
              to="/flowers" 
              className="text-lg sm:text-xl md:text-2xl text-black font-[500] hover:text-gray-700 transition duration-300"
            >
              ← Flowers
            </Link>
            <Link 
              to="/club" 
              className="text-lg sm:text-xl md:text-2xl text-black font-[500] hover:text-gray-700 transition duration-300"
            >
              Club →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Fireworks;
