import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { isSSR } from "../../util/index"
import Navbar from "./navbar"
import Sidebar from "./sidebar"

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  background: #fff;
  width: 100%;
  height: 80px;
  z-index: 45;

  background-color: #f5f0e1;

  @media (min-width: ${({ theme }) => theme.breakpoint.sm}) {
    position: relative;
  }
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.25rem 2.5rem 0.5rem;
  height: 100%;

  max-width: 1200px;
  margin: 0 auto;

  .logo-container {
    z-index: 56;
  }

  .logo-link {
    color: ${({ open }) => (open ? "#fff" : "#000")};
    transition: color ease-in 0.6s;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.sm}) {
    .logo-container {
      width: 60%;
    }
  }
`

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    let handleWindowWidth
    if (!isSSR) {
      handleWindowWidth = () => setWindowWidth(window.innerWidth)
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleWindowWidth)
    return () => window.removeEventListener("resize", handleWindowWidth)
  }, [windowWidth])

  let navigation
  if (windowWidth < 600) {
    navigation = <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
  } else {
    navigation = <Navbar />
  }

  return (
    <StyledHeader open={menuOpen}>
      <Container open={menuOpen}>
        <div className="logo-container">
          <Link to="/" className="logo-link">
            Josh Rodriguez
          </Link>
        </div>
        {navigation}
      </Container>
    </StyledHeader>
  )
}

export default Header
