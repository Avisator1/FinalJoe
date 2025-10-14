// Scotland.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Scotland() {
  const scotlandImages = [
    { src: "https://photos.adiavi.com/images/scotland/1.JPG", width: 580, height: 390, rotation: -3, span: 'md:col-span-2' },
    { src: "https://photos.adiavi.com/images/scotland/2.JPG", width: 420, height: 620, rotation: 2, span: '' },
    { src: "https://photos.adiavi.com/images/scotland/3.JPG", width: 520, height: 350, rotation: 1, span: '' },
    { src: "https://photos.adiavi.com/images/scotland/4.JPG", width: 380, height: 540, rotation: -2, span: 'lg:col-span-2' },
    { src: "https://photos.adiavi.com/images/scotland/5.JPG", width: 460, height: 310, rotation: 3, span: '' },
    { src: "https://photos.adiavi.com/images/scotland/6.JPG", width: 600, height: 400, rotation: -1, span: 'md:col-span-2' },
    { src: "https://photos.adiavi.com/images/scotland/7.JPG", width: 340, height: 510, rotation: 2, span: '' },
    { src: "https://photos.adiavi.com/images/scotland/8.JPG", width: 490, height: 330, rotation: -3, span: '' },
    { src: "https://photos.adiavi.com/images/scotland/9.JPG", width: 530, height: 360, rotation: 1, span: 'lg:col-span-2' },
    { src: "https://photos.adiavi.com/images/scotland/10.JPG", width: 410, height: 580, rotation: -2, span: '' }
  ];

  return (
    <div>
      <Navbar />
      <section className="bg-white mx-auto max-w-[115rem] px-10 py-32">
        {/* Header */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <Link 
              to="/#locations" 
              className="text-xl tracking-wide text-gray-600 hover:text-black transition duration-300"
            >
              ← BACK TO LOCATIONS
            </Link>
            <p className="text-xl tracking-wide text-gray-800">SCOTLAND COLLECTION</p>
          </div>
          <h2 className="text-[200px] font-[580] leading-none mb-8 text-black">
            Scotland
          </h2>
          <p className="text-3xl text-black leading-snug max-w-4xl">
            Ancient castles, misty highlands, and dramatic lochs—capturing the rugged beauty 
            and timeless mystery of Scotland where history whispers from every stone and glen.
          </p>
        </div>

        {/* Technology Used */}
        <div className="mb-16">
          <p className="text-lg tracking-wide text-gray-700 mb-2 uppercase">
            Shot With
          </p>
          <ul className="text-2xl text-black font-[500] leading-relaxed space-y-2">
            <li>SONY A7CR • 24-70mm & 70-200mm Lenses</li>
            <li>Adobe Lightroom Classic • Photoshop</li>
            <li>Spring 2023 • Highlands & Islands Expedition</li>
          </ul>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {scotlandImages.map((image, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer ${image.span} ${
                index % 3 === 0 ? 'mt-12' : index % 3 === 1 ? 'mt-6' : 'mt-16'
              } ${index === 0 ? 'lg:col-start-2' : ''}`}
            >
              <img
                src={image.src}
                alt={`Scotland ${index + 1}`}
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
                This series explores Scotland's dramatic contrasts—from the moody, atmospheric 
                highlands to the serene beauty of its islands. Each image tells a story of ancient 
                landscapes, weathered stone, and the ever-changing Scottish light.
              </p>
            </div>
            <div className="md:w-1/2">
              <p className="text-lg tracking-wide text-gray-700 mb-4 uppercase">
                Locations Featured
              </p>
              <div className="grid grid-cols-2 gap-4">
                <ul className="text-2xl text-black font-[500] space-y-2">
                  <li>Edinburgh Castle</li>
                  <li>Loch Ness</li>
                  <li>Isle of Skye</li>
                  <li>Glencoe Valley</li>
                  <li>Stirling Castle</li>
                </ul>
                <ul className="text-2xl text-black font-[500] space-y-2">
                  <li>Highland Moors</li>
                  <li>Eilean Donan Castle</li>
                  <li>Scottish Borders</li>
                  <li>Ben Nevis</li>
                  <li>North Coast 500</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Scottish Elements */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-gray-200">
            <div>
              <p className="text-lg tracking-wide text-gray-700 mb-2 uppercase">
                Atmosphere
              </p>
              <p className="text-2xl text-black font-[500]">
                Moody & Dramatic
              </p>
            </div>
            <div>
              <p className="text-lg tracking-wide text-gray-700 mb-2 uppercase">
                Architectural Focus
              </p>
              <p className="text-2xl text-black font-[500]">
                Castles & Landscapes
              </p>
            </div>
            <div>
              <p className="text-lg tracking-wide text-gray-700 mb-2 uppercase">
                Season
              </p>
              <p className="text-2xl text-black font-[500]">
                Spring Thaw
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
              to="/ireland" 
              className="text-2xl text-black font-[500] hover:text-gray-700 transition duration-300"
            >
              ← Ireland
            </Link>
            <Link 
              to="/cayman" 
              className="text-2xl text-black font-[500] hover:text-gray-700 transition duration-300"
            >
              Cayman →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Scotland;
