import React from "react"
import styled from "styled-components"

const Nav = styled.nav`
  width: 40%;

  ul {
    display: flex;
    justify-content: flex-end;
  }

  li {
    margin-left: 4rem;
  }

  a:hover {
    color: #ff6340;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <ul>
        <li>
          <a href="/">Work</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
      </ul>
    </Nav>
  )
}

export default Navbar
