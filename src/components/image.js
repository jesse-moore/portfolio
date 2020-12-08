import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

const Image = ({ source }) => {
  const data = useStaticQuery(
    graphql`
      query {
        images: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
          edges {
            node {
              extension
              relativePath
              childImageSharp {
                fixed(width: 450) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    `
  )

  const image = data.images.edges.find(
    image => image.node.relativePath === source
  )

  if (!image) {
    return <div>Picture not found</div>
  }

  return <Img fixed={image.node.childImageSharp.fixed} />
}

export default Image
