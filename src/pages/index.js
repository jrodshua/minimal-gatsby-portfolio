import React from "react"
import Layout from "../components/site/layout"
import SEO from "../components/seo/seo"
import HomePage from "../components/home/homePage"
import WorkIndex from "../components/work/index"
import AboutPage from "../components/about/about"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomePage />
    <WorkIndex />
    <AboutPage />
  </Layout>
)

export default IndexPage
