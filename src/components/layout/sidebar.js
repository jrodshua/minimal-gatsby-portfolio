import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { motion } from "framer-motion"

const Nav = styled.nav`
  height: 24px;
  z-index: 20;

  @media (min-width: ${({ theme }) => theme.breakpoint.sm}) {
    display: none;
  }
`

const NavMenuBtn = styled.button`
  background: transparent;
  border: 0;
  border-radius: 0;
  display: block;
  height: 24px;
  width: 24px;
  padding: 0;
  position: relative;
  top: -1px;
  z-index: 55;

  &:focus {
    outline: none;
  }

  span {
    height: 2px;
    left: 0;
    position: absolute;
    width: 24px;
    background-color: ${({ menuOpen }) => (menuOpen ? "#fff" : "#000")};
    transition: background-color ease-in 0.6s;

    :first-child {
      top: ${({ menuOpen }) => (menuOpen ? "11px" : "6px")};
      transform: ${({ menuOpen }) =>
        menuOpen ? "rotate(45deg)" : "rotate(0)"};
      transform-origin: center;
    }

    :nth-child(2) {
      bottom: ${({ menuOpen }) => (menuOpen ? "11px" : "6px")};
      transform: ${({ menuOpen }) =>
        menuOpen ? "rotate(-45deg)" : "rotate(0)"};
      transform-origin: center;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.sm}) {
    display: none;
  }
`

const NavList = styled(motion.ul)`
  background: #1e3d59;
  margin: 0;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  padding: 95px 9.375% 60px;
  z-index: 50;
  overflow-y: scroll;

  li {
    flex: 0 0 auto;
    margin-bottom: 30px;
    width: 50%;
    padding: 0.5rem;
  }

  a {
    color: #fff;
    font-size: 50px;
    font-weight: 500;
    line-height: 1;
    margin: 0;
    display: inline-block;
    white-space: nowrap;
  }

  @media (min-width: ${({ theme }) => theme.breakpoint.sm}) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    width: 100%;
    position: relative;
    left: auto;
    top: auto;
    background: transparent;
    color: #000;
    padding: 0;

    li {
      display: block;
      flex: none;
      margin: 0;
      margin-left: 2rem;
    }

    a {
      font-size: 16px;
    }
  }
`

const navProp = {
  hidden: {
    opacity: 0,
    clipPath: "circle(25%)",
    display: "none",
    transition: {
      ease: "easeOut",
      duration: 0.4,
      delay: 0.3,
      staggerChildren: 0.08,
      staggerDirection: -1,
    },
  },
  show: {
    display: "block",
    opacity: 1,
    clipPath: "circle(100%)",
    transition: {
      ease: "easeIn",
      duration: 0.5,
      staggerChildren: 0.2,
      delayChildren: 0.4,
    },
  },
}

const listProp = {
  hidden: {
    y: 50,
    opacity: 0,
    transition: {
      ease: "easeOut",
      duration: 0.45,
    },
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "linear",
      duration: 0.5,
    },
  },
}

const Sidebar = ({ menuOpen, setMenuOpen }) => {
  return (
    <Nav>
      <NavMenuBtn menuOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
      </NavMenuBtn>
      <NavList
        menuOpen={menuOpen}
        variants={navProp}
        initial={false}
        animate={menuOpen ? "show" : "hidden"}
      >
        <motion.li
          className="nav-list-item"
          variants={listProp}
          whileHover={{ scale: 1.1 }}
        >
          <Link to="/">Work</Link>
        </motion.li>
        <motion.li
          className="nav-list-item"
          variants={listProp}
          whileHover={{ scale: 1.1 }}
        >
          <Link to="/">About</Link>
        </motion.li>
      </NavList>
    </Nav>
  )
}

export default Sidebar

// import React from "react"
// import { Link } from "gatsby"
// import styled from "styled-components"
// import { motion } from 'framer-motion'

// const Nav = styled.nav`
//   height: 24px;
//   z-index: 20;

//   @media (min-width: ${({ theme }) => theme.breakpoint.sm}) {
//     width: 40%;
//   }
// `

// const NavMenuBtn = styled.button`
//   background: transparent;
//   border: 0;
//   border-radius: 0;
//   display: block;
//   height: 24px;
//   width: 24px;
//   padding: 0;
//   position: relative;
//   top: -1px;

//   &:focus {
//     outline: none;
//   }

//   span {
//     height: 2px;
//     left: 0;
//     position: absolute;
//     width: 24px;
//     background-color: ${({ menuOpen }) => (menuOpen ? "#fff" : "#000")};

//     :first-child {
//       top: ${({ menuOpen }) => (menuOpen ? "11px" : "6px")};
//       transform: ${({ menuOpen }) =>
//         menuOpen ? "rotate(45deg)" : "rotate(0)"};
//       transform-origin: center;
//     }

//     :nth-child(2) {
//       bottom: ${({ menuOpen }) => (menuOpen ? "11px" : "6px")};
//       transform: ${({ menuOpen }) =>
//         menuOpen ? "rotate(-45deg)" : "rotate(0)"};
//       transform-origin: center;
//     }
//   }

//   @media (min-width: ${({ theme }) => theme.breakpoint.sm}) {
//     display: none;
//   }
// `

// const NavList = styled.ul`
//   display: ${({ menuOpen }) => (menuOpen ? "block" : "none")};
//   background: #000;
//   margin: 0;
//   height: calc(100vh - 80px);
//   position: fixed;
//   left: 0;
//   top: 79px;
//   width: 100vw;
//   padding: 15px 9.375% 60px;

//   li {
//     flex: 0 0 auto;
//     margin-bottom: 30px;
//   }

//   a {
//     color: #fff;
//     font-size: 50px;
//     font-weight: 500;
//     line-height: 1;
//     margin: 0;
//     display: inline-block;
//     white-space: nowrap;
//   }

//   @media (min-width: ${({ theme }) => theme.breakpoint.sm}) {
//     display: flex;
//     justify-content: flex-end;
//     align-items: center;
//     height: 100%;
//     width: 100%;
//     position: relative;
//     left: auto;
//     top: auto;
//     background: transparent;
//     color: #000;
//     padding: 0;

//     li {
//       display: block;
//       flex: none;
//       margin: 0;
//       margin-left: 2rem;
//     }

//     a {
//       font-size: 16px;
//     }
//   }
// `

// const Navbar = ({ menuOpen, setMenuOpen }) => {
//   return (
//     <Nav>
//       <NavMenuBtn menuOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
//         <span></span>
//         <span></span>
//       </NavMenuBtn>
//       <NavList menuOpen={menuOpen}>
//         <li>
//           <Link to="/">Work</Link>
//         </li>
//         <li>
//           <Link to="/">About</Link>
//         </li>
//       </NavList>
//     </Nav>
//   )
// }

// export default Navbar
