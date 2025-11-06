// Hero.jsx
import React from 'react'
import { ScreenFitText } from './ScreenToText'
import joe from '../assets/images/image0.jpg'

function Hero() {
  return (
    <div className="relative bg-white mx-auto max-w-[115rem] h-screen overflow-hidden sm:min-h-screen">

      {/* Centered Image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={joe}
          alt="joe mcdavid"
          className="
            object-cover
            w-[1000.02px] h-[332.02px]            /* ✅ Desktop EXACT same */
            lg:w-[1000.02px] lg:h-[332.02px]

            md:w-[90vw] md:h-[300px]              /* ✅ Tablets scale down slightly */
            sm:w-[100vw] sm:h-[50vh]              /* ✅ Mobile dramatic hero */
            sm:object-cover                       /* ✅ Still bold, slight crop ok */
          "
        />
      </div>

      {/* Text at Bottom */}
      <div className="absolute bottom-0 left-0 w-full sm:static sm:text-center sm:pt-3 sm:pb-3">
        <ScreenFitText>
          Joe McDavid
        </ScreenFitText>
      </div>

    </div>
  )
}

export default Hero
