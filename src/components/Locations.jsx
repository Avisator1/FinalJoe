import React from 'react';
import { Link } from 'react-router-dom';
import japan from "/images/places/japan.jpg";
import oregon from "/images/places/oregon.JPG";
import scotland from "/images/places/scotland.JPG";
import cayman from "/images/places/cayman.JPG";
import ireland from "/images/places/ireland.JPG";
import cars from "/images/places/cars.JPG";
import flowers from '/images/places/flowers.JPG';
import fireworks from '/images/places/fireworks.JPG';
import club from '/images/places/club.JPG';

function FeaturedLocations() {
  const locations = [
    { name: "Japan", image: japan, path: "/japan" },
    { name: "Oregon", image: oregon, path: "/oregon" },
    { name: "Scotland", image: scotland, path: "/scotland" },
    { name: "Cayman Island", image: cayman, path: "/cayman" },
    { name: "Ireland", image: ireland, path: "/ireland" },
    { name: "Cars", image: cars, path: "/cars" },
    { name: "Flowers", image: flowers, path: "/flowers" },
    { name: "Fireworks", image: fireworks, path: "/fireworks" },
    { name: "Club", image: club, path: "/club" }
  ];

  return (
    <section id='locations' className="bg-white mx-auto me max-w-[115rem] px-10 py-32">
      {/* Header */}
      <div className="mb-20">
        <p className="text-xl mb-4 tracking-wide text-gray-800">03 FEATURED LOCATIONS</p>
        <h2 className="text-[120px] font-[580] leading-none mb-8 text-black">
          My Featured Work
        </h2>
      </div>

      {/* Location Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {locations.map((location, index) => (
          <Link 
            key={location.name} 
            to={location.path}
            className="group cursor-pointer block"
            onClick={() => window.scrollTo(0, 0)}
          >
            <div className="relative overflow-hidden shadow-lg">
              <img
                src={location.image}
                alt={location.name}
                className="w-full h-[650px] grayscale-0 hover:grayscale-0-0 transition object-cover duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <span className="text-2xl text-gray-500 font-mono">
                {(index + 1).toString().padStart(2, '0')}
              </span>
              <h3 className="text-3xl font-[500] text-black mt-2 group-hover:text-gray-700 transition duration-300">
                {location.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default FeaturedLocations;