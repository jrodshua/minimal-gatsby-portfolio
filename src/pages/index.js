import React from "react"
import Layout from "../components/site/layout"
import SEO from "../components/seo/seo"
import HomePage from "../components/home/homePage"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomePage />
  </Layout>
)

export default IndexPage
