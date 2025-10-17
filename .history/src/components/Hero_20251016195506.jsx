// Hero.jsx
import React from 'react'
import { ScreenFitText } from './ScreenToText'

function Hero() {
  return (
    <div className="relative bg-white mx-auto max-w-[115rem] h-screen overflow-hidden">
      {/* Centered Image */}
      <div className="absolute inset-0 flex items-center mb-45 justify-center">
        <img
          src="https://photos.adiavi.com/images/hero/joe.png"
          alt="joe mcdavid"
          className="w-[249.02px] h-[332.02px] object-cover"
        />
      </div>

      {/* Text at Bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <ScreenFitText>
          Joe McDavid
        </ScreenFitText>
      </div>
    </div>
  )
}

export default Hero
