import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const SidebarContainer = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  outline: 0;
  z-index: 5;
  visibility: ${({ toggleOpen }) => (toggleOpen ? "visible" : "hidden")};
  transition: all 0.25s ease-in-out;
  transform: ${({ toggleOpen }) =>
    toggleOpen ? "translateX(0)" : "translateX(100%)"};
`

const StyledSidebar = styled.div`
  background: #ffffff;
  width: 220px;
  height: 240px;
  margin: 70px 0 0 auto;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 5px 0px rgb(0 0 0 / 10%);
  ul {
    list-style-type: none;
    height: 100%;
    width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0;
  }
  .sidebar-link {
    width: 100%;
    padding: 8px 16px;
  }
`

const Sidebar = ({ toggle }) => (
  <>
    <SidebarContainer toggleOpen={toggle}>
      <StyledSidebar>
        <ul>
          <li>
            <Link to="/" className="sidebar-link">
              Work
            </Link>
          </li>
          <li>
            <Link to="/" className="sidebar-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/" className="sidebar-link">
              Experience
            </Link>
          </li>
          <li>
            <Link to="/" className="sidebar-link">
              Connect
            </Link>
          </li>
        </ul>
      </StyledSidebar>
    </SidebarContainer>
  </>
)

export default Sidebar
