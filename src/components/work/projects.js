import React from "react"
import { Link } from "gatsby"
import IconComp from "../icons/iconComp"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

const ProjectContainer = styled.article`
  width: 100%;

  h1 {
    margin: 0;
    font-size: 1.25rem;
    text-align: center;
    padding: 0 0.5rem;
  }

  .project-link {
    padding: 1rem 0;
  }

  .project-img {
    margin: 0;
    height: auto;
    width: 100%;
  }
  h2 {
    margin: 0;
    font-size: 0.95rem;
    font-weight: 800;
    padding: 0rem 1.25rem 0;
  }
  p {
    font-size: 0.75rem;
    margin: 0 auto 0.5rem;
    padding: 0 1.25rem 0;
    text-align: left;
    width: 100%;
    color: #1a2238;
    font-weight: 600;
  }
  ul {
    width: 100%;
    padding: 0 1.25rem;
  }
  li {
    color: #1a2238;
  }
  svg {
    margin: 0 1.75rem 0.125rem 0;
    fill: #1a2238;
  }
`

const Projects = ({ projectData, projectImg }) => {
  const { type, title, body, list, projectClass } = projectData
  const image = projectImg[0].node.childImageSharp.gatsbyImageData

  return (
    <ProjectContainer>
      <Link to="/" className="project-link">
        <h1>{type}</h1>
        <GatsbyImage
          image={image}
          alt={`${title} website created by Josh Rodriguez`}
          className="project-img"
        />
        <h2>{title}</h2>
        <p>{body}</p>
        <ul>
          {list.map((item, index) => {
            return (
              <li key={index}>
                <IconComp
                  iWidth={6}
                  iHeight={6}
                  iViewBox="0 0 24 24"
                  iPathD="M5 3l3.057-3L20 12 8.057 24 5 21l9-9z"
                />
                {item}
              </li>
            )
          })}
        </ul>
      </Link>
    </ProjectContainer>
  )
}

export default Projects
