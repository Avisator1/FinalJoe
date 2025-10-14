// Flowers.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Import Flowers images - you'll need to add these to your assets
import flowers1 from "../assets/images/flowers/1.JPG";
import flowers2 from "../assets/images/flowers/2.JPG";
import flowers3 from "../assets/images/flowers/3.JPG";
import flowers4 from "../assets/images/flowers/4.JPG";
import flowers5 from "../assets/images/flowers/5.JPG";
import flowers6 from "../assets/images/flowers/6.JPG";
import flowers7 from "../assets/images/flowers/7.JPG";
import flowers8 from "../assets/images/flowers/8.JPG";
import flowers9 from "../assets/images/flowers/9.JPG";
import flowers10 from "../assets/images/flowers/10.jpg";
import flowers11 from "../assets/images/flowers/11.jpg";
import flowers12 from "../assets/images/flowers/12.jpg";
import flowers13 from "../assets/images/flowers/13.jpg";
import flowers14 from "../assets/images/flowers/14.jpg";
import Navbar from '../components/Navbar';

function Flowers() {
  const navigate = useNavigate();

  const handleBackToLocations = () => {
    // Navigate to home page first
    navigate('/#locations');
    
    // Then scroll to locations after a brief delay to ensure page load
    setTimeout(() => {
      const element = document.getElementById('locations');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const flowersImages = [
    { src: flowers1, width: 520, height: 350, rotation: -2, span: '' },
    { src: flowers2, width: 380, height: 570, rotation: 3, span: 'md:col-span-2' },
    { src: flowers3, width: 450, height: 300, rotation: 1, span: '' },
    { src: flowers4, width: 580, height: 390, rotation: -3, span: 'lg:col-span-2' },
    { src: flowers5, width: 340, height: 510, rotation: 2, span: '' },
    { src: flowers6, width: 490, height: 330, rotation: -1, span: '' },
    { src: flowers7, width: 410, height: 590, rotation: 4, span: 'md:col-span-2' },
    { src: flowers8, width: 530, height: 360, rotation: -2, span: '' },
    { src: flowers9, width: 370, height: 520, rotation: 1, span: '' },
    { src: flowers10, width: 460, height: 310, rotation: -3, span: 'lg:col-span-2' },
    { src: flowers11, width: 600, height: 400, rotation: 2, span: '' },
    { src: flowers12, width: 320, height: 480, rotation: -1, span: '' },
    { src: flowers13, width: 540, height: 370, rotation: 3, span: '' },
    { src: flowers14, width: 390, height: 540, rotation: -2, span: 'md:col-span-2' }
  ];

  return (
    <div>
        <Navbar />
        <section className="bg-white mx-auto me max-w-[115rem] px-10 py-32">
      {/* Header */}
      <div className="mb-20">
        <div className="flex items-center gap-4 mb-4">
          <button 
            onClick={handleBackToLocations}
            className="text-xl tracking-wide text-gray-600 hover:text-black transition duration-300"
          >
            ← BACK TO LOCATIONS
          </button>
          <p className="text-xl tracking-wide text-gray-800">FLOWERS COLLECTION</p>
        </div>
        <h2 className="text-[200px] font-[580] leading-none mb-8 text-black">
          Flowers
        </h2>
        <p className="text-3xl text-black leading-snug max-w-4xl">
          Delicate petals, vibrant colors, and nature's intricate beauty—capturing the ephemeral 
          artistry of blooms where every flower tells a story of growth, beauty, and transformation.
        </p>
      </div>

      {/* Technology Used */}
      <div className="mb-16">
        <p className="text-lg tracking-wide text-gray-700 mb-2 uppercase">
          Shot With
        </p>
        <ul className="text-2xl text-black font-[500] leading-relaxed space-y-2">
          <li>SONY A7CR • Macro & Prime Lenses</li>
          <li>Adobe Lightroom Classic • Photoshop</li>
          <li>Spring-Summer 2023 • Botanical Gardens & Wild Fields</li>
        </ul>
      </div>

      {/* Messy Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
        {flowersImages.map((image, index) => (
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
              alt={`Flowers ${index + 1}`}
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
              This botanical series explores the delicate beauty of flowers in their natural 
              environments—from intimate macro details to sweeping garden landscapes. Each 
              photograph celebrates the unique character and vibrant life of these natural wonders.
            </p>
          </div>
          <div className="md:w-1/2">
            <p className="text-lg tracking-wide text-gray-700 mb-4 uppercase">
              Floral Variety
            </p>
            <div className="grid grid-cols-2 gap-4">
              <ul className="text-2xl text-black font-[500] space-y-2">
                <li>Roses & Peonies</li>
                <li>Wildflowers</li>
                <li>Tropical Blooms</li>
                <li>Spring Bulbs</li>
                <li>Succulents</li>
              </ul>
              <ul className="text-2xl text-black font-[500] space-y-2">
                <li>Orchids</li>
                <li>Sunflowers</li>
                <li>Lavender Fields</li>
                <li>Cherry Blossoms</li>
                <li>Botanical Gardens</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Botanical Elements */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-gray-200">
          <div>
            <p className="text-lg tracking-wide text-gray-700 mb-2 uppercase">
              Photography Style
            </p>
            <p className="text-2xl text-black font-[500]">
              Macro & Natural Light
            </p>
          </div>
          <div>
            <p className="text-lg tracking-wide text-gray-700 mb-2 uppercase">
              Season
            </p>
            <p className="text-2xl text-black font-[500]">
              Spring & Summer
            </p>
          </div>
          <div>
            <p className="text-lg tracking-wide text-gray-700 mb-2 uppercase">
              Focus
            </p>
            <p className="text-2xl text-black font-[500]">
              Color & Texture
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-20 flex justify-between items-center pt-10 border-t border-gray-200">
        <button 
          onClick={handleBackToLocations}
          className="text-2xl text-black font-[500] hover:text-gray-700 transition duration-300"
        >
          ← All Locations
        </button>
        <div className="flex gap-8">
          <Link 
            to="/cars" 
            className="text-2xl text-black font-[500] hover:text-gray-700 transition duration-300"
          >
            ← Cars
          </Link>
          <Link 
            to="/fireworks" 
            className="text-2xl text-black font-[500] hover:text-gray-700 transition duration-300"
          >
            Fireworks →
          </Link>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Flowers;