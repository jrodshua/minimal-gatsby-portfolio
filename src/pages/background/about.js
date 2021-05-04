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
      />
      <p>
        I'm a front end software engineer out of Las Vegas, NV. YOLO vinyl blue
        bottle neutra occupy scenester portland squid swag. Vexillologist
        biodiesel kinfolk, sustainable aesthetic hell of copper mug bushwick
        ennui iceland. Authentic cray affogato single-origin coffee before they
        sold out poutine heirloom mumblecore master cleanse poke tbh synth
        butcher DIY. Deep v wayfarers gochujang tofu chia literally copper mug.
      </p>
    </Layout>
  )
}

export default About
