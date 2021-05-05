import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout/layout"
import Seo from "../../components/seo"

const UsagiBakery = () => {
  return (
    <Layout title="Usagi.Bakery">
      <Seo title="Usagi Bakery client ecommerce project" />
      <h1>Client ecommerce project</h1>
      <a
        href="https://www.usagibakery.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StaticImage
          src="../../images/usagiBakeryScreenCap.png"
          alt="Usagibakery website"
        />
      </a>
      <span style={{ textAlign: "center" }}>
        <p>
          <b>Built with: </b>React, Gatsby, Styled-Components, Sanity CMS,
          Stripe API
        </p>
      </span>
      <h2>Summary</h2>
      <p>
        A modern and minimally styled ecommerce bakery site. This project was
        built with Gatsby to take advantage of the quick page loading
        performance and security benefits of static sites. For the blog, a
        custom cms schema was created with Sanity.io and hosted separately.
      </p>
      <p>
        Because this project was built for a small business, a client-only
        payment integration was required with security being of the utmost
        importance. The Stripe api was utilized to securely handle the checkout
        and payment flow through a Stripe-hosted payment page. Client-facing
        product management is handled via a user-friendly Stripe dashboard.
      </p>
      <p>
        Lastly, webhooks were created and integrated with hosting, watching for
        new blog posts or products and ensuring a fresh site rebuild always
        displays the latest content.
      </p>
      <h2>Highlights & Problems Solved</h2>
      <ul>
        <li>Custom shopping cart built using React hooks</li>
        <li>Site is installable with offline viewing available</li>
        <li>Entirely built at no cost (excluding payment transaction fees)</li>
        <li>Fully functional client-facing CMS and product management</li>
      </ul>
    </Layout>
  )
}

export default UsagiBakery
