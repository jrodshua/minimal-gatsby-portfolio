import React from "react"
import styled from "styled-components"
import Social from "../layout/social"
import HeroTextAni from "../layout/heroTextAni"

const Section = styled.section`
  padding: 2.5rem 0 3.75rem;

  .hero-container {
    width: 88%;
    margin: 0 auto;

    h1 {
      font-size: 1.1rem;
      color: #282828;
      padding-bottom: 30px;
      font-weight: 500;
      letter-spacing: 0.5px;
    }

    .hero-span {
      display: block;
    }

    h2 {
      font-size: 1.3rem;
      color: #000;
      line-height: 36px;
      display: inline;
      font-weight: 300;
      color: #000;
    }

    p {
      display: inline;
      font-size: 1.3rem;
      margin: 0;
      padding-left: 6px;
      font-weight: 400;
      color: #282828;
    }

    .text-transition {
      font-weight: 300;
      line-height: 36px;
      color: #000;
      margin-top: -5px;
    }

    .mobile-hero-icons {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 60%;
      max-width: 160px;
      margin-top: 60px;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.xs}) {
    .hero-container {
      .hero-content {
        max-width: 585px;
        margin-left: auto;
        margin-right: auto;
      }

      h1 {
        font-size: 1.125rem;
      }

      h2 {
        font-size: 2.25rem;
        line-height: 50px;
      }

      p {
        font-size: 1.375rem;
      }

      .text-transition {
        line-height: 40px;
        padding-bottom: 60px;
      }

      .mobile-hero-icons {
        max-width: 200px;
        svg {
          width: 28px;
          height: 28px;
        }
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.sm}) {
    padding: 5.675rem 0;

    .hero-container {
      .hero-content {
        max-width: 800px;
      }

      h1 {
        font-size: 1.35rem;
        padding-bottom: 30px;
      }

      h2 {
        font-size: 3.5rem;
        line-height: 78px;
      }

      p {
        font-size: 1.5rem;
        line-height: 56px;
      }

      .mobile-hero-icons {
        display: none;
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.lg}) {
    padding: 7.5rem 0;
    .hero-container {
      width: 100%;

      h1 {
        width: 95%;
        margin: 0 auto;
      }

      h2 {
        font-size: 4rem;
        line-height: 100px;
        width: 95%;
        margin: 0 auto;
      }

      p {
        font-size: 1.75rem;
        line-height: 70px;
        width: 95%;
        margin: 0 auto;
      }

      .hero-content {
        width: 67%;
        max-width: 1200px;
      }
    }
  }
`

const Hero = () => {
  return (
    <Section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Hello, I'm Josh</h1>
          <span className="hero-span">
            <h2>
              I'm a new Software Engineer, with a focus on the front-end and
              currently working towards full-stack.
            </h2>
            <p>I'm also a...</p>
          </span>
          <HeroTextAni />
          <Social iClass="mobile-hero-icons" />
        </div>
      </div>
    </Section>
  )
}

export default Hero
