import React from "react"
import styled from "@emotion/styled"
import Icons, { iconData } from "../icons/icons"

const Container = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  height: 40px;
  margin-bottom: 24px;

  h2 {
    margin: 0;
    border: none;
    padding: 0;
    font-size: 18px;

    @media (max-width: 359px) {
      font-size: 14px;
    }
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    margin-right: 16px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  @media (min-width: 780px) {
    display: none;
  }
`

export default function Header({ handleMenuOpen }) {
  const { menu } = iconData

  return (
    <Container>
      <button aria-label="Open sidebar" type="button" onClick={handleMenuOpen}>
        <Icons
          iWidth={menu.width}
          iHeight={menu.height}
          iView={menu.viewBox}
          iPath={menu.path}
        />
      </button>
      <h2>Josh Rodriguez</h2>
    </Container>
  )
}
