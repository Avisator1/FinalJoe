import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Cars() {
  const carsImages = Array.from({ length: 60 }, (_, i) => {
    const index = i + 1;
    const rotations = [-3, 2, 1, -2, 3, -1];
    const spans = ['', 'md:col-span-2', 'lg:col-span-2', '', '', ''];
    const widths = [580, 420, 520, 380, 460, 600, 340, 490, 530, 410, 470, 550, 390, 440, 500];
    const heights = [390, 620, 350, 540, 310, 400, 510, 330, 360, 580, 320, 670, 520, 300, 340];

    return {
      src: `https://photos.adiavi.com/images/cars/${index}.jpg`,
      width: widths[i % widths.length],
      height: heights[i % heights.length],
      rotation: rotations[i % rotations.length],
      span: spans[i % spans.length],
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
            <p className="text-lg md:text-xl tracking-wide text-gray-800">CARS COLLECTION</p>
          </div>
          <h2 className="text-7xl sm:text-7xl md:text-[200px] font-[580] leading-none mb-6 md:mb-8 text-black">
            Cars
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl text-black leading-snug max-w-4xl">
            Classic curves, modern engineering, and automotive artistry—capturing the soul of 
            machines where design meets performance and every detail tells a story of innovation.
          </p>
        </div>

        {/* Technology Used */}
        <div className="mb-12 md:mb-16">
          <p className="text-base md:text-lg tracking-wide text-gray-700 mb-2 uppercase">
            Shot With
          </p>
          <ul className="text-lg md:text-2xl text-black font-[500] leading-relaxed space-y-1 md:space-y-2">
            <li>SONY A7CR • 50mm & 85mm Prime Lenses</li>
            <li>Adobe Lightroom Classic • Photoshop</li>
            <li>Various Locations • 2022–2023 Automotive Series</li>
          </ul>
        </div>

        {/* Messy Image Grid - Desktop */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {carsImages.map((image, index) => (
            <div
              key={index}
              className={`relative ${image.span} ${
                index % 5 === 0 ? 'mt-12' : 
                index % 5 === 1 ? 'mt-4' : 
                index % 5 === 2 ? 'mt-16' : 
                index % 5 === 3 ? 'mt-8' : 'mt-6'
              } ${index === 4 ? 'lg:col-start-2' : ''}`}
            >
              <img
                src={image.src}
                alt={`Cars ${index + 1}`}
                className={`w-full h-auto object-cover shadow-xl ${
                  index % 4 === 0 ? 'border-4 border-white' : 'border-2 border-white'
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

        {/* Mobile Layout */}
        <div className="md:hidden space-y-6">
          {carsImages.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={image.src}
                alt={`Cars ${index + 1}`}
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
                This automotive series celebrates the artistry of automobile design—from vintage 
                classics to modern supercars. Each photograph focuses on the interplay of light 
                and metal, capturing the personality and engineering excellence of these machines.
              </p>
            </div>
            <div className="md:w-1/2">
              <p className="text-base md:text-lg tracking-wide text-gray-700 mb-3 md:mb-4 uppercase">
                Automotive Focus
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ul className="text-lg md:text-2xl text-black font-[500] space-y-1 md:space-y-2">
                  <li>Classic American</li>
                  <li>European Sports</li>
                  <li>Japanese Imports</li>
                  <li>Supercars</li>
                  <li>Muscle Cars</li>
                </ul>
                <ul className="text-lg md:text-2xl text-black font-[500] space-y-1 md:space-y-2">
                  <li>Detail Shots</li>
                  <li>Rolling Shots</li>
                  <li>Show Events</li>
                  <li>Private Collections</li>
                  <li>Track Days</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Automotive Elements */}
          <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 pt-8 border-t border-gray-200">
            <div>
              <p className="text-base md:text-lg tracking-wide text-gray-700 mb-2 uppercase">Photography Style</p>
              <p className="text-lg md:text-2xl text-black font-[500]">Detail & Atmosphere</p>
            </div>
            <div>
              <p className="text-base md:text-lg tracking-wide text-gray-700 mb-2 uppercase">Lighting</p>
              <p className="text-lg md:text-2xl text-black font-[500]">Golden Hour & Studio</p>
            </div>
            <div>
              <p className="text-base md:text-lg tracking-wide text-gray-700 mb-2 uppercase">Focus</p>
              <p className="text-lg md:text-2xl text-black font-[500]">Design & Emotion</p>
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
              to="/cayman" 
              className="text-lg sm:text-xl md:text-2xl text-black font-[500] hover:text-gray-700 transition duration-300"
            >
              ← Cayman
            </Link>
            <Link 
              to="/flowers" 
              className="text-lg sm:text-xl md:text-2xl text-black font-[500] hover:text-gray-700 transition duration-300"
            >
              Flowers →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cars;
