import React from 'react'
import { motion } from "framer-motion";
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
<motion.section
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  transition={{ duration: 0.5, ease: "easeOut" }}
>
  { <section>
      <h2>Aspiring Graphic Artist / Designer</h2>
      <p>Hi, I’m Christian Jay Romero — a passionate graphic artist and designer inspired by Y2K Futurism and Frutiger Aero aesthetics. I love blending nostalgic, retro-futuristic visuals with modern creativity, designing logos, illustrations, and immersive textures for games. I’m currently learning 3D modeling, PBR texturing, and motion graphics to expand my creative skills. My goal is to craft visuals that spark imagination, capture emotion, and leave a lasting impression.</p>
      <p>🎮 I love to play videogames</p>

      <h3>🔄 Currently Learning / Working On</h3>
      <ul>
        
        <li>UI/UX designing</li>
        <li>CSS and HTML</li>
        <li>PBR workflows material creation</li>
      </ul>
    </section>}
</motion.section>
  )
}
