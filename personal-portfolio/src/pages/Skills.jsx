import React from 'react'
import { motion } from "framer-motion";
import { NavLink } from 'react-router-dom'

export default function Skills() {
  return (
    <section className="skills-section container">
      <h1 className="skills-title">
        My Tools <span className="emoji">🧰</span>
      </h1>
      <p className="skills-subtitle">
        Creative and development tools I use to bring ideas to life.
      </p>

      {/* ===== SKILL CATEGORIES ===== */}
      <div className="skills-grid">
        <div className="skills-category">
          <h3>Creative Tools</h3>
          <ul>
            <li>Photoshop</li>
            <li>Illustrator</li>
            <li>Premiere Pro</li>
            <li>Blender</li>
            <li>Figma</li>
          </ul>
        </div>

        <div className="skills-category">
          <h3>Dev Tools</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>PHP</li>
            <li>Laravel</li>
            <li>VS Code</li>
          </ul>
        </div>

        <div className="skills-category">
          <h3>Design Skills</h3>
          <ul>
            <li>UI/UX Design</li>
            <li>Logo Design</li>
            <li>3D Modeling</li>
            <li>PBR Texturing</li>
            <li>Motion Graphics</li>
          </ul>
        </div>
      </div>

      {/* ===== EXPERIENCE SECTION ===== */}
      <div className="experience-section">
        <h2 className="experience-title">
          <span className="emoji">🧳</span> Experience
        </h2>

        <div className="experience-list">
          <div className="experience-card">
            <div className="experience-header">
              <h3>Freelance Graphic Designer</h3>
              <span>2023</span>
            </div>
            <p className="company">Self-Employed</p>
            <p className="description">
              Creating brand identities, logos, and marketing materials for small businesses and startups.
              Specializing in minimalist and modern design approaches.
            </p>
          </div>

          <div className="experience-card">
            <div className="experience-header">
              <h3>Creativity Committee Head</h3>
              <span>2025 - Present</span>
            </div>
            <p className="company">Digital Studio</p>
            <p className="description">
              As the Creativity Committee Head, I lead and inspire a team of artists and designers to develop innovative visual concepts, event materials, and creative campaigns. I ensure every project reflects originality, collaboration, and strong attention to detail while promoting artistic growth and creative excellence within the team.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}