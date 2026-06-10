import React from 'react'

const socials = [
  { href: "https://www.youtube.com/@kaytikrochets", icon: "/youtube.svg", label: "YouTube" },
  { href: "https://www.instagram.com/kaytikrochets/", icon: "/instagram.svg", label: "Instagram" },
  { href: "mailto:kaytikrochets@gmail.com", icon: "/mail-icon.svg", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="bg-cream mt-auto">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
        <hr className="stitch-line mb-8" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img src="/site-logo.png" alt="" className="w-9 h-9 rounded-full" />
            <span className="alex-font text-2xl text-cocoa">Kayti Krochets</span>
          </div>

          <div className="flex gap-3">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label={s.label}>
                <img src={s.icon} alt="" />
              </a>
            ))}
          </div>

          <p className="text-sm text-cocoa-soft jeju-font text-center sm:text-right">
            © 2025 Kayti Krochets · Made with 🧶
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
