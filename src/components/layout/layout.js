/* @jsx jsx */
import { useState, useRef, Fragment } from "react"
import { jsx, css } from "@emotion/react"

import Sidebar from "../sidebar/index"
import Header from "../header/header"
import Overlay from "../overlay"
import { Container, Main, Children } from "./styles"

export default function Layout({ children, title }) {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const contentRef = useRef(null)

  function handleMenuOpen() {
    setMenuOpen(!isMenuOpen)
  }

  return (
    <Fragment>
      <Overlay isMenuOpen={isMenuOpen} onClick={handleMenuOpen} />
      <Container>
        <Sidebar isMenuOpen={isMenuOpen} />
        <Main>
          <Header handleMenuOpen={handleMenuOpen} />
          {/* {title ? (
            <h3
              css={css`
                display: none;

                @media (max-width: 1200px) {
                  display: block;
                }
              `}
            >
              {title}
            </h3>
          ) : (
            ""
          )} */}
          <Children ref={contentRef}>
            {title && <h3>{title}</h3>}
            {/* {title ? (
              <h1
                css={css`
                  @media (max-width: 1200px) {
                    display: none;
                  }
                `}
              >
                {title}
              </h1>
            ) : (
              ""
            )} */}
            {children}
          </Children>
        </Main>
      </Container>
    </Fragment>
  )
}
