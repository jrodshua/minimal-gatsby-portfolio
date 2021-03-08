import React from "react"
import Header from "./header"
import GlobalStyle from "./styles/styles"
import styled from "styled-components"

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`

const Layout = ({ children }) => {
  return (
    <StyledWrapper>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
    </StyledWrapper>
  )
}

export default Layout
