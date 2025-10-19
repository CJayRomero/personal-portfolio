import React from "react"
import { NavLink } from "react-router-dom"

export default function Header({ darkMode, setDarkMode }) {
  return (
    <header className="header">
      <nav className="nav-container">
        {/* Left side: logo + links */}
        <div className="nav-left">
          <h3 className="logo">My Portfolio</h3>
          <ul className="nav-links">
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
            <li><NavLink to="/skills">Skills</NavLink></li>
            <li><NavLink to="/resume">Resume</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>

        {/* Right side: dark-mode toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="dark-toggle"
          title="Toggle dark mode"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </nav>
    </header>
  )
}
