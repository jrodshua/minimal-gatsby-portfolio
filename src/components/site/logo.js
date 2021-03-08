import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const LogoWrapper = styled.div`
  p {
    margin: 0;
    line-height: 0;
    font-size: 1.25rem;
    font-weight: 900;
  }
`

const Logo = () => (
  <>
    <LogoWrapper>
      <Link to="/">
        <p>Josh Rodriguez</p>
      </Link>
    </LogoWrapper>
  </>
)

export default Logo
