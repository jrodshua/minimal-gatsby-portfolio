import React, { useState, useEffect } from "react"
import { getProject } from "../../content/projectContent"
import { useProjectImg } from "../../hooks/useProjectImg"
import Projects from "./projects"
import styled from "styled-components"

const StyledWrapper = styled.section`
  height: 100%;
  margin: 0;
  .workIndex-container {
    height: 480px;
    background: #ff6a3d;
    color: #1a2238;
    padding: 0.25rem 1.5rem;
    position: sticky;
    top: 82px;
    z-index: 1;
    p {
      margin: 0.25rem 0 0;
      font-size: 0.9rem;
      color: #1a2238;
      font-weight: 600;
    }
    h1 {
      font-size: 1.25rem;
      margin-bottom: 1rem;
      line-height: 1.25rem;
    }
  }

  .project-usagi {
    background-color: #ffffff;
    color: #1a2238;
    border: 2px solid #1a2238;
    position: sticky;
    top: 140px;
    z-index: 2;
    height: 600px;
    margin-top: -15rem;
  }

  .project-plant {
    background-color: #ffffff;
    color: #1a2238;
    border: 2px solid #1a2238;
    height: 590px;
    position: sticky;
    top: 190px;
    z-index: 3;
  }

  .project-jira {
    background-color: #ffffff;
    color: #1a2238;
    border: 2px solid #1a2238;
    height: 580px;
    position: sticky;
    top: 240px;
    z-index: 4;
  }

  .project-blank {
    background-color: transparent;
    height: 100px;
    position: sticky;
    z-index: 5;
  }
`

const WorkIndex = () => {
  const [data, setData] = useState({
    usagi: null,
    usagiImg: null,
    plantFather: null,
    plantImg: null,
    jira: null,
    jiraImg: null,
  })

  const { edges } = useProjectImg()

  useEffect(() => {
    const usagi = getProject("usagi")
    const plant = getProject("plantFather")
    const jira = getProject("jira")
    const usagiImg = edges.filter(edge => edge.node.name === "project-usagi-d")
    const plantImg = edges.filter(
      edge => edge.node.name === "project-plantFather-d"
    )
    const jiraImg = edges.filter(edge => edge.node.name === "project-jira-d")

    setData({
      usagi: usagi,
      usagiImg: usagiImg,
      plantFather: plant,
      plantImg: plantImg,
      jira: jira,
      jiraImg: jiraImg,
    })
  }, [])

  return (
    <StyledWrapper id="work">
      <div className="workIndex-container">
        <p>a few</p>
        <h1>client and personal projects</h1>
        <p>
          This is a typical personal web design portfolio which is a collection
          of character design, personal profile, display of works and
          achievement showcase. It can be considered as a classic example of
          portfolio design with personal works and experience.
        </p>
      </div>
      {data.usagi && data.usagiImg && (
        <div className={data.usagi.projectClass}>
          <Projects projectData={data.usagi} projectImg={data.usagiImg} />
        </div>
      )}
      {data.plantFather && data.plantImg && (
        <div className={data.plantFather.projectClass}>
          <Projects projectData={data.plantFather} projectImg={data.plantImg} />
        </div>
      )}
      {data.jira && data.jiraImg && (
        <div className={data.jira.projectClass}>
          <Projects projectData={data.jira} projectImg={data.jiraImg} />
        </div>
      )}
      <div className="project-blank" />
    </StyledWrapper>
  )
}

export default WorkIndex
