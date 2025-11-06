// Hero.jsx
import React from 'react'
import { ScreenFitText } from './ScreenToText'
import joe from '../assets/images/image0.jpg'

function Hero() {
  return (
    <>
      {/* Desktop Version - unchanged */}
      <div className="hidden md:block relative bg-white mx-auto max-w-[115rem] h-screen overflow-hidden">
        {/* Centered Image */}
        <div className="absolute inset-0 flex items-center mb-45 justify-center">
          <img
            src={joe}
            alt="joe mcdavid"
            className="w-[1000.02px] h-[332.02px] object-cover"
          />
        </div>

        {/* Text at Bottom */}
        <div className="absolute bottom-0 left-0 w-full">
          <ScreenFitText>
            Joe McDavid
          </ScreenFitText>
        </div>
      </div>

      {/* Mobile Version - completely new layout */}
      <div className="md:hidden relative bg-white h-screen flex flex-col items-center justify-center">
        {/* Centered Image */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src={joe}
            alt="joe mcdavid"
            className="max-w-[90vw] h-auto max-h-[40vh] object-cover"
          />
        </div>

        {/* Centered Text */}
        <div className="flex-1 flex items-start justify-center pt-8">
          <ScreenFitText>
            Joe McDavid
          </ScreenFitText>
        </div>
      </div>
    </>
  )
}

export default Hero