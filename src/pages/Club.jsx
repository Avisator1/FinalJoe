// Club.jsx
import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar';

function Club() {
  const clubImages = [
    { src: "https://photos.adiavi.com/images/club/1.JPG", width: 520, height: 350, rotation: -2, span: '' },
    { src: "https://photos.adiavi.com/images/club/2.JPG", width: 380, height: 570, rotation: 3, span: 'md:col-span-2' },
    { src: "https://photos.adiavi.com/images/club/3.JPG", width: 450, height: 300, rotation: 1, span: '' },
    { src: "https://photos.adiavi.com/images/club/4.JPG", width: 580, height: 390, rotation: -3, span: 'lg:col-span-2' },
    { src: "https://photos.adiavi.com/images/club/5.JPG", width: 340, height: 510, rotation: 2, span: '' },
    { src: "https://photos.adiavi.com/images/club/6.JPG", width: 490, height: 330, rotation: -1, span: '' },
    { src: "https://photos.adiavi.com/images/club/7.JPG", width: 410, height: 590, rotation: 4, span: 'md:col-span-2' },
    { src: "https://photos.adiavi.com/images/club/8.JPG", width: 530, height: 360, rotation: -2, span: '' },
    { src: "https://photos.adiavi.com/images/club/9.JPG", width: 370, height: 520, rotation: 1, span: '' },
    { src: "https://photos.adiavi.com/images/club/10.JPG", width: 460, height: 310, rotation: -3, span: 'lg:col-span-2' },
    { src: "https://photos.adiavi.com/images/club/11.JPG", width: 600, height: 400, rotation: 2, span: '' },
    { src: "https://photos.adiavi.com/images/club/12.JPG", width: 320, height: 480, rotation: -1, span: '' },
    { src: "https://photos.adiavi.com/images/club/13.JPG", width: 540, height: 370, rotation: 3, span: '' },
    { src: "https://photos.adiavi.com/images/club/14.JPG", width: 390, height: 540, rotation: -2, span: 'md:col-span-2' }
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
          <p className="text-xl tracking-wide text-gray-800">CLUB COLLECTION</p>
        </div>
        <h2 className="lg:text-[200px] text-[120px] font-[580] leading-none mb-8 text-black">
          Club
        </h2>
        <p className="text-3xl text-black leading-snug max-w-4xl">
          Neon lights, pulsating energy, and raw moments of nightlife—capturing the electric 
          atmosphere of club culture where music, movement, and mood converge after dark.
        </p>
      </div>

      {/* Technology Used */}
      <div className="mb-16">
        <p className="text-lg tracking-wide text-gray-700 mb-2 uppercase">
          Shot With
        </p>
        <ul className="text-2xl text-black font-[500] leading-relaxed space-y-2">
          <li>SONY ZV-E10 • Fast Prime Lenses</li>
          <li>Adobe Lightroom Classic • Photoshop</li>
          <li>Various Nightclubs • 2022-2023 Nightlife Series</li>
        </ul>
      </div>

      {/* Messy Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
        {clubImages.map((image, index) => (
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
              alt={`Club ${index + 1}`}
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
              This nightlife series dives into the heart of club culture—capturing the raw energy, 
              dramatic lighting, and authentic moments that define after-dark experiences. From 
              intimate venues to massive dance floors, each image tells a story of nightlife energy.
            </p>
          </div>
          <div className="md:w-1/2">
            <p className="text-lg tracking-wide text-gray-700 mb-4 uppercase">
              Nightlife Elements
            </p>
            <div className="grid grid-cols-2 gap-4">
              <ul className="text-2xl text-black font-[500] space-y-2">
                <li>DJ Performances</li>
                <li>Dance Floor Energy</li>
                <li>Neon Lighting</li>
                <li>Crowd Moments</li>
                <li>Venue Architecture</li>
              </ul>
              <ul className="text-2xl text-black font-[500] space-y-2">
                <li>Bar Scenes</li>
                <li>Light Shows</li>
                <li>Social Interactions</li>
                <li>Performance Art</li>
                <li>Atmospheric Shots</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Club Photography Elements */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-gray-200">
          <div>
            <p className="text-lg tracking-wide text-gray-700 mb-2 uppercase">
              Lighting Conditions
            </p>
            <p className="text-2xl text-black font-[500]">
              Low Light & Dynamic
            </p>
          </div>
          <div>
            <p className="text-lg tracking-wide text-gray-700 mb-2 uppercase">
              Photography Style
            </p>
            <p className="text-2xl text-black font-[500]">
              Candid & Atmospheric
            </p>
          </div>
          <div>
            <p className="text-lg tracking-wide text-gray-700 mb-2 uppercase">
              Focus
            </p>
            <p className="text-2xl text-black font-[500]">
              Energy & Emotion
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
            to="/fireworks" 
            className="text-2xl text-black font-[500] hover:text-gray-700 transition duration-300"
          >
            ← Fireworks
          </Link>
        
        </div>
      </div>
    </section>
    </div>
  );
}

export default Club;