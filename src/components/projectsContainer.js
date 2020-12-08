import React from "react"

export default function projectsContainer({ children }) {
  return (
    <div className="sections-container">
      <div className="section-header">
        <h3>Projects</h3>
      </div>
      <section className="projects-container">{children}</section>
    </div>
  )
}
