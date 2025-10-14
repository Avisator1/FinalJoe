import React from 'react';
import { Link } from 'react-router-dom';

function FeaturedLocations() {
  const locations = [
    { name: "Japan", image: "https://photos.adiavi.com/images/places/japan.jpg", path: "/japan" },
    { name: "Oregon", image: "https://photos.adiavi.com/images/places/oregon.JPG", path: "/oregon" },
    { name: "Scotland", image: "https://photos.adiavi.com/images/places/scotland.JPG", path: "/scotland" },
    { name: "Cayman Island", image: "https://photos.adiavi.com/images/places/cayman.JPG", path: "/cayman" },
    { name: "Ireland", image: "https://photos.adiavi.com/images/places/ireland.JPG", path: "/ireland" },
    { name: "Cars", image: "https://photos.adiavi.com/images/places/cars.JPG", path: "/cars" },
    { name: "Flowers", image: "https://photos.adiavi.com/images/places/flowers.JPG", path: "/flowers" },
    { name: "Fireworks", image: "https://photos.adiavi.com/images/places/fireworks.JPG", path: "/fireworks" },
    { name: "Club", image: "https://photos.adiavi.com/images/places/club.JPG", path: "/club" }
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
