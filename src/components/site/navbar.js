import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledNavbar = styled.div`
  display: none;

  @media (min-width: 820px) {
    border: 1px solid red;
    ul {
      margin: 0;
      list-style-type: none;
      display: flex;
      flex-direction: space-between;
    }
  }
`

const Navbar = () => {
  return (
    <>
      <StyledNavbar>
        <ul>
          <li>
            <Link to="/">Work</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Experience</Link>
          </li>
          <li>
            <Link to="/">Connect</Link>
          </li>
        </ul>
      </StyledNavbar>
    </>
  )
}

export default Navbar
