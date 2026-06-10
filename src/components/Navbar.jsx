import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/patterns", label: "Patterns" },
    { to: "/about", label: "About" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-shell">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 sm:px-8 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
          <img
            src="/site-logo.png"
            alt=""
            className="w-10 h-10 rounded-full transition-transform duration-300 group-hover:rotate-12"
          />
          <span className="text-2xl sm:text-3xl alex-font text-cocoa">Kayti Krochets</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-8 text-lg">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className="nav-link">{l.label}</NavLink>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="sm:hidden flex flex-col gap-1.5 p-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className={`block w-6 h-0.5 bg-cocoa transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block w-6 h-0.5 bg-cocoa transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-cocoa transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden border-t border-shell bg-cream px-5 py-4 flex flex-col gap-4 text-lg">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className="nav-link" onClick={() => setOpen(false)}>
              {l.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
