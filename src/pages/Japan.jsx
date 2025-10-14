// Japan.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Import Japan images - you'll need to add these to your assets
import japan1 from "/images/japan/1.jpg";
import japan2 from "/images/japan/2.jpg";
import japan3 from "/images/japan/3.jpg";
import japan4 from "/images/japan/4.jpg";
import japan5 from "/images/japan/5.jpg";
import japan6 from "/images/japan/6.jpg";
import japan7 from "/images/japan/7.jpg";
import japan8 from "/images/japan/8.jpg";
import japan9 from "/images/japan/9.jpg";
import japan10 from "/images/japan/10.jpg";
import japan11 from "/images/japan/11.jpg";
import japan12 from "/images/japan/12.jpg";
import japan13 from "/images/japan/13.jpg";
import japan14 from "/images/japan/14.jpg";
import japan15 from "/images/japan/15.jpg";
import japan16 from "/images/japan/16.jpg";
import japan17 from "/images/japan/17.jpg";
import japan18 from "/images/japan/18.jpg";
import japan19 from "/images/japan/19.jpg";
import japan20 from "/images/japan/20.jpg";
import japan21 from "/images/japan/21.jpg";
import japan22 from "/images/japan/22.jpg";
import japan23 from "/images/japan/23.jpg";
import japan24 from "/images/japan/24.jpg";
import Navbar from '../components/Navbar';

function Japan() {
  const japanImages = [
    { src: japan1, width: 500, height: 350, rotation: -2 },
    { src: japan2, width: 400, height: 600, rotation: 1 },
    { src: japan3, width: 600, height: 400, rotation: 3 },
    { src: japan4, width: 350, height: 500, rotation: -1 },
    { src: japan5, width: 550, height: 380, rotation: 2 },
    { src: japan6, width: 450, height: 300, rotation: -3 },
    { src: japan7, width: 380, height: 520, rotation: 1 },
    { src: japan8, width: 520, height: 350, rotation: -2 },
    { src: japan9, width: 420, height: 280, rotation: 4 },
    { src: japan10, width: 580, height: 400, rotation: -1 },
    { src: japan11, width: 320, height: 480, rotation: 2 },
    { src: japan12, width: 480, height: 320, rotation: -3 },
    { src: japan13, width: 530, height: 370, rotation: 1 },
    { src: japan14, width: 370, height: 530, rotation: -2 },
    { src: japan15, width: 440, height: 290, rotation: 3 },
    { src: japan16, width: 290, height: 440, rotation: -1 },
    { src: japan17, width: 510, height: 340, rotation: 2 },
    { src: japan18, width: 340, height: 510, rotation: -3 },
    { src: japan19, width: 460, height: 310, rotation: 1 },
    { src: japan20, width: 310, height: 460, rotation: -2 },
    { src: japan21, width: 490, height: 330, rotation: 3 },
    { src: japan22, width: 330, height: 490, rotation: -1 },
    { src: japan23, width: 470, height: 315, rotation: 2 },
    { src: japan24, width: 315, height: 470, rotation: -3 }
  ];

  return (
    <div>
        <Navbar />
        <section className="bg-white mx-auto me max-w-[115rem] px-10 py-32">
      {/* Header */}
      <div className="mb-20">
        <div className="flex items-center gap-4 mb-4">
          <Link 
            to="/#locations" 
            className="text-xl tracking-wide text-gray-600 hover:text-black transition duration-300"
          >
            ← BACK TO LOCATIONS
          </Link>
          <p className="text-xl tracking-wide text-gray-800">JAPAN COLLECTION</p>
        </div>
        <h2 className="text-[200px] font-[580] leading-none mb-8 text-black">
          Japan
        </h2>
        <p className="text-3xl text-black leading-snug max-w-4xl">
          A visual journey through the Land of the Rising Sun—from the neon-lit streets of Tokyo 
          to the serene temples of Kyoto, capturing the perfect blend of tradition and modernity.
        </p>
      </div>

      {/* Technology Used */}
      <div className="mb-16">
        <p className="text-lg tracking-wide text-gray-700 mb-2 uppercase">
          Shot With
        </p>
        <ul className="text-2xl text-black font-[500] leading-relaxed space-y-2">
          <li>SONY ZV-E10 • 35mm Prime Lens</li>
          <li>Adobe Lightroom Classic</li>
          <li>Spring 2023 • 3 Weeks Across Japan</li>
        </ul>
      </div>

      {/* Messy Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
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
              className={`w-full h-auto object-cover shadow-lg grayscale-0 hover:grayscale-0-0 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl`}
              style={{
                transform: `rotate(${image.rotation}deg)`,
                height: `${image.height}px`
              }}
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          </div>
        ))}
      </div>

      {/* Additional Info */}
      <div className="mt-20 pt-10 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div className="md:w-1/2">
            <p className="text-lg tracking-wide text-gray-700 mb-4 uppercase">
              About This Collection
            </p>
            <p className="text-2xl text-black leading-relaxed">
              This series captures the essence of Japanese culture—the quiet dignity of its ancient 
              traditions meeting the vibrant energy of its modern cities. Each photograph tells a story 
              of contrast and harmony.
            </p>
          </div>
          <div className="md:w-1/2">
            <p className="text-lg tracking-wide text-gray-700 mb-4 uppercase">
              Locations Featured
            </p>
            <ul className="text-2xl text-black font-[500] space-y-2">
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
      <div className="mt-20 flex justify-between items-center pt-10 border-t border-gray-200">
        <Link 
          to="/#locations" 
          className="text-2xl text-black font-[500] hover:text-gray-700 transition duration-300"
        >
          ← All Locations
        </Link>
        <Link 
          to="/work" 
          className="text-2xl text-black font-[500] hover:text-gray-700 transition duration-300"
        >
          View Photography Work →
        </Link>
      </div>
    </section>
    </div>
  );
}

export default Japan;