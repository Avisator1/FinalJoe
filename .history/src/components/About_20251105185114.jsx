import React from 'react'

function About() {
  return (
    <>
      {/* Desktop Version - exactly as you had it */}
      <div className='hidden md:block text-center me max-w-6xl py-40 mx-auto'>
        <p className='text-xl'>01. ABOUT ME</p>
        <p className='text-6xl font-[580]'>Hi, I'm Joe McDavid, an independent photographer based in Atlanta, Georgia, who believes that photography is a way to capture moments, tell stories, and express the world through my own lens.</p>
      </div>

      {/* Mobile Version - optimized for small screens */}
      <div className='md:hidden me text-center max-w-6xl py-20 mx-auto px-6'>
        <p className='text-lg mb-6'>01. ABOUT ME</p>
        <p className='text-2xl font-[580] leading-relaxed'>Hi, I'm Joe McDavid, an independent photographer based in Atlanta, Georgia, who believes that photography is a way to capture moments, tell stories, and express the world through my own lens.</p>
      </div>
    </>
  )
}

export default About