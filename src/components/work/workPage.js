import React from "react"
import { getImage } from "gatsby-plugin-image"
import { getProject } from "../../content/projectContent"
import { useProjectImg } from "../../hooks/useProjectImg"
import Projects from "./projects"
import styled from "styled-components"

const WorkWrapper = styled.section`
  width: 100%;
  height: 90vh;
  border: 1px solid rgb(0, 0, 0, 0.1);
`

const WorkPage = () => {
  const usagiObj = getProject("usagi")
  const { edges } = useProjectImg()
  const usagiImg = edges.filter(edge => edge.node.name === "project-usagi-d")

  return (
    <WorkWrapper id="work">
      <Projects projectData={usagiObj} projectImg={usagiImg} />
    </WorkWrapper>
  )
}

export default WorkPage
