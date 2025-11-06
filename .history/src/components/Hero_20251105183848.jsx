// Hero.jsx
import React from 'react'
import { ScreenFitText } from './ScreenToText'
import joe from '../assets/images/image0.jpg'

function Hero() {
  return (
    <div className="relative bg-white mx-auto max-w-[115rem] h-screen overflow-hidden">

      {/* Centered Image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={joe}
          alt="joe mcdavid"
          className="
            w-[1000.02px] h-[332.02px] object-cover
            sm:w-[100vw] sm:h-[50vh] sm:object-cover
          "
        />
      </div>

      {/* Text at Bottom — exact desktop behavior kept */}
      <div className="
        absolute bottom-0 left-0 w-full 
        sm:relative sm:bottom-auto sm:pt-4 sm:bg-white sm:text-center
      ">
        <ScreenFitText>
          Joe McDavid
        </ScreenFitText>
      </div>

    </div>
  )
}

export default Hero
