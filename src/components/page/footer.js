import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  padding: 3.75rem 0;
  background: #242424;

  .footer-container {
    padding: 3.75rem 0;
    width: 88%;
    margin-left: auto;
    margin-right: auto;
    color: #fff;

    h2 {
      text-align: center;
    }

    p {
      margin-bottom: 40px;
      text-align: center;
      max-width: 580px;
      margin-left: auto;
      margin-right: auto;
    }

    a {
      display: block;
      border: 2px solid white;
      padding: 1.125rem 0;
      width: 40%;
      max-width: 200px;
      background-color: #fff;
      color: #242424;
      text-align: center;
      margin: 0 auto;
      border-radius: 3px;
      font-weight: bold;
      font-size: 18px;

      &:active {
        background-color: #ac5d5d;
        color: #fff;
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.sm}) {
    padding: 5.675rem;
    .footer-container {
      h2 {
        padding-bottom: 30px;
      }
      p {
        max-width: 1000px;
        margin-top: 0;
        margin-bottom: 60px;
      }

      a {
        &:hover {
          background-color: #ac5d5d;
          color: #fff;
          border-color: #ac5d5d;
        }
      }
    }
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer-container">
        <h2>Let's connect</h2>
        <p>
          In need of a vegan recipe for dinner. Looking for a podcast
          recommendation. Want to friend me on PS/Xbox and need my gamertag.
          Desperate to share your love for the Rams, Lakers, or Golden Knights.
          Desperate to share your hate for the Rams, Lakers, or Golden Knights.
          Did you try the BTS meal at McDonald's and now need help finding a
          kpop group to stan? Or want to reach out and simply connect?
        </p>
        <a href="/">Say hi</a>
      </div>
    </StyledFooter>
  )
}

export default Footer
