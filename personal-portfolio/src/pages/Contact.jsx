import React from 'react'
import { motion } from "framer-motion";
import { NavLink } from 'react-router-dom'

export default function Contact() {
  return (
    <motion.section
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  transition={{ duration: 0.5, ease: "easeOut" }}
>
  {<section>
      <h1>Contact</h1>
      <p>You can reach me through the following:</p>
      <ul>
        
        <li>Email: [YourEmailHere@example.com]</li>
        <li>Facebook: <a href="#" target="_blank">Your Facebook Link</a></li>
        <li>Instagram: <a href="#" target="_blank">@yourhandle</a></li>
      </ul>
    </section>}
</motion.section>
    
  )
}
