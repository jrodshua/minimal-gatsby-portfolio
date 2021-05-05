import React from "react"
import { Link } from "gatsby"

/* @jsx jsx */
import { css, jsx } from "@emotion/react"
import {
  Container,
  LogoContainer,
  List,
  Heading,
  Item,
  SubItem,
} from "./styles"
import Logo from "../logo"
import Icons, { iconData } from "../icons/icons"

const Sidebar = ({ isMenuOpen }) => {
  const { share } = iconData
  const icon = (
    <Icons
      iWidth={share.width}
      iHeight={share.height}
      iView={share.viewBox}
      iPath={share.path}
    />
  )

  return (
    <Container isMenuOpen={isMenuOpen}>
      <LogoContainer>
        <Link to="/" aria-label="Go to home page">
          <Logo aria-hidden="true" />
        </Link>
      </LogoContainer>
      <nav>
        <List>
          <Item>
            <Link to="/" activeClassName="active-link">
              tl;dr
            </Link>
          </Item>
          <Heading>work</Heading>
          <SubItem>
            <Item>
              <Link to="/work/usagiBakery" activeClassName="active-link">
                Usagi.Bakery Client Project
              </Link>
            </Item>
            <Item>
              <Link to="/work/nonversation" activeClassName="active-link">
                Nonversation Voice Chat
              </Link>
            </Item>
            <Item>
              <Link to="/work/fakeryBakery" activeClassName="active-link">
                FakeryBakery
              </Link>
            </Item>
          </SubItem>

          <Heading>Background</Heading>
          <SubItem>
            <Item>
              <Link to="/background/about" activeClassName="active-link">
                About me
              </Link>
            </Item>
            <Item>
              <Link to="/background/resume" activeClassName="active-link">
                Resume
              </Link>
            </Item>
            <Item>
              <Link to="/background/contact" activeClassName="active-link">
                Get in touch
              </Link>
            </Item>
          </SubItem>

          <Heading>Links</Heading>
          <SubItem>
            <Item>
              <a
                href="https://github.com/jrodshua"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub {icon}
              </a>
            </Item>
            <Item>
              <a
                href="https://www.linkedin.com/in/jrodshua/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn {icon}
              </a>
            </Item>
            <Item>
              <a
                href="https://twitter.com/jrodshua"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter {icon}
              </a>
            </Item>
          </SubItem>
        </List>
      </nav>
    </Container>
  )
}

export default Sidebar
