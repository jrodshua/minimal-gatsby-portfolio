import React from "react"
import "./styles.css"
import avatar from "../images/avatar.png"

const Home = () => {
  return (
    <div className="page">
      <div className="container">
        <header>
          <div className="header">
            <img
              src={avatar}
              alt="Josh Rodriguez at Japantown, San Francisco"
            />
            <div className="social-handle">
              <span className="name">Josh Rodriguez</span>
              <span className="handle">@jrodshua</span>
            </div>
          </div>
        </header>
        <main>
          <div className="main-wrapper">
            <section id="hero">
              <div className="hero-container">
                <h1>Hi, thanks for visiting!</h1>
                <p>
                  My portfolio is currently under construction, please check
                  back again for my newly redesigned and rebuilt site.
                </p>
              </div>
            </section>
            <section id="links">
              <div className="links-container">
                <h2>Let's connect</h2>
                <div className="links-item">
                  <a
                    href="mailto:jrodshua@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Email me!
                  </a>
                </div>
                <div className="links-item">
                  <a
                    href="https://github.com/jrodshua"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
                <div className="links-item">
                  <a
                    href="https://twitter.com/jrodshua"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </div>
                <div className="links-item">
                  <a
                    href="https://www.linkedin.com/in/jrodshua/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </div>
                <div className="links-item">
                  <a
                    href="https://www.twitch.tv/jrodshua"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitch
                  </a>
                </div>
              </div>
            </section>
            <section id='featured-projects'>
              <div className='projects'>
                <h3>Some recent projects:</h3>
                <div className='project-container'>
                  <a
                    href="https://github.com/jrodshua/usagiBakeryLiveSite"
                    target="_blank"
                    rel="noopener noreferrer"
                  >UsagiBakery</a>
                  <a
                    href="https://github.com/jrodshua/URLurker"
                    target="_blank"
                    rel="noopener noreferrer"
                  >URLurker</a>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Home
