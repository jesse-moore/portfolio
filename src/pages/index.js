import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import ProjectsContainer from "../components/projectsContainer"
import SEO from "../components/seo"
import Project from "../components/project"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allProjectsJson {
        nodes {
          description
          id
          links {
            code
            live
          }
          name
          techStack
          image
		  current
        }
      }
    }
  `)

  const projectsData = data.allProjectsJson.nodes || []
  const activeProjects = projectsData.filter(project => project.current)
  const pastProjects = projectsData.filter(project => !project.current)

  return (
    <Layout>
      <SEO title="Home" />
      <main className="main-container">
        <ProjectsContainer title="Current Projects">
          {activeProjects.map(projectData => {
            return <Project key={projectData.id} {...projectData} />
          })}
        </ProjectsContainer>
        <ProjectsContainer title="Past Projects">
          {pastProjects.map(projectData => {
            return <Project key={projectData.id} {...projectData} />
          })}
        </ProjectsContainer>
      </main>
    </Layout>
  )
}

export default IndexPage
