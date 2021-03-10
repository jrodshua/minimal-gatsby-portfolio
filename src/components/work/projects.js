import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

const ProjectContainer = styled.div`
  height: 100%;
  padding: 0 0.5rem;
  .project-snapshot {
    height: 100%;
    width: 95%;
    max-width: 460px;
    margin: auto;
    padding-top: 0.5rem;

    h3 {
      font-size: 0.9rem;
      font-weight: 900;
      color: #000000;
      text-align: right;
      width: 90%;
      margin: 0.5rem auto 1rem;
      border-bottom: 1px solid rgb(0, 0, 0, 0.1);
    }
    span {
      font-size: 0.85rem;
      font-weight: 600;
    }
    .project-img {
      margin: 0.5rem auto 0;
      height: auto;
      width: 100%;
      height: auto;
      box-shadow: 0 2px 5px 0px rgb(0 0 0 / 15%);
      border: 1px solid rgb(0, 0, 0, 0.1);
    }
    p {
      font-size: 0.9rem;
      margin: 0 auto 0.5rem;
      padding: 0.5rem;
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
  }
`

const Projects = ({ projectData, projectImg }) => {
  const { title, body, list } = projectData
  const image = projectImg[0].node.childImageSharp.gatsbyImageData

  return (
    <ProjectContainer>
      <div className="project-snapshot">
        <Link to="/">
          <h3>
            <span>client work:</span> {title}
          </h3>
          <GatsbyImage
            image={image}
            alt="Project created by Josh Rodriguez"
            className="project-img"
          />
          <p>{body}</p>
          <ul>
            {list.map((item, index) => {
              return <li key={index}>{item}</li>
            })}
          </ul>
        </Link>
      </div>
    </ProjectContainer>
  )
}

export default Projects
