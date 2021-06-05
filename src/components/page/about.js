import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const Section = styled.section`
  border: 1px solid black;
  padding: 3.75rem 0;

  .about-me-container {
    margin: 0 1.575rem;

    h2 {
      margin: 0.625rem 0 2.5rem;
      font-size: 2rem;
    }
  }

  .about-container-flex {
    display: flex;
    flex-direction: column;

    h3 {
      font-weight: bold;
      font-size: 1rem;
      line-height: 1.7;
      margin-bottom: 2rem;
    }

    p {
      margin-bottom: 1rem;
      line-height: 1.4;
      font-size: 0.95rem;
    }
  }

  .mobile-about-img-top {
    margin-bottom: 2rem;
  }

  .mobile-about-img-bottom {
    margin-top: 1rem;
  }

  .desktop-about-img {
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.sm}) {
    .about-container-flex {
      .mobile-about-img-top,
      .mobile-about-img-bottom {
        display: none;
      }

      .desktop-about-img {
        display: block;
        margin-bottom: 2rem;
      }
    }
  }
`

const About = () => {
  return (
    <Section>
      <div className="max-width-page">
        <div className="about-me-container">
          <h2>About Me</h2>
          <div className="about-container-flex">
            <h3>
              Josh is a new front end developer and former operations lead at
              Lyft, who also helped launch Uber Eats in Las Vegas, interned at
              Disney World, has 20k track plays on SoundCloud, and following
              this, will never again speak or write in the third person.
            </h3>
            <StaticImage
              src="https://res.cloudinary.com/jrod-cdn/image/upload/v1622858947/portfolio%20assets/mobile-jvr-folio-1_jt4sgs.png"
              className="mobile-about-img-top"
              loading="lazy"
              placeholder="blurred"
              objectFit="contain"
              alt=""
            />
            <StaticImage
              src="https://res.cloudinary.com/jrod-cdn/image/upload/v1622857438/portfolio%20assets/desktop-jvr-folio_wleka7.png"
              className="desktop-about-img"
              loading="lazy"
              placeholder="blurred"
              objectFit="contain"
              alt=""
            />
            <p>
              I create and build things for the web, sometimes mobile too!
              Although my focus is mostly on the front-end, I’m constantly
              learning and working towards becoming a better and well-rounded
              programmer. My interest in coding started back in 2017, a bit
              after I was hired at Lyft. At that time, Lyft was still very much
              a startup and many of us wore a variety of hats.
            </p>
            <p>
              Then in May 2020, I was part of the first wave of Lyft’s mass
              layoffs. Originally, I planned to start applying for new ops roles
              immediately, but after a conversation with my former manager, I
              decided to take some time for myself.
            </p>
            <StaticImage
              src="https://res.cloudinary.com/jrod-cdn/image/upload/v1622858947/portfolio%20assets/mobile-jvr-folio-2_nwyyvg.png"
              className="mobile-about-img-bottom"
              loading="lazy"
              placeholder="blurred"
              objectFit="contain"
              alt=""
            />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default About
