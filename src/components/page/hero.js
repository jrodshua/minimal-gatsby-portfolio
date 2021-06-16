import React from "react"
import styled from "styled-components"
import Social from "../layout/social"

const Section = styled.section`
  padding: 3.75rem 0;

  .hero-container {
    width: 88%;
    margin: 0 auto;
    padding: 3.75rem 0;

    h1 {
      font-size: 1rem;
      padding-bottom: 25px;
    }

    h2 {
      color: #242424;
      font-size: 1.5rem;
      font-weight: normal;
      line-height: 36px;
      padding-bottom: 15px;
    }

    p {
      font-size: 1rem;
      line-height: 28px;
      padding-bottom: 40px;
      margin: 0;
    }

    .mobile-hero-icons {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 60%;
      max-width: 160px;
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
        padding-bottom: 20px;
      }

      p {
        font-size: 1.375rem;
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
        padding-bottom: 25px;
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

// import React from "react"
// import styled from "styled-components"
// import Social from "../layout/social"

// const Section = styled.section`
//   border: 1px solid black;
//   padding-top: 5rem;
//   padding-bottom: 4.5rem;

//   .hero-container {
//     margin: 0 1.575rem;
//     display: flex;
//     flex-direction: column;
//     border: 1px solid red;

//     h1 {
//       font-size: 1rem;
//     }

//     h2 {
//       color: #242424;
//       font-size: 1.5rem;
//     }
//   }

//   .mobile-hero-icons {
//     display: flex;
//     flex-wrap: wrap;
//     margin-top: 2rem;

//     a {
//       padding: 0.5rem 0.7rem;

//       &:active {
//         svg {
//           fill: #ff6340;
//         }
//       }
//     }

//     svg {
//     }
//   }

//   @media (min-width: ${({ theme }) => theme.breakpoint.sm}) {
//     padding: 6.25rem 0;

//     .mobile-hero-icons {
//       display: none;
//     }
//   }
// `

// const Hero = () => {
//   return (
//     <Section className="hero">
//       <div className="max-width-page">
//         <div className="hero-container">
//           <h1>Hello, I'm Josh</h1>
//           <h2>
//             I'm a front end developer and cold weather person based in Las
//             Vegas, NV
//           </h2>
//           <p>
//             When I'm not building stuff for the web, I'm usually trying to
//             decide if I should walk my dog at 7pm in 105&deg; weather or at 8pm
//             in 103&deg; weather
//           </p>
//           <Social iClass="mobile-hero-icons" />
//         </div>
//       </div>
//     </Section>
//   )
// }

// export default Hero
