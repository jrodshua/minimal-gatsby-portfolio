import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const HomeWrapper = styled.section`
  margin-top: 10vh;
  height: 90vh;
`

const HomeContainer = styled.div`
  max-width: 800px;
  padding: 1.25rem 1.5rem 5rem 1.5rem;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  h2 {
    font-size: 1.85rem;
    margin-bottom: 1rem;
    font-weight: 900;
  }

  p {
    margin: 0 0 2.25rem 0;
    font-size: 1rem;
    line-height: 1.95rem;
  }

  .homePage-link {
    border: 1px solid #333333;
    width: 100px;
    font-size: 0.85rem;
    padding: 8px 0;
    text-align: center;
    border-radius: 4px;
  }

  @media (min-width: 520px) {
    padding: 1.25rem 2.5rem 5rem 2.5rem;
    h1 {
      font-size: 18px;
      margin-bottom: 0.75rem;
    }
    h2 {
      font-size: 2.25rem;
      margin-bottom: 1.25rem;
    }
    p {
      font-size: 18px;
      line-height: 2rem;
      max-width: 500px;
    }
    .homePage-link {
      font-size: 0.95rem;
      width: 115px;
      padding: 9px 0;
    }
  }

  @media (min-width: 780px) {
    h1 {
      margin-bottom: 1.25rem;
    }
    h2 {
      font-size: clamp(40px, 5vw, 50px);
      margin-bottom: 1.75rem;
    }
    p {
      font-size: 18px;
      line-height: 2.5rem;
      max-width: 560px;
    }
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
