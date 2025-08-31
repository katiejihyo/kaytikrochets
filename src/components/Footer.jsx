import React from 'react'


const Footer = () => {
  return (
    <footer className="bg-white h-40">
      <div className="pb-10" />

      <div className="w-14/15 mx-auto">
        {/* Line */}
        <div className="h-0.25 bg-black mb-6" />

        {/* Aligned content */}
        <div className="flex justify-between items-center">
          <div className="flex gap-3">
            <a href="https://www.youtube.com/@kaytikrochets">
              <img src="/youtube.svg" className="footer-button" />
            </a>
            <a href="https://www.instagram.com/kaytikrochets/">
              <img src="/instagram.svg" className="footer-button" />
            </a>
            <a href="mailto:kaytikrochets@gmail.com">
              <img src="/mail-icon.svg" className="footer-button" />
            </a>
          </div>

          {/* Right side: copyright */}
          <div className="text-sm text-gray-700 jeju-font">
            © 2025 Kayti Krochets. All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
