import React from "react"

import Layout from "../../components/layout/layout"
import Seo from "../../components/seo"

const Contact = () => {
  return (
    <Layout title="Let's connect">
      <Seo title="Josh Rodriguez, front end engineer, contact page" />
      <h1>Contact</h1>
      <table>
        <thead>
          <tr>
            <th>Channel</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Phone</td>
            <td>available upon request</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>
              <a
                href="mailto:jrodshua@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                jrodshua@gmail.com
              </a>
            </td>
          </tr>
          <tr>
            <td>LinkedIn</td>
            <td>
              <a
                href="https://www.linkedin.com/in/jrodshua/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/jrodshua/
              </a>
            </td>
          </tr>
          <tr>
            <td>GitHub</td>
            <td>
              <a
                href="https://github.com/jrodshua"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/jrodshua
              </a>
            </td>
          </tr>
          <tr>
            <td>Twitter</td>
            <td>
              <a
                href="https://twitter.com/jrodshua"
                target="_blank"
                rel="noopener noreferrer"
              >
                twitter.com/jrodshua
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </Layout>
  )
}

export default Contact
