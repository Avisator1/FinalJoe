// Cayman.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// Import Cayman images - you'll need to add these to your assets
import cayman1 from "/images/cayman/1.JPG";
import cayman2 from "/images/cayman/2.JPG";
import cayman3 from "/images/cayman/3.JPG";
import cayman4 from "/images/cayman/4.JPG";
import cayman5 from "/images/cayman/5.JPG";
import cayman6 from "/images/cayman/6.JPG";
import cayman7 from "/images/cayman/7.JPG";
import cayman8 from "/images/cayman/8.JPG";
import cayman9 from "/images/cayman/9.JPG";
import cayman10 from "/images/cayman/10.JPG";
import cayman11 from "/images/cayman/11.JPG";
import cayman12 from "/images/cayman/12.JPG";
import cayman13 from "/images/cayman/13.JPG";
import cayman14 from "/images/cayman/14.JPG";
import Navbar from '../components/Navbar';

function Cayman() {
  const caymanImages = [
    { src: cayman1, width: 520, height: 350, rotation: -2, span: '' },
    { src: cayman2, width: 380, height: 570, rotation: 3, span: 'md:col-span-2' },
    { src: cayman3, width: 450, height: 300, rotation: 1, span: '' },
    { src: cayman4, width: 580, height: 390, rotation: -3, span: 'lg:col-span-2' },
    { src: cayman5, width: 340, height: 510, rotation: 2, span: '' },
    { src: cayman6, width: 490, height: 330, rotation: -1, span: '' },
    { src: cayman7, width: 410, height: 590, rotation: 4, span: 'md:col-span-2' },
    { src: cayman8, width: 530, height: 360, rotation: -2, span: '' },
    { src: cayman9, width: 370, height: 520, rotation: 1, span: '' },
    { src: cayman10, width: 460, height: 310, rotation: -3, span: 'lg:col-span-2' },
    { src: cayman11, width: 600, height: 400, rotation: 2, span: '' },
    { src: cayman12, width: 320, height: 480, rotation: -1, span: '' },
    { src: cayman13, width: 540, height: 370, rotation: 3, span: '' },
    { src: cayman14, width: 390, height: 540, rotation: -2, span: 'md:col-span-2' }
  ];

  return (
    <div>
        <Navbar />
        <section className="bg-white mx-auto max-w-[115rem] px-10 py-32 me">
      {/* Header */}
      <div className="mb-20">
        <div className="flex items-center gap-4 mb-4">
          <Link 
            to="/#locations" 
            className="text-xl tracking-wide text-gray-600 hover:text-black transition duration-300"
          >
            ← BACK TO LOCATIONS
          </Link>
          <p className="text-xl tracking-wide text-gray-800">CAYMAN ISLANDS COLLECTION</p>
        </div>
        <h2 className="text-[200px] font-[580] leading-none mb-8 text-black">
          Cayman Islands
        </h2>
        <p className="text-3xl text-black leading-snug max-w-4xl">
          Turquoise waters, white sand beaches, and vibrant marine life—capturing the tropical paradise 
          where crystal-clear Caribbean waters meet endless summer skies.
        </p>
      </div>

      {/* Technology Used */}
      <div className="mb-16">
        <p className="text-lg tracking-wide text-gray-700 mb-2 uppercase">
          Shot With
        </p>
        <ul className="text-2xl text-black font-[500] leading-relaxed space-y-2">
          <li>SONY ZV-E10 • Underwater Housing</li>
          <li>Adobe Lightroom Classic • Photoshop</li>
          <li>Winter 2023 • Caribbean Waters Expedition</li>
        </ul>
      </div>

      {/* Messy Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
        {caymanImages.map((image, index) => (
          <div
            key={index}
            className={`relative group cursor-pointer ${image.span} ${
              index % 4 === 0 ? 'mt-10' : 
              index % 4 === 1 ? 'mt-4' : 
              index % 4 === 2 ? 'mt-14' : 'mt-6'
            } ${index === 3 ? 'lg:col-start-1' : ''}`}
          >
            <img
              src={image.src}
              alt={`Cayman Islands ${index + 1}`}
              className={`w-full h-auto object-cover shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl ${
                index % 3 === 0 ? 'border-4 border-white' : 'border-2 border-white'
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

      {/* Additional Info */}
      <div className="mt-20 pt-10 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between gap-16">
          <div className="md:w-1/2">
            <p className="text-lg tracking-wide text-gray-700 mb-4 uppercase">
              About This Collection
            </p>
            <p className="text-2xl text-black leading-relaxed">
              From stunning underwater coral gardens to pristine Seven Mile Beach, this series 
              captures the essence of Caribbean beauty—vibrant colors, brilliant sunlight, and 
              the incredible biodiversity of Cayman's marine ecosystems.
            </p>
          </div>
          <div className="md:w-1/2">
            <p className="text-lg tracking-wide text-gray-700 mb-4 uppercase">
              Locations Featured
            </p>
            <div className="grid grid-cols-2 gap-4">
              <ul className="text-2xl text-black font-[500] space-y-2">
                <li>Seven Mile Beach</li>
                <li>Stingray City</li>
                <li>Rum Point</li>
                <li>Bloody Bay Wall</li>
                <li>George Town</li>
              </ul>
              <ul className="text-2xl text-black font-[500] space-y-2">
                <li>Crystal Caves</li>
                <li>Starfish Point</li>
                <li>Barkers Beach</li>
                <li>Queen Elizabeth II Botanic Park</li>
                <li>West Bay</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tropical Elements */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-gray-200">
          <div>
            <p className="text-lg tracking-wide text-gray-700 mb-2 uppercase">
              Water Conditions
            </p>
            <p className="text-2xl text-black font-[500]">
              Crystal Clear & Turquoise
            </p>
          </div>
          <div>
            <p className="text-lg tracking-wide text-gray-700 mb-2 uppercase">
              Focus
            </p>
            <p className="text-2xl text-black font-[500]">
              Marine & Beachscapes
            </p>
          </div>
          <div>
            <p className="text-lg tracking-wide text-gray-700 mb-2 uppercase">
              Season
            </p>
            <p className="text-2xl text-black font-[500]">
              Winter Escape
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-20 flex justify-between items-center pt-10 border-t border-gray-200">
        <Link 
          to="/#locations" 
          className="text-2xl text-black font-[500] hover:text-gray-700 transition duration-300"
        >
          ← All Locations
        </Link>
        <div className="flex gap-8">
          <Link 
            to="/scotland" 
            className="text-2xl text-black font-[500] hover:text-gray-700 transition duration-300"
          >
            ← Scotland
          </Link>
          <Link 
            to="/cars" 
            className="text-2xl text-black font-[500] hover:text-gray-700 transition duration-300"
          >
            Cars →
          </Link>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Cayman;