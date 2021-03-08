import React, { useState } from "react"
import Logo from "./logo"
import Navbar from "./navbar"
import Sidebar from "./sidebar"
import styled from "styled-components"

const StyledNav = styled.nav`
  padding: 12px 20px 0 20px;

  .nav-container-sm {
    height: 3rem;
    text-align: center;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding-bottom: 0.25rem;
  }
`

const StyledMenu = styled.button`
  position: relative;
  z-index: 6;
  background: transparent;
  width: 1.5rem;
  height: 1.35rem;
  border: none;
  box-shadow: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  &:focus {
    outline: none;
  }

  div {
    width: 1.45rem;
    height: 3px;
    background: #333333;
    transition: all 0.25s ease-in-out;
    transform-origin: 1.5px;

    :first-child {
      transform: ${({ showSidebar }) =>
        showSidebar ? "rotate(45deg)" : "rotate(0)"};
    }
    :nth-child(2) {
      opacity: ${({ showSidebar }) => (showSidebar ? 0 : 1)};
    }
    :nth-child(3) {
      transform: ${({ showSidebar }) =>
        showSidebar ? "rotate(-45deg)" : "rotate(0)"};
    }
  }
`

const Header = () => {
  const [open, setOpen] = useState(false)

  const burgerBtn = (
    <StyledMenu showSidebar={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledMenu>
  )

  return (
    <header>
      <StyledNav>
        <div className="nav-container-sm">
          <Logo />
          <Navbar />
          {burgerBtn}
        </div>
        <Sidebar toggle={open} />
      </StyledNav>
    </header>
  )
}

export default Header
