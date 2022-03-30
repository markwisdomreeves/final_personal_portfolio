import React, { useEffect, useState } from 'react'
import { FaAlignJustify } from "react-icons/fa";
import { Link as LinkScroll } from "react-scroll"
import { MdClose } from 'react-icons/md'
import "./navbar.css"


const Navbar = () => {
  const [navbar, setNavbar] = useState(false)
  const [showNav, setShowNav] = useState(false);


  useEffect(() => {
    changebackgroundColor()
    setNavbar()
    setShowNav()
  }, [])


  const changebackgroundColor = () => {
    if (window.scrollY >= 80) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll',  changebackgroundColor)


  return (
    <>
      <nav className={navbar ? "navbar-container active" : "navbar-container"}>
        <div className="logo-container">
          <LinkScroll
            to="home"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Mark Wisdom Reeves
          </LinkScroll>
        </div>
        <div
          className="open-mobile-menu"
          onClick={() => setShowNav(!showNav)}
          role="button"
          onKeyDown={() => setShowNav(!showNav)}
          tabIndex={0}
        >
         <FaAlignJustify id="icons_class_colors" />
        </div>

        <ul className={!showNav ? 'navbar-link-items hide-navbar-link-item' : 'navbar-link-items'}>
          <div
            className="close-navbar-menu"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
            >
            <MdClose id="menu-close-icon" />
          </div>

          <li>
            <LinkScroll
              to="home"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={() => setShowNav(!showNav)}
              onKeyDown={() => setShowNav(!showNav)}
            >
              Home
            </LinkScroll>
          </li>
          <li>
            <LinkScroll
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={() => setShowNav(!showNav)}
              onKeyDown={() => setShowNav(!showNav)}
            >
              About
            </LinkScroll>
          </li>
          <li>
            <LinkScroll
              to="projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={() => setShowNav(!showNav)}
              onKeyDown={() => setShowNav(!showNav)}
            >
              Projects
            </LinkScroll>
          </li>
          <li>
            <LinkScroll
              to="skills"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={() => setShowNav(!showNav)}
              onKeyDown={() => setShowNav(!showNav)}
            >
              Skills
            </LinkScroll>
          </li>
          <li>
            <LinkScroll
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={() => setShowNav(!showNav)}
              onKeyDown={() => setShowNav(!showNav)}
            >
              Contact
            </LinkScroll>
          </li>
        </ul>
      </nav>
    </>
  )
}


export default Navbar;
