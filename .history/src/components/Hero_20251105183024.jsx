// Hero.jsx
import React from 'react'
import { ScreenFitText } from './ScreenToText'
import joe from '../assets/images/image0.jpg'

function Hero() {
  return (
    <div className="relative bg-white mx-auto max-w-[115rem] h-screen overflow-hidden">
      {/* Centered Image */}
      <div className="absolute inset-0 flex items-center justify-center 
                     md:mb-45
                     sm:mb-0">
        <img
          src={joe}
          alt="joe mcdavid"
          className="w-[1000.02px] h-[332.02px] object-cover 
                   md:w-[1000.02px] md:h-[332.02px]
                   sm:max-w-[90vw] sm:h-auto sm:max-h-[40vh]"
        />
      </div>

      {/* Text - Positioned much lower, just above bottom on mobile */}
      <div className="absolute left-0 w-full
                     md:bottom-0
                     sm:top-[80vh]">
        <ScreenFitText>
          Joe McDavid
        </ScreenFitText>
      </div>
    </div>
  )
}

export default Hero