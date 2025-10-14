// Cars.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// Import Cars images - you'll need to add these to your assets
import cars1 from "../assets/images/cars/1.JPG";
import cars2 from "../assets/images/cars/2.JPG";
import cars3 from "../assets/images/cars/3.JPG";
import cars4 from "../assets/images/cars/4.JPG";
import cars5 from "../assets/images/cars/5.JPG";
import cars6 from "../assets/images/cars/6.JPG";
import cars7 from "../assets/images/cars/7.JPG";
import cars8 from "../assets/images/cars/8.JPG";
import cars9 from "../assets/images/cars/9.JPG";
import cars10 from "../assets/images/cars/10.JPG";
import cars11 from "../assets/images/cars/11.JPG";
import cars12 from "../assets/images/cars/12.JPG";
import cars13 from "../assets/images/cars/13.JPG";
import cars14 from "../assets/images/cars/14.JPG";
import cars15 from "../assets/images/cars/15.JPG";
import Navbar from '../components/Navbar';

function Cars() {
  const carsImages = [
    { src: cars1, width: 580, height: 390, rotation: -3, span: 'md:col-span-2' },
    { src: cars2, width: 420, height: 620, rotation: 2, span: '' },
    { src: cars3, width: 520, height: 350, rotation: 1, span: '' },
    { src: cars4, width: 380, height: 540, rotation: -2, span: '' },
    { src: cars5, width: 460, height: 310, rotation: 3, span: 'lg:col-span-2' },
    { src: cars6, width: 600, height: 400, rotation: -1, span: '' },
    { src: cars7, width: 340, height: 510, rotation: 2, span: '' },
    { src: cars8, width: 490, height: 330, rotation: -3, span: 'md:col-span-2' },
    { src: cars9, width: 530, height: 360, rotation: 1, span: '' },
    { src: cars10, width: 410, height: 580, rotation: -2, span: '' },
    { src: cars11, width: 470, height: 320, rotation: 3, span: '' },
    { src: cars12, width: 550, height: 370, rotation: -1, span: 'lg:col-span-2' },
    { src: cars13, width: 390, height: 520, rotation: 2, span: '' },
    { src: cars14, width: 440, height: 300, rotation: -3, span: '' },
    { src: cars15, width: 500, height: 340, rotation: 1, span: 'md:col-span-2' }
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
          <p className="text-xl tracking-wide text-gray-800">CARS COLLECTION</p>
        </div>
        <h2 className="text-[200px] font-[580] leading-none mb-8 text-black">
          Cars
        </h2>
        <p className="text-3xl text-black leading-snug max-w-4xl">
          Classic curves, modern engineering, and automotive artistry—capturing the soul of 
          machines where design meets performance and every detail tells a story of innovation.
        </p>
      </div>

      {/* Technology Used */}
      <div className="mb-16">
        <p className="text-lg tracking-wide text-gray-700 mb-2 uppercase">
          Shot With
        </p>
        <ul className="text-2xl text-black font-[500] leading-relaxed space-y-2">
          <li>SONY A7CR • 50mm & 85mm Prime Lenses</li>
          <li>Adobe Lightroom Classic • Photoshop</li>
          <li>Various Locations • 2022-2023 Automotive Series</li>
        </ul>
      </div>

      {/* Messy Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
        {carsImages.map((image, index) => (
          <div
            key={index}
            className={`relative group cursor-pointer ${image.span} ${
              index % 5 === 0 ? 'mt-12' : 
              index % 5 === 1 ? 'mt-4' : 
              index % 5 === 2 ? 'mt-16' : 
              index % 5 === 3 ? 'mt-8' : 'mt-6'
            } ${index === 4 ? 'lg:col-start-2' : ''}`}
          >
            <img
              src={image.src}
              alt={`Cars ${index + 1}`}
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
              This automotive series celebrates the artistry of automobile design—from vintage 
              classics to modern supercars. Each photograph focuses on the interplay of light 
              and metal, capturing the personality and engineering excellence of these machines.
            </p>
          </div>
          <div className="md:w-1/2">
            <p className="text-lg tracking-wide text-gray-700 mb-4 uppercase">
              Automotive Focus
            </p>
            <div className="grid grid-cols-2 gap-4">
              <ul className="text-2xl text-black font-[500] space-y-2">
                <li>Classic American</li>
                <li>European Sports</li>
                <li>Japanese Imports</li>
                <li>Supercars</li>
                <li>Muscle Cars</li>
              </ul>
              <ul className="text-2xl text-black font-[500] space-y-2">
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
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-gray-200">
          <div>
            <p className="text-lg tracking-wide text-gray-700 mb-2 uppercase">
              Photography Style
            </p>
            <p className="text-2xl text-black font-[500]">
              Detail & Atmosphere
            </p>
          </div>
          <div>
            <p className="text-lg tracking-wide text-gray-700 mb-2 uppercase">
              Lighting
            </p>
            <p className="text-2xl text-black font-[500]">
              Golden Hour & Studio
            </p>
          </div>
          <div>
            <p className="text-lg tracking-wide text-gray-700 mb-2 uppercase">
              Focus
            </p>
            <p className="text-2xl text-black font-[500]">
              Design & Emotion
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
            to="/cayman" 
            className="text-2xl text-black font-[500] hover:text-gray-700 transition duration-300"
          >
            ← Cayman
          </Link>
          <Link 
            to="/flowers" 
            className="text-2xl text-black font-[500] hover:text-gray-700 transition duration-300"
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