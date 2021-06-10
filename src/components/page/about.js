import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const Section = styled.section`
  padding: 3.75rem 0;
  position: relative;

  .about-bg {
    content: "";
    width: 100%;
    height: 100px;
    position: absolute;
    top: 0;
    z-index: 10;
    background: linear-gradient(
      60deg,
      #ac5d5d 0%,
      #ac5d5d 30%,
      #203946 calc(30% + 1px),
      #203946 60%,
      #a2a89f calc(60% + 1px),
      #a2a89f 70%,
      #242424 calc(70% + 1px),
      #242424 100%
    );
  }

  .about-container-bg {
    padding: 3.75rem 0 0;
  }

  .about-me-container {
    width: 88%;
    margin: 0 auto;
    padding: 0 0 3.75rem;
    z-index: 11;
    position: relative;

    h2 {
      background: transparent;
      padding-bottom: 1rem;
    }

    .mobile-about-img-top,
    .mobile-about-img-bottom {
      display: block;
    }

    h3 {
      font-size: clamp(1.3rem, 1rem + 0.4vh + 0.3vw, 1.5rem);
      line-height: 28px;
      padding: 3.75rem 0;
      font-weight: normal;
    }

    .desktop-about-img {
      display: none;
    }

    .about-sidebar-container {
      padding: 15px 0 30px;
      border-top: 2px solid #262526;

      h4 {
        font-size: 1rem;
        font-weight: 500;
        line-height: 28px;
      }
    }

    .about-p-container {
      padding-bottom: 3.75rem;

      p {
        margin: 0;

        &:first-child {
          padding-bottom: 1.25rem;
        }
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.sm}) {
    padding: 5.675rem 0;

    .about-bg {
      height: 140px;
    }

    .about-container-bg {
      background: #fff;
      padding: 4.625rem 0;
    }

    .about-me-container {
      padding: 0;
      background-color: transparent;

      h3 {
        width: 80%;
        margin: 0 auto;
        line-height: 34px;
      }

      .about-description-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
      }

      .about-sidebar-container {
        flex: 0 0 auto;
        width: 22%;
        h4 {
          font-size: clamp(1rem, 1rem + 0.25vh, 4em);
          line-height: 32px;
        }
      }

      .about-p-container {
        flex: 0 0 auto;
        width: 68%;

        p {
          &:first-child {
            padding-top: 17px;
          }
        }
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.lg}) {
    padding: 7.5rem 0;

    .about-bg {
      width: 100%;
      height: 100%;
    }

    .about-me-container {
      width: 92%;
      padding: 0;

      h2 {
        width: 80%;
        margin-left: auto;
        margin-right: auto;
      }

      .about-container-bg {
        background: #fff;
        padding: 5.625rem 0;
        border-radius: 3px;
        box-shadow: 0 1.8px 1.7px -24px rgba(0, 0, 0, 0.053),
          0 6px 5.6px -24px rgba(0, 0, 0, 0.077),
          0 27px 25px -24px rgba(0, 0, 0, 0.13);
      }

      h3 {
        font-size: 2.5rem;
        line-height: 3.275rem;
        padding: 5.625rem 0;
        width: 67%;
        margin: 0 auto;
      }

      .about-description-container {
        width: 67%;
        margin: 0 auto;
      }

      .about-p-container {
        padding-bottom: 5.625rem;
      }

      .mobile-about-img-top,
      .mobile-about-img-bottom {
        display: none;
      }

      .desktop-about-img {
        display: block;
        width: 80%;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
`

const About = () => {
  return (
    <Section>
      <div className="about-bg" />
      <div className="about-me-container">
        <h2>About Me</h2>
        <div className="about-container-bg">
          <StaticImage
            src="https://res.cloudinary.com/jrod-cdn/image/upload/v1622858947/portfolio%20assets/mobile-jvr-folio-1_jt4sgs.png"
            className="mobile-about-img-top"
            loading="lazy"
            placeholder="blurred"
            objectFit="contain"
            alt=""
          />
          <StaticImage
            src="https://res.cloudinary.com/jrod-cdn/image/upload/v1623199968/portfolio%20assets/folio-about-desktop.png"
            loading="lazy"
            placeholder="blurred"
            objectFit="cover"
            alt=""
            className="desktop-about-img"
          />
          <h3>
            I’m a humble, curious, and collaborative human being & I just want
            to help build, solve, learn, and share with my team. I’m also a web
            developer
          </h3>
          <div className="about-description-container">
            <div className="about-sidebar-container">
              <h4>Who is Josh?</h4>
            </div>
            <div className="about-p-container">
              <p>
                I’m constantly learning and working towards becoming a better
                and well-rounded programmer. My interest in coding started back
                in 2017, a bit after I was hired at Lyft. At that time, Lyft was
                still very much a startup and many of us wore a variety of hats.
                It was my interactions with peers, working in the swe org, and
                my 1:1s with a direct report, pursuing a cs degree, that piqued
                my interest and pushed me to start casually learning.
              </p>
              <p>
                Then in May 2020, I was part of the first wave of Lyft’s mass
                layoffs. Originally, I planned to start applying for new ops
                roles immediately, but after a conversation with my former
                manager, I took some time for myself. During I learned a lot
                about myself, and eventually figured out what I enjoyed doing
                most, building and problem solving. I connected that with web
                development and have been learning, creating, building, and
                relearning since.
              </p>
            </div>
          </div>
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
    </Section>
  )
}

export default About

// const Section = styled.section`
//   border: 1px solid black;
//   padding: 3.75rem 0;

//   .about-me-container {
//     margin: 0 1.25rem;
//   }

//   h3 {
//     font-weight: bold;
//     font-size: clamp(1.1em, 1em + 0.5vh + 0.5vw, 1.5em);
//     line-height: 34px;
//     margin: 3.75rem 0;
//   }

//   .about-sidebar-container {
//     padding: 15px 0 10px;
//     border-top: 2px solid #000;

//     h4 {
//       font-size: clamp(1rem, 1rem + 0.5vh, 4em);
//       line-height: 28px;
//     }
//   }

//   .about-p-container {
//     margin-bottom: 3.75rem;

//     p {
//       &:last-child {
//         margin-bottom: 0;
//       }
//     }
//   }

//   .desktop-about-img {
//     display: none;
//   }

//   .mobile-about-img-top,
//   .mobile-about-img-bottom {
//     display: block;
//   }

//   @media (min-width: ${({ theme }) => theme.breakpoint.sm}) {
//     padding: 6.25rem 0;
//     .about-me-container {
//       margin: 0 auto;
//       padding: 0 3.125rem;

//       border: 1px solid black;

//       h3 {
//         margin-left: 3.375rem;
//         margin-right: 3.375rem;
//       }
//     }

//     .about-description-container {
//       display: flex;
//       flex-direction: row;
//       gap: 50px;
//       justify-content: space-between;
//       width: 100%;

//       .about-sidebar-container {
//         flex-basis: 20%;

//         h4 {
//           font-size: 0.875rem;
//           line-height: 24px;
//         }
//       }

//       .about-p-container {
//         flex-basis: 80%;

//         p {
//           &:first-child {
//             margin-top: 0;
//           }
//         }
//       }
//     }
//   }

//   @media (min-width: ${({ theme }) => theme.breakpoint.lg}) {
//     .about-me-container {
//       max-width: 1100px;
//     }
//   }

//   @media (min-width: ${({ theme }) => theme.breakpoint.xl}) {
//     padding-left: 3.125rem;
//     padding-right: 3.125rem;

//     border: 1px solid red;

//     .about-me-container {
//       max-width: 100%;
//       width: 100%;
//       border: 1px solid blue;
//     }
//   }
// `
// @media (min-width: ${({ theme }) => theme.breakpoint.xl}) {
//   .about-me-container {
//     padding: 0 0.5rem;
//     max-width: 1400px;

//     h3 {
//       font-size: 42px;
//       line-height: 56px;
//       margin: 3rem 0 2rem;
//     }
//   }

//   .about-container-flex {
//     display: grid;
//     grid-template-columns: 3fr 2fr;
//     gap: 50px;
//   }

//   .desktop-about-img {
//     display: block;
//   }

//   .about-description-container {
//     flex-direction: column;
//     gap: 0;

//     .about-sidebar-container,
//     .about-p-container {
//       flex-basis: none;
//     }

//     .about-sidebar-container {
//       display: none;
//     }

//     p {
//       margin: 0 0 1.25rem;
//       line-height: 36px;

//       &:last-child {
//         margin-bottom: 0;
//       }
//     }
//   }

//   .mobile-about-img-top,
//   .mobile-about-img-bottom {
//     display: none;
//   }
// }
