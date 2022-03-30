import React from 'react';
import "./skills.css";


const Skills = () => {
  return (
    <section className="main_skills_container global_style_container_box">
      <div className="inner_skills_container">

        <div className="skills_title_box skills">
          <h1>Technical Skills</h1>
          <div className="border_line"></div>
        </div>

        <div className="skills_content_box">
          <div className="skills_items_box">
            <div className="skill color_one tooltip">
             <li>Html5</li>
             <span className="tool_tip_text">Used as Hypertext Markup language</span>
            </div>
            <div className="color_one tooltip">
              <li>Css3 & Scss</li>
              <span className="tool_tip_text">Used for styling web pages</span>
            </div>
            <div className="color_one tooltip">
              <li>Git</li>
              <span className="tool_tip_text">Version Control</span>
            </div>
            <div className="color_one tooltip">
             <li>Javascript</li>
             <span className="tool_tip_text">Used for creating dynamic web pages</span>
            </div>
            <div className="color_one tooltip">
             <li>ReactJS</li>
             <span className="tool_tip_text">JavaScript library used for user interfaces</span>
            </div>
            <div className="color_one tooltip">
             <li>BootStrap</li>
             <span className="tool_tip_text">Used for styling web pages</span>
            </div>
            <div className="color_one tooltip">
             <li>Redux</li>
             <span className="tool_tip_text">Used for State Management in react.js</span>
            </div>
            <div className="color_one tooltip">
              <li>NodeJS</li>
              <span className="tool_tip_text">Used in the Backend</span>
            </div>
            <div className="color_one tooltip">
             <li>ExpressJS</li>
             <span className="tool_tip_text">NodeJs framework for Backend</span>
            </div>
            <div className="color_one tooltip">
              <li>MongoDB</li>
              <span className="tool_tip_text">Used as Database storage</span>
            </div>
            <div className="color_one tooltip">
              <li>Webpack</li>
              <span className="tool_tip_text">Module Bundler</span>
            </div>
            <div className="color_one tooltip">
             <li>Npm</li>
             <span className="tool_tip_text">Node Package Manager</span>
            </div>
            <div className="color_one tooltip">
             <li>AGILE (SCRUM)</li>
             <span className="tool_tip_text">A tool for Software Project Development</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills;
