import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

export default function Contact() {
  return (
    <motion.section
      className="contact-section container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h1 className="contact-title">Contact</h1>
      <p className="contact-subtitle">
        You can reach me through the following:
      </p>

      <ul className="contact-list">
        <li>
          <strong>Email:</strong> christianjayromero0101@gmail.com
        </li>
        <li>
          <strong>Facebook:</strong>{" "}
          <a href="https://www.facebook.com/CJ.romero.0201/" target="_blank" rel="noreferrer">
            facebook.com/CJ.romero
          </a>
        </li>
        <li>
          <strong>Instagram:</strong>{" "}
          <a href="#" target="_blank" rel="noreferrer">
            @yourhandle
          </a>
        </li>
      </ul>

      <h2 className="connect-title">Connect with Me</h2>
      <div className="social-links">
        <motion.a
          href="https://www.linkedin.com/in/yourprofile"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="social-icon linkedin"
        >
          <FaLinkedin size={32} />
        </motion.a>

        <motion.a
          href="https://github.com/CJayRomero"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="social-icon github"
        >
          <FaGithub size={32} />
        </motion.a>

        <motion.a
          href="https://www.facebook.com/CJ.romero.0201/"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="social-icon facebook"
        >
          <FaFacebook size={32} />
        </motion.a>
      </div>
    </motion.section>
  );
}
