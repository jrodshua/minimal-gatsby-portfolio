import React from "react"
import styled from "styled-components"

const StyledWrapper = styled.section`
  height: 90vh;
  background: #ffffff;
`
const StyledContainer = styled.div`
  max-width: 800px;
  padding: 0 1.5rem 10rem;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const AboutPage = () => {
  return (
    <StyledWrapper>
      <StyledContainer>
        <h1>About Me</h1>
        <p>Hello I'm Josh, a software engineer based in Las Vegas, NV.</p>
        <p>
          I enjoy creating things that live on the internet, whether that be
          websites, applications, or anything in between. My goal is to always
          build products that provide pixel-perfect, performant experiences.
        </p>
        <p>
          Shortly after graduating from Northeastern University, I joined the
          engineering team at BlankBlank where I work on a wide variety of
          interesting and meaningful projects on a daily basis.
        </p>
      </StyledContainer>
    </StyledWrapper>
  )
}

export default AboutPage
