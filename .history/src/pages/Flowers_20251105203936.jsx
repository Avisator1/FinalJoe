// Flowers.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Flowers() {
  const navigate = useNavigate();

  const handleBackToLocations = () => {
    navigate('/#locations');
    setTimeout(() => {
      const element = document.getElementById('locations');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const flowersImages = [
    { src: "https://photos.adiavi.com/images/flowers/1.jpg", width: 520, height: 350, rotation: -2, span: '' },
    { src: "https://photos.adiavi.com/images/flowers/2.jpg", width: 380, height: 570, rotation: 3, span: 'md:col-span-2' },
    { src: "https://photos.adiavi.com/images/flowers/3.jpg", width: 450, height: 300, rotation: 1, span: '' },
    { src: "https://photos.adiavi.com/images/flowers/4.jpg", width: 580, height: 390, rotation: -3, span: 'lg:col-span-2' },
    { src: "https://photos.adiavi.com/images/flowers/5.jpg", width: 340, height: 510, rotation: 2, span: '' },
    { src: "https://photos.adiavi.com/images/flowers/6.jpg", width: 490, height: 330, rotation: -1, span: '' },
    { src: "https://photos.adiavi.com/images/flowers/7.jpg", width: 410, height: 590, rotation: 4, span: 'md:col-span-2' },
    { src: "https://photos.adiavi.com/images/flowers/8.jpg", width: 530, height: 360, rotation: -2, span: '' },
    { src: "https://photos.adiavi.com/images/flowers/9.jpg", width: 370, height: 520, rotation: 1, span: '' },
    { src: "https://photos.adiavi.com/images/flowers/10.jpg", width: 460, height: 310, rotation: -3, span: 'lg:col-span-2' },
    { src: "https://photos.adiavi.com/images/flowers/11.jpg", width: 600, height: 400, rotation: 2, span: '' },
    { src: "https://photos.adiavi.com/images/flowers/12.jpg", width: 320, height: 480, rotation: -1, span: '' },
    { src: "https://photos.adiavi.com/images/flowers/13.jpg", width: 540, height: 370, rotation: 3, span: '' },
    { src: "https://photos.adiavi.com/images/flowers/14.jpg", width: 390, height: 540, rotation: -2, span: 'md:col-span-2' },
  ];

  return (
    <div>
      <Navbar />
      <section className="bg-white mx-auto me max-w-[115rem] px-4 sm:px-6 md:px-10 py-16 md:py-32">
        {/* Header */}
        <div className="mb-12 mt-20 md:mb-20">
          <div className="flex items-center gap-3 md:gap-4 mb-4">
            <button 
              onClick={handleBackToLocations}
              className="text-lg md:text-xl tracking-wide text-gray-600 hover:text-black transition duration-300"
            >
              ← BACK TO LOCATIONS
            </button>
            <p className="text-lg md:text-xl tracking-wide text-gray-800">FLOWERS COLLECTION</p>
          </div>
          <h2 className="text-7xl sm:text-7xl md:text-[200px] font-[580] leading-none mb-6 md:mb-8 text-black">
            Nature
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl text-black leading-snug max-w-4xl">
            Delicate petals, vibrant colors, and nature's intricate beauty—capturing the ephemeral 
            artistry of blooms where every flower tells a story of growth, beauty, and transformation.
          </p>
        </div>

        {/* Technology Used */}
        <div className="mb-12 md:mb-16">
          <p className="text-base md:text-lg tracking-wide text-gray-700 mb-2 uppercase">
            Shot With
          </p>
          <ul className="text-lg md:text-2xl text-black font-[500] leading-relaxed space-y-1 md:space-y-2">
            <li>SONY A7CR • Macro & Prime Lenses</li>
            <li>Adobe Lightroom Classic • Photoshop</li>
            <li>Spring-Summer 2023 • Botanical Gardens & Wild Fields</li>
          </ul>
        </div>

        {/* Messy Image Grid - Desktop version */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {flowersImages.map((image, index) => (
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
                alt={`Flowers ${index + 1}`}
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

        {/* Mobile Image Grid - Simple stacked layout */}
        <div className="md:hidden space-y-6">
          {flowersImages.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={image.src}
                alt={`Flowers ${index + 1}`}
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
                This botanical series explores the delicate beauty of flowers in their natural 
                environments—from intimate macro details to sweeping garden landscapes. Each 
                photograph celebrates the unique character and vibrant life of these natural wonders.
              </p>
            </div>
            <div className="md:w-1/2">
              <p className="text-base md:text-lg tracking-wide text-gray-700 mb-3 md:mb-4 uppercase">
                Floral Variety
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ul className="text-lg md:text-2xl text-black font-[500] space-y-1 md:space-y-2">
                  <li>Roses & Peonies</li>
                  <li>Wildflowers</li>
                  <li>Tropical Blooms</li>
                  <li>Spring Bulbs</li>
                  <li>Succulents</li>
                </ul>
                <ul className="text-lg md:text-2xl text-black font-[500] space-y-1 md:space-y-2">
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
          <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 pt-8 border-t border-gray-200">
            <div>
              <p className="text-base md:text-lg tracking-wide text-gray-700 mb-2 uppercase">
                Photography Style
              </p>
              <p className="text-lg md:text-2xl text-black font-[500]">
                Macro & Natural Light
              </p>
            </div>
            <div>
              <p className="text-base md:text-lg tracking-wide text-gray-700 mb-2 uppercase">
                Season
              </p>
              <p className="text-lg md:text-2xl text-black font-[500]">
                Spring & Summer
              </p>
            </div>
            <div>
              <p className="text-base md:text-lg tracking-wide text-gray-700 mb-2 uppercase">
                Focus
              </p>
              <p className="text-lg md:text-2xl text-black font-[500]">
                Color & Texture
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 md:mt-20 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 pt-8 md:pt-10 border-t border-gray-200">
          <button 
            onClick={handleBackToLocations}
            className="text-lg sm:text-xl md:text-2xl text-black font-[500] hover:text-gray-700 transition duration-300"
          >
            ← All Locations
          </button>
          <div className="flex gap-4 sm:gap-8">
            <Link 
              to="/cars" 
              className="text-lg sm:text-xl md:text-2xl text-black font-[500] hover:text-gray-700 transition duration-300"
            >
              ← Cars
            </Link>
            <Link 
              to="/fireworks" 
              className="text-lg sm:text-xl md:text-2xl text-black font-[500] hover:text-gray-700 transition duration-300"
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