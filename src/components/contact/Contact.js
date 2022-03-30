import React, { useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2"
import "./contact-us.css";
import {
  EMAILJS_USER_ID,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
} from "../config"




const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");


  function sendEmail(e) {
    e.preventDefault()
    emailjs.sendForm(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    e.target,
     EMAILJS_USER_ID,
    ).then(res => {
      Swal.fire({
        title: 'Thanks for contacting me, I will get back to you soon.',
        icon: 'success',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }).catch(err => {
      Swal.fire({
        title: 'Failed to Send',
        icon: 'error',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });
    });
  }

  return (
    <div className="main_contact_container global_style_container_box">
      <div className="inner_contact_container">

        <div className="contact_title_box contact">
          <h1>Contact Me</h1>
          <p>I'm happy to answer any question you have. Just send me a message in the form below with any questions you may have.</p>
          <div className="border_line"></div>
        </div>

        <form onSubmit={sendEmail}>
          <div className="form-container">
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              autoComplete="off"
              required
            />
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              autoComplete="off"
              required
            />
            <input
              type="text"
              name="subject"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject"
              autoComplete="off"
              required
            />
            <textarea
              type="text"
              name="message"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="6"
              cols="45"
              placeholder="What's on your mind?"
              autoComplete="off"
              required
            ></textarea>

            <button type="submit" id="btn-style">
              Submit
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default Contact;
