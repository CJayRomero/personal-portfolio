import React from 'react'

export default function ProjectCard({ project }) {
  return (
    <article className="card">
      <h3>{project.title}</h3>
      <p>{project.desc}</p>
      <p><strong>Tech:</strong> {project.tech}</p>
      <div>
        {project.repo && <a href={project.repo} target="_blank" rel="noreferrer">View Repo</a>}
        {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Live Demo</a>}
      </div>
    </article>
  )
}
