import React from 'react'
import { Link } from 'react-router-dom'

const HomeMain = () => {
  return (
    <section className="relative overflow-hidden">
      {/* soft tonal background */}
      <div className="absolute inset-0 bg-gradient-to-b from-lavender/60 via-cream to-cream -z-10" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left: copy */}
          <div className="text-center md:text-left">
            <p className="eyebrow mb-4">Free crochet designs</p>
            <h1 className="alex-font text-6xl sm:text-7xl lg:text-8xl text-cocoa leading-[0.95]">
              Kayti Krochets
            </h1>
            <p className="jeju-font text-lg sm:text-xl text-cocoa-soft mt-6 max-w-md mx-auto md:mx-0">
              Cozy, original crochet patterns — every one with written steps
              and a video tutorial. Grab your hook and make something lovely.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-9">
              <Link to="/patterns" className="btn-primary">Browse patterns</Link>
              <a
                href="https://www.youtube.com/@kaytikrochets"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                Watch on YouTube
              </a>
            </div>
          </div>

          {/* Right: layered image collage */}
          <div className="relative h-[420px] sm:h-[480px] hidden md:block">
            <img
              src="/images/star-tote-bag.jpg"
              alt="Crocheted star tote bag"
              className="absolute top-0 right-4 w-64 h-72 object-cover rounded-3xl shadow-lg rotate-3 border-4 border-white"
            />
            <img
              src="/images/star-warmer.jpg"
              alt="Crocheted star wrist warmers"
              className="absolute bottom-0 left-0 w-60 h-60 object-cover rounded-3xl shadow-lg -rotate-6 border-4 border-white"
            />
            <img
              src="/images/miffy.jpg"
              alt="Amigurumi bunny"
              className="absolute bottom-6 right-2 w-52 h-52 object-cover rounded-3xl shadow-lg rotate-6 border-4 border-white"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeMain
