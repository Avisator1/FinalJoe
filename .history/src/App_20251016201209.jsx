import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ReactLenis } from 'lenis/react'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Home from './pages/Home'
import Navbar from './components/Navbar'
import Japan from './pages/Japan'
import Oregon from './pages/Oregon'
import Ireland from './pages/Ireland'
import Scotland from './pages/Scotland'
import Cayman from './pages/Cayman'
import Cars from './pages/Cars'
import Flowers from './pages/Flowers'
import Fireworks from './pages/Fireworks'
import Club from './pages/Club'
import Footer from './components/Footer';


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


const App = () => {
  return (
    <ReactLenis root options={{ smooth: true, duration: 1.2 }}>
      <BrowserRouter>
      <ScrollToTop />

        <Routes>

          <Route index element={<Home />} />
          <Route path='/japan' element={<Japan />} />
          <Route path='/oregon' element={<Oregon />} />
          <Route path='/ireland' element={<Ireland />} />
          <Route path='/scotland' element={<Scotland />} />
          <Route path='/cayman' element={<Cayman />} />
          <Route path='/cars' element={<Cars />} />
          <Route path='/flowers' element={<Flowers />} />
          <Route path='/fireworks' element={<Fireworks />} />
          <Route path="/club" element={<Club />} />
        </Routes>
      </BrowserRouter>

      <Footer />

    </ReactLenis>
  )
}

export default App
