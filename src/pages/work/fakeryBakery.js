import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout/layout"
import Seo from "../../components/seo"

const FakeryBakery = () => {
  return (
    <Layout title="FakeryBakery">
      <Seo title="FakeryBakery, a React ui clone of milkbarstore.com" />
      <h1>UI Milk Bar clone</h1>
      <a
        href="https://flamboyant-yonath-0a114d.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StaticImage
          src="../../images/fakeryBakeryScreen.png"
          alt="Fakery Bakery website"
        />
      </a>
      <span style={{ textAlign: "center" }}>
        <p>
          <b>Built with: </b>React, Styled-Components
        </p>
      </span>
      <h2>Summary</h2>
      <p>
        This project was born out of necessity to prepare for my first client
        project, UsagiBakery. It was intended to be a ui-only bakery ecommerce
        clone with limited functionality. The Milk Bar site was selected to
        clone, due to the business similarities and various site features.
      </p>
      <h2>Highlights & Problems Solved</h2>
      <ul>
        <li>Cycling news/promotion banner, custom built using React hooks</li>
        <li>Category product filter, custom built using React hooks</li>
      </ul>
    </Layout>
  )
}

export default FakeryBakery
