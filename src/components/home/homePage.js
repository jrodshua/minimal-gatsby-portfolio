import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const HomeWrapper = styled.section`
  border: 1px solid black;
  height: 90vh;
`

const HomeContainer = styled.div`
  border: 1px solid red;
  padding: 1.25rem 1.25rem 5rem 1.25rem;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 1.125rem;
    margin-bottom: 0;
    line-height: 1.5rem;
    border: 1px solid black;
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 0.25rem;
    border: 1px solid black;
  }

  p {
    margin: 0 0 1rem 0;
    line-height: 1.25rem;
    max-width: 310px;
  }

  .homePage-link {
    border: 1px solid #333333;
    width: 120px;
    font-size: 14px;
    padding: 7px 14px;
    text-align: center;
    border-radius: 4px;
  }
`

const HomePage = () => {
  return (
    <HomeWrapper>
      <HomeContainer>
        <h1>Hello, I'm Josh</h1>
        <h2>I'm a front end engineer</h2>
        <p>
          I build web applications using React, Gatsby, or Next.js with
          accessibility, user experience, and performance in mind
        </p>
        <Link to="/" className="homePage-link">
          Let's connect
        </Link>
      </HomeContainer>
    </HomeWrapper>
  )
}

export default HomePage
