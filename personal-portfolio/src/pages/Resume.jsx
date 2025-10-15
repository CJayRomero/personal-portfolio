import React from 'react'
import { motion } from "framer-motion";
import { NavLink } from 'react-router-dom'

export default function Resume() {
  return (

    <motion.section
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  transition={{ duration: 0.5, ease: "easeOut" }}
>
  {<section>
    
      <h1>Resume</h1>
      <p>Download my professional resume below:</p>
      <a href="personal-portfolio\public\resume.pdf" download className="btn">Download Resume (PDF)</a>
    </section>}
</motion.section>

  )
}
