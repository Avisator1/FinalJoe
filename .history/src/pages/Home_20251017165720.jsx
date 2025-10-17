import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import FeaturedWork from "../components/Featured";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import FeaturedLocations from "../components/Locations";

function Home() {
  return (
    <div className="px-4">
      <Navbar />
      <Hero />
      <About />
      <FeaturedWork />
      <FeaturedLocations />
      <Contact />
    </div>
  );
}

export default Home;
