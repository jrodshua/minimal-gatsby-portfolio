import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout/layout"
import Seo from "../../components/seo"

const UsagiBakery = () => {
  return (
    <Layout title="Usagi.Bakery">
      <Seo title="Usagi Bakery client ecommerce project" />
      <h1>Client ecommerce project</h1>
      <p>
        A modern and minimal e-commerce project built using Gatsby, Stripe, and
        Sanity for Usagi.Bakery.
      </p>
      <StaticImage
        src="../../images/usagiBakeryScreenCap.png"
        alt="Usagibakery website"
      />
      <h2>Overview</h2>
      <p>
        I created this website for my girlfriend who had recently launched her
        vegan bakery business, Usagi.Bakery. I decided to build her site using
        Gatsby, for the ssg performance & seo benefits, as well as access to
        their vast plugin library.
      </p>
      <p>
        Product management and payments are handled securely using the Stripe
        API (client-side) and the blog is handled using Sanity headless CMS (I
        built the schema and hosted it seperately)
      </p>
      <h3>Highlights & Problems Solved:</h3>
      <ul>
        <li>Needed fast performant site</li>
        <li>Available offline for product viewing</li>
        <li>Secure payment handling</li>
        <li>Easy CMS for client</li>
      </ul>
    </Layout>
  )
}

export default UsagiBakery
