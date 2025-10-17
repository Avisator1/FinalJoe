import React, { useState, useEffect } from "react";
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
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (!loading) {
      // Trigger animation shortly after loading screen fades out
      const timer = setTimeout(() => {
        setAnimate(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <>
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}

      {!loading && (
        <div
          className={`transition-opacity duration-700 ${
            animate ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="px-4">
            <Navbar />
            <Hero />
            <About />
            <FeaturedWork />
            <FeaturedLocations />
            <Contact />
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
