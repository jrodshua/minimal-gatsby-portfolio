import React from "react"

import Layout from "../../components/layout/layout"
import Seo from "../../components/seo"
import Table from "../../components/table/table"
import ResumeButton from "../../components/buttons/resume"

const Resume = () => {
  return (
    <Layout title="Professional Experience & Skills">
      <Seo title="Josh Rodriguez, front end engineer, professional experience page" />
      <h2>Work Summary</h2>
      <Table />
      <h2>Skills</h2>
      <ul style={{ marginBottom: "1rem" }}>
        <li>HTML, CSS, JS</li>
        <li>React, Gatsby, Next</li>
        <li>Node, Express</li>
        <li>Git, GitHub</li>
        <li>Bash</li>
        <li>Nginx, pm2</li>
        <li>APIs</li>
      </ul>
      <ResumeButton />
    </Layout>
  )
}

export default Resume
