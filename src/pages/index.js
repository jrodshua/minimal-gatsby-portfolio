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
        I build with React, Gatsby, or Next.js
      </li>
      <li>
        <span role="img" aria-label="Shopping trolley emoji">
          🛒
        </span>{" "}
        Client eCommerce site{" "}
        <a
          href="https://www.usagibakery.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Usagi.Bakery
        </a>
      </li>
      <li>
        <span role="img" aria-label="Briefcase Emoji">
          💼
        </span>{" "}
        Lightweight voice chat{" "}
        <a
          href="https://nonversation.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nonversation
        </a>
      </li>
      <li>
        <span role="img" aria-label="Pushpin emoji">
          📌
        </span>{" "}
        UI milkbar clone{" "}
        <a
          href="https://flamboyant-yonath-0a114d.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Partyy
        </a>
      </li>
      <li>
        <span role="img" aria-label="Cat face emoji">
          🐱
        </span>{" "}
        All other projects{" "}
        <a
          href="https://github.com/jrodshua"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>
      </li>
      <li>
        <span role="img" aria-label="Bust in silhouette emoji">
          👤
        </span>{" "}
        Looking for my{" "}
        <a
          href="https://www.linkedin.com/in/jrodshua/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn?
        </a>
      </li>
      <li>
        <span role="img" aria-label="Page facing up emoji">
          📄
        </span>{" "}
        Need my{" "}
        <a
          href="https://drive.google.com/file/d/1vY4Zz-qlQ9ZCT6CL4QGDMF1LJFH6tEK2/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          resume?
        </a>
      </li>
      <li>
        <span role="img" aria-label="Envelope Emoji">
          ✉️
        </span>{" "}
        Here's my email{" "}
        <a
          href="mailto:jrodshua@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          jrodshua@gmail.com
        </a>
      </li>
    </ul>
    <Link to="/background/contact">Let's connect!</Link>
  </Layout>
)

export default IndexPage
