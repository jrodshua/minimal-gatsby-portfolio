import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout/layout"
import Seo from "../../components/seo"

const About = () => {
  return (
    <Layout title="About me">
      <Seo title="Josh Rodriguez, front end engineer, about page" />
      <h1>Hi I'm Josh!</h1>
      <StaticImage
        src="../../images/josh-rodriguez-avatar.jpeg"
        alt="Josh Rodriguez"
        style={{ display: "block", width: "80%", margin: "0 auto 1.5rem" }}
      />
      <p>
        I create and build things for the web, sometimes mobile too! Although my
        focus is mostly on the front-end,{" "}
        <strong>
          I’m constantly learning and working towards becoming a better and
          well-rounded programmer.
        </strong>{" "}
        My interest in coding started back in 2017, a bit after I was hired at
        Lyft. At that time, Lyft was still very much a startup and many of us
        wore a variety of hats. Luckily, that gave me the opportunity to help
        (and eventually be responsible for), the Lyft Nevada website. But this
        wasn’t what started my programming journey. It was my interactions with
        peers, working in the swe org, and my 1:1s with a direct report,
        pursuing a cs degree, that piqued my interest and pushed me to start
        casually learning.
      </p>
      <p>
        Then in May 2020, I was part of the first wave of Lyft’s mass layoffs.
        Originally, I planned to start applying for new ops roles immediately,
        but after a conversation with my former manager, I decided to take some
        time for myself. During the lockdown I learned a lot about myself, and
        after some trial and error, figured out{" "}
        <strong>
          what I enjoyed doing most, building and problem solving.
        </strong>{" "}
        Eventually, I connected that with software engineering/web development
        and have been{" "}
        <em>learning, creating, building, failing, and relearning</em> since.
      </p>
    </Layout>
  )
}

export default About
