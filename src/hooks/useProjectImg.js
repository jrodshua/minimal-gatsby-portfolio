import { useStaticQuery, graphql } from "gatsby"

export const useProjectImg = () => {
  const { allFile } = useStaticQuery(
    graphql`
      query ProjectImagesQuery {
        allFile {
          edges {
            node {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
              name
            }
          }
        }
      }
    `
  )
  return allFile
}
