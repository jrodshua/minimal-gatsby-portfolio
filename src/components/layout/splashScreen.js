import React, { useEffect } from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import { motion, useAnimation } from "framer-motion"

const StyledSplash = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0%;
  z-index: 900;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;

  .logo-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 4rem;
  }

  .bd-div {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 100%;
    background-color: #000;
  }

  .logo-container {
    color: #fff;
    font-size: 1.5rem;
  }
`

// framerMotion variants
const bgProp = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
    transform: "translateY(-100%)",
    transition: {
      duration: 0.6,
      delay: 0.2,
    },
  },
}

const bdProp = {
  init: {
    height: "100%",
  },
  exit: {
    height: "0%",
    transition: {
      delay: 0.4,
    },
  },
}

const SplashScreen = ({ introDone, setIntroDone }) => {
  const bgControls = useAnimation()
  const bdControls = useAnimation()

  useEffect(() => {
    const handleSplash = async () => {
      await bgControls.start("show")
      await bdControls.start("exit")
      await bgControls.start("exit")
      setIntroDone(true)
    }
    handleSplash()
  }, [bgControls, bdControls, setIntroDone])

  return (
    <StyledSplash variants={bgProp} initial="hidden" animate={bgControls}>
      <Helmet bodyAttributes={{ class: !introDone ? "splashScreen" : "" }} />
      <div className="logo-wrapper">
        <motion.div
          className="bd-div"
          variants={bdProp}
          initial={"init"}
          animate={bdControls}
        />
        <div className="logo-container">Josh Rodriguez</div>
      </div>
    </StyledSplash>
  )
}

export default SplashScreen
