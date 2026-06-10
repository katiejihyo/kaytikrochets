import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const socials = [
  { href: "https://www.youtube.com/@kaytikrochets", icon: "/youtube.svg", label: "YouTube", handle: "@kaytikrochets" },
  { href: "https://www.instagram.com/kaytikrochets/", icon: "/instagram.svg", label: "Instagram", handle: "@kaytikrochets" },
  { href: "mailto:kaytikrochets@gmail.com", icon: "/mail-icon.svg", label: "Email", handle: "kaytikrochets@gmail.com" },
];

const AboutMe = () => {
  useEffect(() => { document.title = "About · Kayti Krochets"; }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-4xl w-full mx-auto px-5 sm:px-8 py-12">
        <div className="text-center mb-12">
          <p className="eyebrow mb-3">The maker behind the hook</p>
          <h1 className="alex-font text-5xl sm:text-6xl text-cocoa">About Me</h1>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
          <img
            src="/images/profile.png"
            alt="Katie, the crochet designer behind Kayti Krochets"
            className="rounded-3xl w-64 md:w-72 shadow-md border-4 border-white"
          />
          <div className="text-center md:text-left">
            <h2 className="alex-font text-4xl text-cocoa mb-4">Hi, I'm Katie — aka Kayti</h2>
            <p className="jeju-font text-cocoa-soft leading-relaxed mb-4">
              I'm a crochet enthusiast who's been sharing original designs on YouTube since 2022.
            </p>
            <p className="jeju-font text-cocoa-soft leading-relaxed mb-4">
              I made this site to gather all my patterns in one cozy place, each paired with a video
              tutorial. Whether you're a seasoned crocheter or you've never picked up a hook, I hope
              you find something here that inspires you. 💗
            </p>
            <p className="jeju-font text-cocoa-soft leading-relaxed">
              Thanks for stopping by — happy crocheting! 🧶✨
            </p>
          </div>
        </div>

        <hr className="stitch-line stitch-line--sage mb-12" />

        <div className="text-center mb-8">
          <p className="eyebrow mb-3">Say hello</p>
          <h2 className="alex-font text-4xl text-cocoa">Contacts & Socials</h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl border border-shell p-6 flex flex-col items-center gap-3 hover:-translate-y-1 hover:shadow-md transition"
            >
              <span className="social-btn"><img src={s.icon} alt="" /></span>
              <span className="jeju-font text-sm text-cocoa-soft">{s.label}</span>
              <span className="jeju-font text-cocoa text-sm break-all text-center">{s.handle}</span>
            </a>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default AboutMe
