// Hero.jsx
import React from 'react'
import { ScreenFitText } from './ScreenToText'
import joe from '../assets/images/image0.jpg'

function Hero() {
  return (
    <div className="relative bg-white mx-auto max-w-[115rem] h-screen overflow-hidden">

      {/* Centered Image */}
      <div
        className="
          absolute inset-0 flex items-center justify-center
          md:items-end md:pb-20
          sm:static sm:flex sm:items-center sm:justify-center sm:pt-20
        "
      >
        <img
          src={joe}
          alt="joe mcdavid"
          className="
            w-[1000.02px] h-[332.02px] object-cover
            md:w-[900px] md:h-[300px]

            sm:w-[90vw] sm:h-auto sm:max-h-[40vh]
            sm:object-contain
          "
        />
      </div>

      {/* Text at Bottom */}
      <div className="absolute bottom-0 left-0 w-full sm:static sm:pt-4 sm:text-center">
        <ScreenFitText>
          Joe McDavid
        </ScreenFitText>
      </div>

    </div>
  )
}

export default Hero
