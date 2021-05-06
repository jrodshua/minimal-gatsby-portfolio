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
        <li>HTML, CSS, JS, TS</li>
        <li>React, Gatsby, Next</li>
        <li>Node, Express</li>
        <li>APIs, JSON</li>
        <li>Bash, CL</li>
        <li>Git, GitHub</li>
        <li>Linux VM, Nginx, pm2</li>
        <li>Communication</li>
        <li>Problem-Solving</li>
        <li>Interpersonal Skills</li>
        <li>Learning</li>
      </ul>
      <ResumeButton />
    </Layout>
  )
}

export default Resume
