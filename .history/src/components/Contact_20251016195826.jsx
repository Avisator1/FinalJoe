import React from 'react'

function Contact() {
  return (
    <section className="bg-white me  mx-auto max-w-[115rem] px-10 py-32">
      {/* Header */}
      <div className="mb-20">
        <p className="text-xl mb-4 tracking-wide text-gray-800">04 CONTACT</p>
        <h2 className="text-[120px] font-[580] leading-none mb-8 text-black">
          Let's Connect
        </h2>
      </div>

      {/* Contact Content */}
      <div className="flex flex-col justify-between md:flex-row items-center gap-20">
        {/* Left Text */}
        <div className="md:w-1/2">
          <p className="text-3xl text-black leading-snug max-w-xl mb-16">
            Interested in working together or want to discuss a project? 
            Feel free to reach out through any of these platforms.
          </p>

          {/* Social Links */}
          <div className="mt-10">
            <p className="text-lg tracking-wide text-gray-700 mb-6 uppercase">
              Connect With Me
            </p>
            <div className="space-y-6">
              <a 
                href="https://www.instagram.com/j.mcdavid17/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center group-hover:bg-gray-800 transition duration-300">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <span className="text-2xl text-black font-[500] group-hover:text-gray-700 transition duration-300">
                  Instagram
                </span>
              </a>

              <a 
                href="https://www.linkedin.com/in/joe-mcdavid-a1454b2b3" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center group-hover:bg-gray-800 transition duration-300">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <span className="text-2xl text-black font-[500] group-hover:text-gray-700 transition duration-300">
                  LinkedIn
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Contact Info */}
        <div className="md:w-1/2">
          <div className="space-y-8">
            <div>
              <p className="text-lg tracking-wide text-gray-700 mb-2 uppercase">
                Email
              </p>
              <a 
                href="mailto:dmcdavid" 
                className="text-2xl text-black font-[500] hover:text-gray-700 transition duration-300"
              >
                hello@joemcdavid.com
              </a>
            </div>

            <div>
              <p className="text-lg tracking-wide text-gray-700 mb-2 uppercase">
                Location
              </p>
              <p className="text-2xl text-black font-[500]">
                Atlanta, Georgia
              </p>
            </div>

            <div>
              <p className="text-lg tracking-wide text-gray-700 mb-2 uppercase">
                Availability
              </p>
              <p className="text-2xl text-black font-[500]">
                Available for freelance projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact