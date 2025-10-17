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
import Navbar from './components/Navbar';


// Scrolls to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}


// Component that waits until the first route is rendered
function RouteWithFooter() {
  const location = useLocation();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Wait for the next paint AFTER the route content is rendered
    requestAnimationFrame(() => {
      setIsMounted(true);
    });
  }, [location]);

  return (
    <>
      <ScrollToTop />
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

      {/* Only render footer after the route has painted */}
      {isMounted && <Footer />}
    </>
  );
}


export default function App() {
  return (
    <ReactLenis root options={{ smooth: true, duration: 1.2 }}>
      <BrowserRouter>
        <RouteWithFooter />
      </BrowserRouter>
    </ReactLenis>
  );
}
