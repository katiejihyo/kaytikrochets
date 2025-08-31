import React from 'react'
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 md:px-12 py-4 bg-[#fcfaff]">

      {/* Logo portion */}
      <Link to="/" className="flex items-center space-x-3 cursor-pointer home-nav-button">
        <img src="/site-logo.png" alt="Logo" className="w-10 h-10 rounded-full" />
        <p className="text-xl md:text-2xl alex-font">Kayti Krochets</p>
      </Link>

      {/* Nav buttons  */}
      <div className="flex space-x-6 md:space-x-8 text-base md:text-lg">
        <button className="nav-button">
          <Link to="/pages/AllPatterns">Patterns</Link>
        </button>
        <button className="nav-button">
          <Link to="/pages/AboutMe">About</Link>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
