import React, { useState } from "react";
import { motion } from "framer-motion";

// Your current images
import project1 from "../assets/projects/2025-08-14 00_22_56-Window.png";
import project2 from "../assets/projects/2025-08-14 00_35_11-Window.png";
import project3 from "../assets/projects/2025-08-14 00_35_34-Window.png";

// New additional projects (add your new image files here)
import project4 from "../assets/projects/2025-08-14 00_36_26-Window.png";
import project5 from "../assets/projects/2025-08-14 00_37_12-Window.png";
import project6 from "../assets/projects/2025-10-14 23_13_01-Window.png";

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      title: "Y2K Designs",
      image: project1,
    },
    {
      title: "Digital Illustrations",
      image: project2,
    },
    {
      title: "Sketches",
      image: project3,
    },
    {
      title: "T-Shirt Designs & mockups",
      image: project4,
    },
    {
      title: "T-Shirt Designs & mockups",
      image: project5,
    },
    {
      title: "3D",
      image: project6,
    },
  ];

  return (
    <motion.section
      className="projects-section container"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1 className="projects-title">Graphic Design Works 🎨</h1>
      <p className="projects-subtitle">
        A showcase of my creative design projects — blending imagination and visual storytelling.
      </p>

      <div className="gallery-grid">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            className="gallery-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="gallery-image">
              <img src={proj.image} alt={proj.title} />
              <div className="overlay">
                <h3>{proj.title}</h3>
                <button
                  className="view-btn"
                  onClick={() => setSelectedImage(proj.image)}
                >
                  👁️ View
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Image Modal Preview */}
      {selectedImage && (
        <motion.div
          className="modal"
          onClick={() => setSelectedImage(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="modal-content"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <img src={selectedImage} alt="Preview" />
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  );
}
