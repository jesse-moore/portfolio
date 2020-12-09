import React from "react"

export default function projectsContainer({ children, title }) {
  return (
    <div className="sections-container">
      <div className="section-header">
        <h3>{title}</h3>
      </div>
      <section className="projects-container">{children}</section>
    </div>
  )
}
