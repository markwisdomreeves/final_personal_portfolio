import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaInstagram
} from "react-icons/fa";
import { AiOutlineSafetyCertificate } from 'react-icons/ai';
import AutoTyped from "../AutoTyped";
import "./banner.css"


const Banner = () => {
  const [state] = React.useState({
    title: "Mark Wisdom Reeves",
    text:
      "Am a Full Stack Web Developer who is willing to grow by learning new Skills & Technologies.​"
  });

  return (
    <header className="main_header_container">
      <div className="inner_header_container">
        <div className="header_content_box">
          <ul>
            <li>
              <a href="https://github.com/markwisdomreeves" rel="noreferrer" target="_blank">
                <FaGithub className="banner_icons" />
              </a>
            </li>
            <li>
              <a href="https://sites.google.com/view/mark-treehouse-tech-degree" rel="noreferrer" target="_blank">
                <AiOutlineSafetyCertificate className="banner_icons" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/mark-wisdom-reeves/" rel="noreferrer" target="_blank">
                <FaLinkedinIn className="banner_icons" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/markreeves.wisdom/" rel="noreferrer" target="_blank">
                <FaFacebookF className="banner_icons" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/markwisdomreeves/" rel="noreferrer" target="_blank">
               <FaInstagram className="banner_icons" />
              </a>
            </li>
          </ul>
          <div className="banner_text_box">
            <AutoTyped />
            <p>{state.text}</p>
          </div>
          <div className="get_in_tough_box">
            <a href="mailto:wisdom3510802563@gmail.com" className="custom_btn btn btn-outline">
              Get In Touch
            </a>
            <a href="https://drive.google.com/file/d/13TDbggpOzJgHoKx56Db8iAMWk8YTf7pf/view?usp=sharing" rel="noreferrer" target="_blank" className="btn btn-smart">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};


export default Banner;
