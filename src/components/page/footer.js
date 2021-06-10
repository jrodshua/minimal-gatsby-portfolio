import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  padding: 3.75rem 0 0;
  background: #e4e7d9;
  border-top: 2px solid #242424;

  .footer-container {
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 0 1.575rem;

    h2 {
      margin: 0.625rem 0 2.5rem;
      font-size: 2rem;
      color: #242424;
    }

    p {
      margin-bottom: 2rem;
    }

    a {
      display: inline-block;
      border: 2px solid transparent;
      padding: 1.125rem 0;
      width: 40%;
      max-width: 200px;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
      border-radius: 3px;
      background: #ac5d5d;
      font-weight: bold;
      font-size: 18px;
      color: #fff;

      &:active {
        background-color: #ac5d5d;
      }
    }
  }

  .footer-bg {
    content: "";
    width: 100%;
    height: 100%;
    padding-top: 60px;
    margin-top: 60px;
    background: #242424;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.sm}) {
    padding: 6.25rem 0 0;

    .footer-container {
      a {
        &:hover {
          background-color: #ff6340;
          color: #fff;
          border-color: #fff;
        }
      }
    }
  }

  @media (min-width: 1200px) {
    .footer-container {
      margin: 0 auto;
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
      <div className="footer-bg" />
    </StyledFooter>
  )
}

export default Footer
