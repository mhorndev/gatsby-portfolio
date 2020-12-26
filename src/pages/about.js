import React, {useContext } from "react"
import styled from "styled-components"
import { Context } from "../components/context"

const AboutPage = ({}) => {
  const {globalContext,setGlobalContext} = useContext(Context)

  return (
    <div id="page">
      <section className={globalContext.darkMode && "dark"}>
        <div id="container">
          <div className="section-title">
            <h1>About{" "}<span className="accent">Me</span>.</h1>
          </div>
          <div className="section-content">Content</div>
        </div>
      </section>
      <section className={globalContext.darkMode ? "dark alt" : "alt"}>
        <div id="container">
          <div className="section-title"><h1>Experience.</h1></div>
          <div className="section-content">
            <h2>Streamline</h2>
            <h4>Full Stack Developer</h4>
            <div>2016 - Present</div>
            <ul>
              <li>
                Detail
              </li>
            </ul>
            <h2>DirecTV</h2>
            <h4>Software Engineer</h4>
            <div>2013 - 2015</div>
            <ul>
              <li>
                Detail
              </li>
            </ul>
            <h2>DirecTV</h2>
            <h4>Quality Assurance</h4>
            <div>2013</div>
            <ul>
              <li>
                Detail
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className={globalContext.darkMode && "dark"}>
        <div id="container">
          <div className="section-title"><h1>Education.</h1></div>
          <div className="section-content">
            <h2>Western Governor's University</h2>
            <h4>BSCS - Bachelor of Science, Computer Science</h4>
            <div>2018 - 2020</div>
            <ul>
              <li>
                Detail
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className={globalContext.darkMode ? "dark alt" : "alt"}>
        <div id="container">
          <div className="section-title"><h1>Certifications.</h1></div>
          <div className="section-content">
            <h2>Project+</h2>
            <ul>
              <li>
                Detail
              </li>
            </ul>
            <h2>ITIL</h2>
            <ul>
              <li>
                Detail
              </li>
            </ul>
            <h2>CIW Site Developer</h2>
            <ul>
              <li>
                Detail
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage