import React from "react";

export default function Work() {
  const images = [
    "https://photos.adiavi.com/images/photography/DSC01879.JPG",
    "https://photos.adiavi.com/images/places/DSC01913.JPG",
    "https://photos.adiavi.com/images/places/scotland.JPG",
    "https://photos.adiavi.com/images/places/cayman.JPG",
    "https://photos.adiavi.com/images/places/ireland.JPG",
  ];

  return (
    <section className="relative me bg-white mx-auto max-w-[115rem] px-10 py-32">
      <div className="flex flex-col md:flex-row items-start gap-12">
        {/* LEFT TEXT */}
        <div className="md:w-1/2">
          <p className="text-xl mb-4 tracking-wide text-gray-800">02.WORK</p>
          <h2 className="text-[130px] font-[580] leading-none mb-8 text-black">
            Photography
          </h2>
          <p className="text-3xl text-black leading-snug max-w-xl mb-16">
            Each piece captures a distinct emotion, blending light and space to
            tell visual stories. My featured works showcase personal projects
            and commissioned shoots that highlight people, places, and
            perspectives.
          </p>

          {/* TECHNOLOGY USED SECTION */}
          <div className="mt-10">
            <p className="text-lg tracking-wide text-gray-700 mb-2 uppercase">
              Technology Used
            </p>
            <ul className="text-2xl text-black font-[500] leading-relaxed space-y-2">
              <li>SONY ZV-E10</li>
              <li>SONY A7CR</li>
              <li>Adobe Lightroom</li>
            </ul>
          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div className="md:w-1/2 relative flex flex-col items-end">
          {/* Top-right image aligned with paragraph */}
          <div className="flex items-start justify-end w-full relative">
            <img
              src={images[0]}
              alt="Work 1"
              className="w-[500px] h-[380px] object-cover shadow-lg grayscale-0 hover:grayscale-0-0 transition duration-300"
            />
          </div>

          {/* Messy grid below */}
          <div className="grid grid-cols-2 gap-5 mt-8 relative">
            <img
              src={images[1]}
              alt="Work 2"
              className="w-[540px] h-[360px] object-cover shadow-md -rotate-2 grayscale-0 hover:grayscale-0-0 transition duration-300"
            />
            <img
              src={images[2]}
              alt="Work 3"
              className="w-[400px] h-[220px] object-cover shadow-md rotate-1 mt-10 grayscale-0 hover:grayscale-0-0 transition duration-300"
            />
            <img
              src={images[3]}
              alt="Work 4"
              className="w-[800px] h-[300px] object-cover shadow-md -rotate-1 mt-[10px] grayscale-0 hover:grayscale-0-0 transition duration-300"
            />
            <img
              src={images[4]}
              alt="Work 5"
              className="w-[220px] h-[250px] object-cover shadow-md rotate-3 ml-20 mt-[-50px] grayscale-0 hover:grayscale-0-0 transition duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
