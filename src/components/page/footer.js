import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  padding: 3.75rem 0;

  border: 1px solid black;

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
    }

    p {
      margin-bottom: 2rem;
    }

    a {
      display: inline-block;
      border: 1px solid black;
      padding: 1rem 2.25rem;
      border-radius: 3px;

      &:active {
        background-color: #ff6340;
        color: #fff;
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.sm}) {
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
    </StyledFooter>
  )
}

export default Footer
