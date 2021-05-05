import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout/layout"
import Seo from "../../components/seo"

const Nonversation = () => {
  return (
    <Layout title="nonversation.app">
      <Seo title="Nonversation, simple and quick voice chat" />
      <h1>Simple and quick voice chat</h1>
      <a
        href="https://nonversation.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StaticImage
          src="../../images/nonversationScreen.png"
          alt="Nonversation application"
        />
      </a>
      <span style={{ textAlign: "center" }}>
        <p>
          <b>Built with: </b>React, Node/Express, Twilio Video API, Linux VM,
          Nginx, Pm2
        </p>
      </span>
      <h2>Summary</h2>
      <p>
        Lightweight voice chat application built with React, for relaying quick
        messages or simply used to chat with friends. Nonversation utilizes
        webRTC via the Twilio Video API, to create fast & secure, peer 2 peer
        connected voice-chat rooms.
      </p>
      <p>
        This project features a Node.js/Express backend, used for granting
        access tokens to users. The entire project is hosted on a Linux VM,
        using a Nginx web server and managed by a pm2 process manager.
      </p>
      <i>
        *Although this project is fully functional, it's still a WIP. Site
        styling, custom audio controls, new features, and performance
        improvements are currently being worked on.
      </i>
      <h2>Highlights & Problems Solved</h2>
      <ul>
        <li>Twilio api utilized to provide STUN/TURN server capabilities</li>
        <li>
          No account required means starting a convo is simple and very fast
        </li>
      </ul>
    </Layout>
  )
}

export default Nonversation
