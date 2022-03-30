import React, { useState, useEffect } from 'react';
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaInstagram
} from "react-icons/fa";
import { AiOutlineSafetyCertificate } from 'react-icons/ai';
import ScrollToTopButton from "../ScrollToTopButton";
import "./footer.css"


const Footer = () => {

  const [date, setDate] = useState();

  const getYear = () =>  setDate(new Date().getFullYear())

  useEffect(() => {
    getYear()
  }, [])

  return (
    <>
    <div className="main_footer_container">

    {/* <hr id="footer_line" /> */}

      <div className="inner_footer_container">
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

        <div className="all_right_reserved_container">
          <p>Full Stack Web Developer &copy; {date}</p>
        </div>
      </div>

    </div>

    <ScrollToTopButton />
    </>
  )
}

export default Footer;
