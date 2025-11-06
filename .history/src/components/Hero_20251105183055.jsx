// Hero.jsx
import React from 'react'
import { ScreenFitText } from './ScreenToText'
import joe from '../assets/images/image0.jpg'

function Hero() {
  return (
    <div className="relative bg-white mx-auto max-w-[115rem] h-screen overflow-hidden">
      {/* Main container with flex column */}
      <div className="h-full flex flex-col items-center justify-center md:justify-center md:pb-0">
        {/* Image container */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src={joe}
            alt="joe mcdavid"
            className="w-[1000.02px] h-[332.02px] object-cover 
                     md:w-[1000.02px] md:h-[332.02px]
                     sm:max-w-[90vw] sm:h-auto sm:max-h-[40vh]"
          />
        </div>

        {/* Text positioned right below the image */}
        <div className="w-full py-8 md:absolute md:bottom-0 md:py-0">
          <ScreenFitText>
            Joe McDavid
          </ScreenFitText>
        </div>
      </div>
    </div>
  )
}

export default Hero