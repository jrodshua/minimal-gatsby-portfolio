import React from "react"
import ProjectsContainer from "./projectsContainer"
import styled from "styled-components"

const StyledWrapper = styled.section`
  .workIndex-container {
    background: rgb(51, 51, 51);
    color: #ffffff;
    padding: 1rem 1.5rem;
    p {
      margin-bottom: 0;
      font-size: 0.9rem;
      color: #ffffff;
    }
    h1 {
      font-size: 1.25rem;
    }
  }
`

const WorkIndex = () => {
  return (
    <StyledWrapper id="work">
      <div className="workIndex-container">
        <p>a few</p>
        <h1>client and personal projects</h1>
      </div>
      <ProjectsContainer />
    </StyledWrapper>
  )
}

export default WorkIndex
