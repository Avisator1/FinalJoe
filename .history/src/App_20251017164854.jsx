import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import { useEffect, useState } from 'react';

import Home from './pages/Home';
import Japan from './pages/Japan';
import Oregon from './pages/Oregon';
import Ireland from './pages/Ireland';
import Scotland from './pages/Scotland';
import Cayman from './pages/Cayman';
import Cars from './pages/Cars';
import Flowers from './pages/Flowers';
import Fireworks from './pages/Fireworks';
import Club from './pages/Club';
import Footer from './components/Footer';
import Navbar from './components/Navbar'; // keeping this in case you use it
  

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}


// Main routing content (with loading guard)
function AppContent() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Ensure the router & first route are mounted before showing the footer
    const timeout = setTimeout(() => {
      setIsReady(true);
    }, 50); // small delay just to let the route paint first
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <ScrollToTop />
      {/* Optional Navbar */}
      <Navbar />
      
      <Routes>
        <Route index element={<Home />} />
        <Route path="/japan" element={<Japan />} />
        <Route path="/oregon" element={<Oregon />} />
        <Route path="/ireland" element={<Ireland />} />
        <Route path="/scotland" element={<Scotland />} />
        <Route path="/cayman" element={<Cayman />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/flowers" element={<Flowers />} />
        <Route path="/fireworks" element={<Fireworks />} />
        <Route path="/club" element={<Club />} />
      </Routes>

      {/* Only show Footer once the first render completes */}
      {isReady && <Footer />}
    </>
  );
}


export default function App() {
  return (
    <ReactLenis root options={{ smooth: true, duration: 1.2 }}>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ReactLenis>
  );
}
