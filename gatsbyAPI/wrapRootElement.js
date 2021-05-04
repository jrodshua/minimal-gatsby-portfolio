import React from "react"
import { ThemeProvider } from "@emotion/react"

import defaultTheme from "../src/styles/theme"
import GlobalStyles from "../src/styles/globalStyles"

export function wrapRootElement({ element }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <>
        <GlobalStyles />
        {element}
      </>
    </ThemeProvider>
  )
}
