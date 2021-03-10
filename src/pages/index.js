import React from "react"
import Layout from "../components/site/layout"
import SEO from "../components/seo/seo"
import HomePage from "../components/home/homePage"
import WorkPage from "../components/work/workPage"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomePage />
    <WorkPage />
  </Layout>
)

export default IndexPage
