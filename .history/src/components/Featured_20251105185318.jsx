import React from "react";

export default function Work() {
  const images = [
    "https://photos.adiavi.com/images/featured/1.jpg",
    "https://photos.adiavi.com/images/featured/2.jpg",
    "https://photos.adiavi.com/images/featured/3.jpg",
    "https://photos.adiavi.com/images/featured/4.jpg",
    "https://photos.adiavi.com/images/featured/5.jpg",
  ];

  return (
    <section className="relative me bg-white mx-auto max-w-[115rem] px-4 sm:px-6 md:px-10 py-16 md:py-32">
      <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
        {/* LEFT TEXT */}
        <div className="md:w-1/2">
          <p className="text-lg md:text-xl mb-4 tracking-wide text-gray-800">02.WORK</p>
          <h2 className="text-5xl sm:text-7xl md:text-[130px] font-[580] leading-none mb-6 md:mb-8 text-black">
            Photography
          </h2>
          <p className="text-xl md:text-3xl text-black leading-snug max-w-xl mb-12 md:mb-16">
            Each piece captures a distinct emotion, blending light and space to
            tell visual stories. My featured works showcase personal projects
            and commissioned shoots that highlight people, places, and
            perspectives.
          </p>

          {/* TECHNOLOGY USED SECTION */}
          <div className="mt-8 md:mt-10">
            <p className="text-base md:text-lg tracking-wide text-gray-700 mb-2 uppercase">
              Technology Used
            </p>
            <ul className="text-lg md:text-2xl text-black font-[500] leading-relaxed space-y-1 md:space-y-2">
              <li>SONY A7CR</li>
              <li>SONY ZV-E10</li>
              <li>SIGMA 70-200MM F2.8</li>
              <li>SONY 50MM F1.8</li>
              <li>SONY 24-50MM F2.8</li>
            </ul>
          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div className="md:w-1/2 relative flex flex-col items-end w-full mt-8 md:mt-0">
          {/* Top-right image aligned with paragraph */}
          <div className="flex items-start justify-center md:justify-end w-full relative">
            <img
              src={images[0]}
              alt="Work 1"
              className="w-full max-w-[500px] md:w-[500px] h-[250px] sm:h-[300px] md:h-[380px] object-cover shadow-lg grayscale-0 hover:grayscale-0-0 transition duration-300"
            />
          </div>

          {/* Messy grid below - simplified for mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 mt-6 md:mt-8 relative w-full">
            <img
              src={images[1]}
              alt="Work 2"
              className="w-full h-[200px] sm:h-[300px] md:w-[540px] md:h-[360px] object-cover shadow-md md:-rotate-2 grayscale-0 hover:grayscale-0-0 transition duration-300"
            />
            <img
              src={images[2]}
              alt="Work 3"
              className="w-full h-[200px] sm:h-[250px] md:w-[400px] md:h-[220px] object-cover shadow-md md:rotate-1 md:mt-10 grayscale-0 hover:grayscale-0-0 transition duration-300"
            />
            <img
              src={images[3]}
              alt="Work 4"
              className="w-full h-[200px] sm:h-[280px] md:w-[800px] md:h-[300px] object-cover shadow-md md:-rotate-1 md:mt-[10px] grayscale-0 hover:grayscale-0-0 transition duration-300 col-span-1 sm:col-span-2"
            />
            <img
              src={images[4]}
              alt="Work 5"
              className="w-full max-w-[280px] h-[200px] md:w-[220px] md:h-[250px] object-cover shadow-md md:rotate-3 md:ml-20 md:mt-[-50px] grayscale-0 hover:grayscale-0-0 transition duration-300 justify-self-center sm:justify-self-start"
            />
          </div>
        </div>
      </div>
    </section>
  );
}