import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const AboutMe = () => {
  useEffect(() => {
    document.title = "Kayti Krochets - About Me";
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center px-6 sm:px-12 md:px-24 lg:px-40 py-10">
        <p className="text-center alex-font text-4xl pt-8 mb-2">About Me</p>
        <h2 className="alex-font font-bold text-xl text-center mb-6">Katie – aka 'Kayti'</h2>

        <div className="flex flex-col md:flex-row items-center gap-10 mb-12">
          <img
            src="/images/profile.png"
            alt="Katie profile"
            className="rounded-3xl w-72 md:w-80"
          />
          <div className="mt-4 text-center md:text-left">
            <p className="jeju-font mb-4">
              My name's Katie (aka Kayti), and I'm a crochet enthusiast who has been sharing my designs on YouTube since 2022!
            </p>
            <p className="jeju-font mb-4">
              I created this site to share all my original crochet designs, along with video tutorials on my YouTube channel.
              Whether you're a crochet veteran or have never touched a crochet hook before coming across my page,
              I hope you find something here that inspires you 💗
            </p>
            <p className="jeju-font">
              Thanks for stopping by – happy crocheting! 🧶✨
            </p>
          </div>
        </div>

        <p className="text-center alex-font text-4xl pt-12 mb-4">Contacts & Socials</p>

        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-4">
            <a href="https://www.youtube.com/@kaytikrochets" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
              <img src="/youtube.svg" alt="YouTube" className="footer-button w-8 h-8" />
              <span className="jeju-font text-lg">@kaytikrochets</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/kaytikrochets/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
              <img src="/instagram.svg" alt="Instagram" className="footer-button w-8 h-8" />
              <span className="jeju-font text-lg">@kaytikrochets</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a href="mailto:kaytikrochets@gmail.com" className="flex items-center gap-4">
              <img src="/mail-icon.svg" alt="Email" className="footer-button w-8 h-8" />
              <span className="jeju-font text-lg">kaytikrochets@gmail.com</span>
            </a>
          </div>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default AboutMe
