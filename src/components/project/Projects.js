/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import BlogImage from "../../images/blog-project-img-1.png";
import E_trackerImage from "../../images/e-tracker-project-img-2.png";
import RealEstateImage from "../../images/real-estate-project-img-3.jpg";
import "./projects.css";


const Projects = () => {
  return (
    <div className="main_projects_container global_style_container_box">
      <div className="inner_projects_container">

        <div className="projects_title_box projects">
          <h1>Recent Projects</h1>
          <div className="border_line"></div>
        </div>

        <div className="projects_content_box">

          <div className="projects_container_one">
            <a href="https://pow-lib.com/" rel="noreferrer" target="_blank">
              <img src={BlogImage} alt="" />
            </a>
            <div className="project_items_box">
              <a href="https://pow-lib.com/" rel="noreferrer" target="_blank">
                <h3>Pool of Writers' Website</h3>
              </a>
              <p>
                The Pool of Writers (POW) website is an advanced blog website that I developed for a group of writers in Liberia, West Africa.
              </p>
              <p>
                These are the Technologies that I used to developed this project: <span className='tech-stack-color'>Tailwind css</span>, <span className='tech-stack-color'>ReactJS</span>, <span className='tech-stack-color'>Redux</span>, <span className='tech-stack-color'>Jwt Auth</span>, <span className='tech-stack-color'>NodeJS</span>, <span className='tech-stack-color'>ExpressJS</span> & <span className='tech-stack-color'>Mongodb</span>.
              </p>
              <div className="project_links_box">
                <a href="https://pow-lib.com/" rel="noreferrer" target="_blank" className="project_btn">
                  View Project
                </a>
                <a href="https://github.com/markwisdomreeves/pow_blog_website" rel="noreferrer" target="_blank" className="github_btn">
                  Source Code
                </a>
              </div>
            </div>
          </div>

          <div className="projects_container_one">
            <a href="https://www.e-tracker.site" rel="noreferrer" target="_blank">
              <img src={E_trackerImage} alt="" />
            </a>
            <div className="project_items_box">
              <a href="https://www.e-tracker.site" rel="noreferrer" target="_blank">
                <h3>E-Tracker Web App</h3>
              </a>
              <p>
                This E-Tracker Web App allows users to manage the flow of incomes and expenses in one dashboard by tracking what they earned or spent.
              </p>
              <p>
              These are the Technologies that I used to developed this project: <span className='tech-stack-color'>Bootstrap</span>, <span className='tech-stack-color'>ReactJS</span>, <span className='tech-stack-color'>Redux</span>, <span className='tech-stack-color'>Jwt Auth</span>, <span className='tech-stack-color'>NodeJS</span>, <span className='tech-stack-color'>ExpressJS</span> & <span className='tech-stack-color'>Mongodb</span>.
              </p>
              <div className="project_links_box">
                <a href="https://www.e-tracker.site" rel="noreferrer" target="_blank" className="project_btn">
                  View Project
                </a>
                <a href="https://github.com/markwisdomreeves/expense-manager-web-app" rel="noreferrer" target="_blank" className="github_btn">
                  Source Code
                </a>
              </div>
            </div>
          </div>

          <div className="projects_container_one">
            <a href="https://real-estate-h.herokuapp.com/" rel="noreferrer" target="_blank">
              <img src={RealEstateImage} alt="" />
            </a>
            <div className="project_items_box">
              <a href="https://real-estate-h.herokuapp.com/" rel="noreferrer" target="_blank">
                <h3>Real Estate Website</h3>
              </a>
              <p>
                This website sells Real Estate properties like Homes and Estates. It forces the users to be authenticated and login before buying properties.
              </p>
              <p>
                These are the Technologies that I used to developed this project: <span className='tech-stack-color'>Css3</span>, <span className='tech-stack-color'>ReactJS</span>, <span className='tech-stack-color'>Context API</span>, <span className='tech-stack-color'>Jwt Auth</span>, <span className='tech-stack-color'>NodeJS</span>, <span className='tech-stack-color'>ExpressJS</span> & <span className='tech-stack-color'>Mongodb</span>.
              </p>
              <div className="project_links_box">
                <a href="https://real-estate-h.herokuapp.com/" rel="noreferrer" target="_blank" className="project_btn">
                  View Project
                </a>
                <a href="https://github.com/markwisdomreeves/real-estate-project" rel="noreferrer" target="_blank" className="github_btn">
                  Source Code
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}


export default Projects;
