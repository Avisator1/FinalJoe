// Ireland.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// Import Ireland images - you'll need to add these to your assets
import ireland1 from "/images/ireland/1.JPG";
import ireland2 from "/images/ireland/2.JPG";
import ireland3 from "/images/ireland/3.JPG";
import ireland4 from "/images/ireland/4.JPG";
import ireland5 from "/images/ireland/5.JPG";
import ireland6 from "/images/ireland/6.JPG";
import ireland7 from "/images/ireland/7.JPG";
import ireland8 from "/images/ireland/8.JPG";
import ireland9 from "/images/ireland/9.JPG";
import ireland10 from "/images/ireland/10.JPG";
import ireland11 from "/images/ireland/11.JPG";
import ireland12 from "/images/ireland/12.JPG";
import ireland13 from "/images/ireland/13.JPG";
import ireland14 from "/images/ireland/14.JPG";
import ireland15 from "/images/ireland/15.JPG";
import ireland16 from "/images/ireland/16.JPG";
import ireland17 from "/images/ireland/17.JPG";
import ireland18 from "/images/ireland/18.JPG";
import ireland19 from "/images/ireland/19.JPG";
import ireland20 from "/images/ireland/20.JPG";
import ireland21 from "/images/ireland/21.JPG";
import Navbar from '../components/Navbar';

function Ireland() {
  const irelandImages = [
    { src: ireland1, width: 520, height: 350, rotation: -2, span: '' },
    { src: ireland2, width: 380, height: 570, rotation: 3, span: 'md:col-span-2' },
    { src: ireland3, width: 450, height: 300, rotation: 1, span: '' },
    { src: ireland4, width: 580, height: 390, rotation: -3, span: '' },
    { src: ireland5, width: 340, height: 510, rotation: 2, span: '' },
    { src: ireland6, width: 490, height: 330, rotation: -1, span: 'lg:col-span-2' },
    { src: ireland7, width: 410, height: 590, rotation: 4, span: '' },
    { src: ireland8, width: 530, height: 360, rotation: -2, span: '' },
    { src: ireland9, width: 370, height: 520, rotation: 1, span: '' },
    { src: ireland10, width: 460, height: 310, rotation: -3, span: '' },
    { src: ireland11, width: 600, height: 400, rotation: 2, span: 'md:col-span-2' },
    { src: ireland12, width: 320, height: 480, rotation: -1, span: '' },
    { src: ireland13, width: 540, height: 370, rotation: 3, span: '' },
    { src: ireland14, width: 390, height: 540, rotation: -2, span: '' },
    { src: ireland15, width: 470, height: 320, rotation: 1, span: 'lg:row-span-2' },
    { src: ireland16, width: 510, height: 340, rotation: -3, span: '' },
    { src: ireland17, width: 350, height: 530, rotation: 2, span: '' },
    { src: ireland18, width: 480, height: 325, rotation: -1, span: '' },
    { src: ireland19, width: 430, height: 290, rotation: 3, span: '' },
    { src: ireland20, width: 560, height: 380, rotation: -2, span: 'md:col-span-2' },
    { src: ireland21, width: 400, height: 560, rotation: 1, span: '' }
  ];

  return (
    <div>
        <Navbar />
        <section className="bg-white me mx-auto max-w-[115rem] px-10 py-32">
      {/* Header */}
      <div className="mb-20">
        <div className="flex items-center gap-4 mb-4">
          <Link 
            to="/#locations" 
            className="text-xl tracking-wide text-gray-600 hover:text-black transition duration-300"
          >
            ← BACK TO LOCATIONS
          </Link>
          <p className="text-xl tracking-wide text-gray-800">IRELAND COLLECTION</p>
        </div>
        <h2 className="text-[200px] font-[580] leading-none mb-8 text-black">
          Ireland
        </h2>
        <p className="text-3xl text-black leading-snug max-w-4xl">
          Emerald landscapes, dramatic coastlines, and ancient castles—capturing the mystical beauty 
          and rich history of Ireland where every turn reveals another story waiting to be told.
        </p>
      </div>

      {/* Technology Used */}
      <div className="mb-16">
        <p className="text-lg tracking-wide text-gray-700 mb-2 uppercase">
          Shot With
        </p>
        <ul className="text-2xl text-black font-[500] leading-relaxed space-y-2">
          <li>SONY A7CR • 16-35mm Wide Lens</li>
          <li>Adobe Lightroom Classic • Capture One</li>
          <li>Summer 2023 • Coastal Ring Road Journey</li>
        </ul>
      </div>

      {/* Messy Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
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
              className={`w-full h-auto object-cover shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl ${
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

      {/* Additional Info */}
      <div className="mt-20 pt-10 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between gap-16">
          <div className="md:w-1/2">
            <p className="text-lg tracking-wide text-gray-700 mb-4 uppercase">
              About This Collection
            </p>
            <p className="text-2xl text-black leading-relaxed">
              From the wild Atlantic way to the serene lakes of Killarney, this series captures 
              Ireland's soul—the dramatic light, the ever-changing weather, and the deep sense of 
              history that permeates every landscape and ancient stone.
            </p>
          </div>
          <div className="md:w-1/2">
            <p className="text-lg tracking-wide text-gray-700 mb-4 uppercase">
              Locations Featured
            </p>
            <div className="grid grid-cols-2 gap-4">
              <ul className="text-2xl text-black font-[500] space-y-2">
                <li>Cliffs of Moher</li>
                <li>Ring of Kerry</li>
                <li>Dublin Streets</li>
                <li>Giants Causeway</li>
                <li>Killarney National Park</li>
              </ul>
              <ul className="text-2xl text-black font-[500] space-y-2">
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
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-gray-200">
          <div>
            <p className="text-lg tracking-wide text-gray-700 mb-2 uppercase">
              Light Conditions
            </p>
            <p className="text-2xl text-black font-[500]">
              Golden Hour & Soft Light
            </p>
          </div>
          <div>
            <p className="text-lg tracking-wide text-gray-700 mb-2 uppercase">
              Cultural Focus
            </p>
            <p className="text-2xl text-black font-[500]">
              Landscape & Heritage
            </p>
          </div>
          <div>
            <p className="text-lg tracking-wide text-gray-700 mb-2 uppercase">
              Color Palette
            </p>
            <p className="text-2xl text-black font-[500]">
              Emerald & Stone
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
            to="/oregon" 
            className="text-2xl text-black font-[500] hover:text-gray-700 transition duration-300"
          >
            ← Oregon
          </Link>
          <Link 
            to="/scotland" 
            className="text-2xl text-black font-[500] hover:text-gray-700 transition duration-300"
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