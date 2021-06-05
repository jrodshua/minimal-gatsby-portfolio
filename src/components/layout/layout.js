import React, { useState } from "react"
import styled, { ThemeProvider } from "styled-components"
import siteTheme from "../../styles/theme"
import GlobalStyle from "../../styles/globalStyles"
import SplashScreen from "./splashScreen"
import Header from "./header"
import HeaderIcons from "./headerIcons"
// color scheme
// bg: #f5f0e1 -- light gray
// primary: #1e3d59 -- navy blue
// text: primary or #000 -- black
// contrast: #ff6340 -- orange
// highlight: #ffc13b -- yellow

const LayoutWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  z-index: 100;

  .max-width-page {
    max-width: 1000px;
    margin: 0 auto;
  }
`

const Layout = ({ children }) => {
  const [introDone, setIntroDone] = useState(false)

  return (
    <LayoutWrapper>
      <ThemeProvider theme={siteTheme}>
        <GlobalStyle />
        {introDone ? (
          <>
            <Header />
            <HeaderIcons />
            <main>{children}</main>
          </>
        ) : (
          <SplashScreen introDone={introDone} setIntroDone={setIntroDone} />
        )}
      </ThemeProvider>
    </LayoutWrapper>
  )
}

export default Layout
