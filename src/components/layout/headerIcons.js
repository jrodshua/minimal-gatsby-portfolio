import React from "react"
import styled from "styled-components"
import Social from "./social"

const Container = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoint.sm}) {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #242424;
    z-index: 46;

    .desktop-header-icons {
      display: flex;
      width: 100%;
      justify-content: flex-end;
      padding-right: 1.5rem;
      width: 95%;
      margin: 0 auto;

      a {
        padding: 0.375rem 0.75rem;

        &:hover {
          svg {
            fill: #ff6340;
          }
        }
      }

      svg {
        width: 0.9rem;
        height: 0.9rem;
        fill: #fff;
      }
    }
  }
`

const HeaderIcons = () => {
  return (
    <Container>
      <Social iClass="desktop-header-icons" />
    </Container>
  )
}

export default HeaderIcons
