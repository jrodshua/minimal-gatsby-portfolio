import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

const ProjectContainer = styled.article`
  width: 90%;
  margin: 3rem auto 4rem;
  h1 {
    margin: 0;
    font-size: 1.5rem;
    text-align: right;
  }
  .project-link {
    padding: 1rem 0;
    border: 1px solid rgb(0, 0, 0, 0.1);
    box-shadow: 0 2px 5px 0px rgb(0 0 0 / 20%);
    border-radius: 4px;
  }
  .project-img {
    margin: 0;
    height: auto;
    width: 100%;
    height: auto;
  }
  h2 {
    margin: 0;
    font-size: 1.125rem;
    font-weight: 800;
    padding: 0.5rem 0.5rem 0;
  }
  p {
    font-size: 0.9rem;
    margin: 0 auto 0.5rem;
    padding: 0 0.5rem 0.5rem;
    text-align: left;
    width: 100%;
    color: #000000;
  }
  ul {
    width: 100%;
    text-align: left;
    margin: 0 auto;
    padding-left: 2rem;
    font-size: 0.9rem;
    color: #000000;
  }
`

const Projects = ({ projectData, projectImg }) => {
  const { type, title, body, list } = projectData
  const image = projectImg[0].node.childImageSharp.gatsbyImageData

  return (
    <ProjectContainer>
      <h1>{type}</h1>
      <Link to="/" className="project-link">
        <GatsbyImage
          image={image}
          alt={`${title} website created by Josh Rodriguez`}
          className="project-img"
        />
        <h2>{title}</h2>
        <p>{body}</p>
        <ul>
          {list.map((item, index) => {
            return <li key={index}>{item}</li>
          })}
        </ul>
      </Link>
    </ProjectContainer>
  )
}

export default Projects
