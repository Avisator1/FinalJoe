import React, { useState } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import FeaturedWork from "../components/Featured";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import LoadingScreen from "../components/LoadingScreen";
import Navbar from "../components/Navbar";
import FeaturedLocations from "../components/Locations";

function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}

      {!loading && (
        <div className="px-4">
          <Navbar />
          <Hero />
          <About />
          <FeaturedWork />
          <FeaturedLocations />
          <Contact />
        </div>
      )}
    </>
  );
}

export default Home;
