import React, { useState } from "react"
import Logo from "./logo"
import Navbar from "./navbar"
import Sidebar from "./sidebar"
import styled from "styled-components"

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background: #ffffff;
  height: 10vh;
  z-index: 7;
`

const StyledNav = styled.nav`
  padding: 12px 20px 5px 20px;
  height: 100%;
  .nav-container-sm {
    height: 100%;
    text-align: center;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding-bottom: 0.25rem;
  }
`

const StyledMenu = styled.button`
  position: relative;
  background: transparent;
  width: 1.5rem;
  height: 1.35rem;
  border: none;
  box-shadow: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  &:focus {
    outline: none;
  }

  div {
    width: 1.2rem;
    height: 3px;
    background: #333333;
    transition: all 0.25s ease-in-out;
    transform-origin: 8px;
    border-radius: 4px;

    :first-child {
      transform: ${({ showSidebar }) =>
        showSidebar ? "rotate(-30deg)" : "rotate(0)"};
    }
    :nth-child(2) {
      transform: ${({ showSidebar }) =>
        showSidebar ? "rotate(30deg)" : "rotate(0)"};
    }
    :nth-child(3) {
      opacity: ${({ showSidebar }) => (showSidebar ? 0 : 1)};
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
    <StyledHeader>
      <StyledNav>
        <div className="nav-container-sm">
          <Logo />
          <Navbar />
          {burgerBtn}
        </div>
        <Sidebar toggle={open} />
      </StyledNav>
    </StyledHeader>
  )
}

export default Header
