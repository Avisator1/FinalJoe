// Hero.jsx
import React from 'react'
import { ScreenFitText } from './ScreenToText'
import joe from '../assets/images/image0.jpg'

function Hero() {
  return (
    <div className="relative bg-white mx-auto max-w-[115rem] min-h-screen flex flex-col justify-end overflow-hidden">

      {/* Image Section */}
      <div className="flex items-center justify-center flex-1 px-4">
        <img
          src={joe}
          alt="joe mcdavid"
          className="object-cover
                     w-[1000px] h-[332px]
                     md:w-[900px] md:h-[300px]
                     sm:w-full sm:h-auto sm:max-h-[45vh]"
        />
      </div>

      {/* Text Section */}
      <div className="w-full pb-6 text-center sm:pb-4">
        <ScreenFitText>
          Joe McDavid
        </ScreenFitText>
      </div>
    </div>
  )
}

export default Hero
