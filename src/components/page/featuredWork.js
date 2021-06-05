import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import WorkIcons from "../layout/workIcons"

const Section = styled.section`
  border: 1px solid black;
  padding: 3.75rem 0;

  .featured-work-container {
    margin: 0 1.575rem;
    border: 1px solid red;

    h2 {
      margin: 0.625rem 0 2.5rem;
      font-size: 2rem;
    }
  }

  .featured-work-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 0.75rem;
  }

  .grid-item-link {
    padding: 1.75rem 0 0;
    border: 1px solid blue;
    background-color: rgba(0, 0, 0, 0.1);
    margin-bottom: 3rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .grid-item-text {
    padding: 1.25rem 1rem 1rem;

    h3 {
      margin-bottom: 0.6rem;
      font-size: 1.375rem;
    }

    span {
      display: inline-block;
      font-size: 1rem;
    }
  }

  .featured-tech-list {
    padding: 0 0.5rem;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-bottom: 0.5rem;

    li {
      line-height: 1.5;
      font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
      font-size: 0.95rem;
      padding: 0 0.5rem;
    }
  }

  .featured-work-icons {
    display: flex;
    justify-content: flex-start;
    padding: 0 0.5rem;
    margin: 1.5rem 0 0.5rem;

    a {
      padding: 0.5rem;

      &:active {
        svg {
          fill: #ff6340;
        }
      }

      svg {
        width: 22px;
        height: 22px;
      }

      .ext-icon {
        width: 20px;
        height: 22px;
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.sm}) {
    .featured-work-icons {
      a {
        &:hover {
          svg {
            fill: #ff6340;
          }
        }
      }
    }
  }
`

const FeaturedWork = () => {
  return (
    <Section id="work">
      <div className="max-width-page">
        <div className="featured-work-container">
          <h2>Featured Projects</h2>
          <div className="featured-work-grid">
            <div className="grid-item-link">
              <Link to="/">
                <StaticImage
                  src="https://res.cloudinary.com/jrod-cdn/image/upload/v1622253531/portfolio%20assets/www.usagibakery.com__lyxzrk.png"
                  alt="UsagiBakery website"
                  loading="eager"
                />
                <div className="grid-item-text">
                  <h3>UsagiBakery</h3>
                  <span>
                    An ecommerce site built for a local bakery, featuring a
                    Sanity headless CMS and Stripe integration for a secure
                    payment experience
                  </span>
                </div>
              </Link>
              <ul className="featured-tech-list">
                <li>Gatsby</li>
                <li>React</li>
                <li>Stripe.js</li>
                <li>Sanity.io</li>
              </ul>
              <WorkIcons iClass="featured-work-icons" />
            </div>

            <div className="grid-item-link">
              <Link to="/">
                <StaticImage
                  src="https://res.cloudinary.com/jrod-cdn/image/upload/v1622253529/portfolio%20assets/jrodshua.github.io_FEPractice-Ableton__ixpkje.png"
                  alt="UsagiBakery website"
                  loading="eager"
                />
                <div className="grid-item-text">
                  <h3>UsagiBakery</h3>
                  <span>
                    An ecommerce site built for a local bakery, featuring a
                    Sanity headless CMS and Stripe integration for a secure
                    payment experience
                  </span>
                </div>
              </Link>
              <ul className="featured-tech-list">
                <li>Gatsby</li>
                <li>React</li>
                <li>Stripe.js</li>
                <li>Sanity.io</li>
              </ul>
              <WorkIcons iClass="featured-work-icons" />
            </div>

            <div className="grid-item-link">
              <Link to="/">
                <StaticImage
                  src="https://res.cloudinary.com/jrod-cdn/image/upload/v1622253529/portfolio%20assets/flamboyant-yonath-0a114d.netlify.app__ri5f52.png"
                  alt="UsagiBakery website"
                  loading="eager"
                />
                <div className="grid-item-text">
                  <h3>UsagiBakery</h3>
                  <span>
                    An ecommerce site built for a local bakery, featuring a
                    Sanity headless CMS and Stripe integration for a secure
                    payment experience
                  </span>
                </div>
              </Link>
              <ul className="featured-tech-list">
                <li>Gatsby</li>
                <li>React</li>
                <li>Stripe.js</li>
                <li>Sanity.io</li>
              </ul>
              <WorkIcons iClass="featured-work-icons" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default FeaturedWork
