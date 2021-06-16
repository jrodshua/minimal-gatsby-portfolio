import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
// import WorkIcons from "../layout/workIcons"

const Section = styled.section`
  padding: 3.75rem 0;
  position: relative;

  .work-bg {
    content: "";
    width: 100%;
    height: 100px;
    position: absolute;
    top: 0;
    z-index: 10;
    background: #242424;
  }

  .work-container-bg {
    padding: 3.75rem 0 0;
  }

  .work-container {
    width: 88%;
    margin: 0 auto;
    padding: 0 0 3.75rem;
    z-index: 11;
    position: relative;

    h2 {
      background: transparent;
      padding-bottom: 1rem;
    }

    .project-container-grid {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 30px;
      overflow: hidden;
    }

    .project-item {
      border: 1px solid rgba(36, 36, 36, 0.15);
      height: auto;
      width: 100%;
      border-radius: 6px;
      overflow: hidden;
      background-color: transparent;
    }

    .project-item-link {
      height: 100%;
      width: 100%;
      display: block;
    }

    .project-item-img {
      border-bottom: 1px solid rgba(36, 36, 36, 0.15);
      width: auto;
      height: 175px;

      img {
        width: 100%;
        height: 100%;
        object-position: 50% 40%;
      }
    }

    .project-item-description {
      padding-top: 15px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .project-info {
      min-height: 80px;
      h3 {
        margin: 0 0.5rem 0;
      }

      span {
        display: block;
        padding: 8px 0.5rem 15px;
      }
    }

    .project-tech-list {
      flex-basis: 20%;
      display: flex;
      background: #242424;
      align-items: flex-start;
      line-height: 28px;
      font-size: 14px;
      padding: 0 0.5rem;
      color: #fff;
      ul {
        display: flex;
        flex-wrap: wrap;
        padding-left: 0.25rem;
        li {
          padding: 0 0.5rem;
          font-weight: bold;
        }
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.sm}) {
    padding: 5.675rem 0;

    .work-bg {
      height: 140px;
    }

    .work-container {
      max-width: 800px;

      .work-container-bg {
        padding: 4.625rem 0;
      }

      .project-container-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .project-item {
        &:first-child {
          grid-column: auto / span 2;
        }
      }

      .project-item-img {
        height: auto;
        max-height: 350px;
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.lg}) {
    padding: 7.5rem 0;

    .work-bg {
      background: #242424;
      width: 100%;
      height: 180px;
    }

    .work-container {
      width: 92%;
      max-width: 100%;

      h2 {
        width: 67%;
        max-width: 1200px;
        margin-left: auto;
        margin-right: auto;
      }

      .work-container-bg {
        padding: 5.625rem 0;
        background: #fff;
      }

      .project-container-grid {
        width: 67%;
        margin-left: auto;
        margin-right: auto;
        max-width: 1200px;
      }

      .project-item-img {
        max-height: 460px;
      }
    }
  }
`

const FeaturedWork = () => {
  return (
    <Section id="work">
      <div className="work-bg" />
      <div className="work-container">
        <h2>Projects</h2>
        <div className="work-container-bg">
          <div className="project-container-grid">
            <div className="project-item">
              <Link to="/" className="project-item-link">
                <StaticImage
                  src="https://res.cloudinary.com/jrod-cdn/image/upload/v1623292669/portfolio%20assets/UsagiBakery_thumb_vluyjj.png"
                  className="project-item-img"
                  loading="eager"
                  placeholder="blurred"
                  objectFit="cover"
                  quality={100}
                  alt=""
                />
                <div className="project-item-description">
                  <div className="project-info">
                    <h3>Usagi Bakery</h3>
                    <span>
                      Fully functional Stripe & Sanity CMS integrated ecommerce
                      site for a local vegan bakery
                    </span>
                  </div>
                  <div className="project-tech-list">
                    Tech:
                    <ul>
                      <li>Gatsby</li>
                      <li>React</li>
                      <li>Stripe</li>
                      <li>Sanity.io</li>
                    </ul>
                  </div>
                </div>
              </Link>
            </div>

            <div className="project-item">
              <Link to="/" className="project-item-link">
                <StaticImage
                  src="https://res.cloudinary.com/jrod-cdn/image/upload/v1623292669/portfolio%20assets/FakeryBakery_thumb_op36xn.png"
                  className="project-item-img"
                  loading="eager"
                  placeholder="blurred"
                  quality={100}
                  objectFit="cover"
                  alt=""
                />
                <div className="project-item-description">
                  <div className="project-info">
                    <h3>Fakery Bakery</h3>
                    <span>A UI MilkBar clone, built with React</span>
                  </div>
                  <div className="project-tech-list">
                    Tech:
                    <ul>
                      <li>React</li>
                    </ul>
                  </div>
                </div>
              </Link>
            </div>

            <div className="project-item">
              <Link to="/" className="project-item-link">
                <StaticImage
                  src="https://res.cloudinary.com/jrod-cdn/image/upload/v1623368745/portfolio%20assets/Ableton_thumb_gyccok.png"
                  className="project-item-img"
                  loading="lazy"
                  placeholder="blurred"
                  quality={100}
                  objectFit="cover"
                  alt=""
                />
                <div className="project-item-description">
                  <div className="project-info">
                    <h3>FrontEnd Practice Collection</h3>
                    <span>
                      A collection of cloned websites, built using various front
                      end technology
                    </span>
                  </div>
                  <div className="project-tech-list">
                    Tech:
                    <ul>
                      <li>JS</li>
                      <li>React</li>
                      <li>Gatsby</li>
                      <li>Next.js</li>
                    </ul>
                  </div>
                </div>
              </Link>
            </div>

            <div className="project-item">
              <Link to="/" className="project-item-link">
                <StaticImage
                  src="https://res.cloudinary.com/jrod-cdn/image/upload/v1623369616/portfolio%20assets/Nonversation_thumb_cja7gl.png"
                  className="project-item-img"
                  loading="lazy"
                  placeholder="blurred"
                  quality={100}
                  objectFit="cover"
                  alt=""
                />
                <div className="project-item-description">
                  <div className="project-info">
                    <h3>Nonversation</h3>
                    <span>
                      Voice chat app, using WebRTC technology and built with the
                      Twilio API
                    </span>
                  </div>
                  <div className="project-tech-list">
                    Tech:
                    <ul>
                      <li>React</li>
                      <li>Twilio API</li>
                      <li>WebRTC</li>
                    </ul>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default FeaturedWork
