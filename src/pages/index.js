import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import ProjectsContainer from "../components/projectsContainer"
// import Image from "../components/image"
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
        }
      }
    }
  `)

  const projectsData = data.allProjectsJson.nodes || []

  return (
    <Layout>
      <SEO title="Home" />
      <main className="main-container">
        <ProjectsContainer>
          {projectsData.map(projectData => {
            return <Project key={projectData.id} {...projectData} />
          })}
        </ProjectsContainer>
      </main>
    </Layout>
  )
}

export default IndexPage
