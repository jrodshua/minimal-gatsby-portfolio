import React from "react"
import styled from "styled-components"
import Social from "../layout/social"

const Section = styled.section`
  border: 1px solid black;
  padding-top: 5rem;
  padding-bottom: 4.5rem;

  .hero-container {
    margin: 0 1.575rem;
    display: flex;
    flex-direction: column;
    border: 1px solid red;
  }

  .mobile-hero-icons {
    display: flex;
    margin-top: 2rem;

    a {
      padding: 0.5rem 0.7rem;

      &:active {
        svg {
          fill: #ff6340;
        }
      }
    }

    svg {
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.sm}) {
    .mobile-hero-icons {
      display: none;
    }
  }
`

// display: flex;
// justify-content: space-between;
// width: 50%;
// max-width: 250px;
// margin: 2rem 0 0;
// border: 1px solid black;

const Hero = () => {
  return (
    <Section className="hero">
      <div className="max-width-page">
        <div className="hero-container">
          <h1>Hello, I'm Josh</h1>
          <h2>
            I'm a front end developer and cold weather person based in Las
            Vegas, NV
          </h2>
          <p>
            When I'm not building stuff for the web, I'm usually trying to
            decide if I should walk my dog at 7pm in 105&deg; weather or at 8pm
            in 103&deg; weather
          </p>
          <Social iClass="mobile-hero-icons" />
        </div>
      </div>
    </Section>
  )
}

export default Hero
