import React from "react"
import { useTheme, Global, css } from "@emotion/react"

const GlobalStyles = () => {
  const theme = useTheme()

  return (
    <Global
      styles={css`
        *,
        *::after,
        *::before {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-size: 16px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
          background-color: ${theme.colors.background};
          text-rendering: optimizelegibility;
          -webkit-font-smoothing: antialiased;
          overflow-y: scroll;
        }

        h1 {
          font-size: 32px;
          color: ${theme.colors.title};
          font-weight: bold;
          margin-bottom: 24px;
        }

        h2 {
          font-size: 24px;
          line-height: 2rem;
        }

        h3 {
          font-size: 18px;
          margin: 24px 0 16px 0;
          font-weight: bold;
        }

        h4 {
          font-size: 16px;
        }

        h2,
        h4,
        h5,
        h6 {
          color: ${theme.colors.title};
          margin: 24px 0 16px 0;
          font-weight: bold;
        }

        p {
          color: ${theme.colors.text};
          font-size: 16px;
          line-height: 28px;
          margin-bottom: 16px;
          font-weight: 400;
        }

        a {
          color: ${theme.colors.text};
          font-weight: bold;
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }
        }

        hr {
          border: 0;
          height: 0;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
          border-bottom: 1px solid rgba(255, 255, 255, 0.3);
        }

        ul,
        ol {
          color: ${theme.colors.text};
          padding-left: 15px;
          margin-bottom: 16px;

          li {
            line-height: 28px;
          }
        }

        li ul,
        li ol {
          margin-bottom: 0;
        }

        table {
          border: 1px solid black;
          border-collapse: collapse;
          width: 100%;
        }

        td,
        th {
          border: 1px solid black;
          text-align: left;
          padding: 0.75rem;
        }
      `}
    />
  )
}

export default GlobalStyles
