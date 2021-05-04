import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout title="Hi, I'm Josh">
    <Seo title="Home" />
    <h1>I'm a front end engineer</h1>
    <p>
      I build web applications using React, Gatsby, or Next.js with
      accessibility, user experience, and performance in mind
    </p>
    <h3>overview:</h3>
    <ul>
      <li>
        <span role="img" aria-label="Man tipping hand emoji">
          💁‍♂️
        </span>{" "}
        I'm Josh, a front end engineer
      </li>
      <li>
        <span role="img" aria-label="Atom symbol emoji">
          ⚛️
        </span>{" "}
        I mostly build with React, Gatsby, or Next.js
      </li>
      <li>
        <span role="img" aria-label="Shopping trolley emoji">
          🛒
        </span>{" "}
        Check out a client eCommerce project I built:{" "}
        <a href="https://www.usagibakery.com/">Usagi.Bakery</a>
      </li>
      <li>
        <span role="img" aria-label="Briefcase Emoji">
          💼
        </span>{" "}
        Or an employee hours/pay application I built for a friend:{" "}
        <a href="https://github.com/jrodshua">Ops Party</a>
      </li>
      <li>
        <span role="img" aria-label="Pushpin emoji">
          📌
        </span>{" "}
        Here's what I'm currently working on:{" "}
        <a href="https://github.com/jrodshua">Partyy</a>
      </li>
      <li>
        <span role="img" aria-label="Cat face emoji">
          🐱
        </span>{" "}
        Everything else can be found on my{" "}
        <a href="https://github.com/jrodshua">github</a>
      </li>
      <li>
        <span role="img" aria-label="Bust in silhouette emoji">
          👤
        </span>{" "}
        Looking for my{" "}
        <a href="https://www.linkedin.com/in/jrodshua/">LinkedIn?</a>
      </li>
      <li>
        <span role="img" aria-label="Page facing up emoji">
          📄
        </span>{" "}
        Need my <a href="https://google.com">resume?</a>
      </li>
      <li>
        <span role="img" aria-label="Envelope Emoji">
          ✉️
        </span>{" "}
        Here's my email:{" "}
        <a href="mailto:jrodshua@gmail.com">jrodshua@gmail.com</a>
      </li>
    </ul>
    <Link to="/background/contact">Let's connect!</Link>
  </Layout>
)

export default IndexPage
