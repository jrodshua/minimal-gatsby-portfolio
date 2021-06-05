import React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import Hero from "../components/page/hero"
import FeaturedWork from "../components/page/featuredWork"
import About from "../components/page/about"
import Footer from "../components/page/footer"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="home" />
      <Hero />
      <FeaturedWork />
      <About />
      <Footer />
    </Layout>
  )
}

export default IndexPage
