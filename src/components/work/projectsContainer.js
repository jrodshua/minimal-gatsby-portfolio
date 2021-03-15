import React, { useState, useEffect } from "react"
import { getProject } from "../../content/projectContent"
import { useProjectImg } from "../../hooks/useProjectImg"
import Projects from "./projects"
import styled from "styled-components"

const WorkWrapper = styled.div`
  width: 100%;
`

const ProjectsContainer = () => {
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
    <WorkWrapper>
      {data.usagi && data.usagiImg && (
        <Projects projectData={data.usagi} projectImg={data.usagiImg} />
      )}
      {data.plantFather && data.plantImg && (
        <Projects projectData={data.plantFather} projectImg={data.plantImg} />
      )}
      {data.jira && data.jiraImg && (
        <Projects projectData={data.jira} projectImg={data.jiraImg} />
      )}
    </WorkWrapper>
  )
}

export default ProjectsContainer
