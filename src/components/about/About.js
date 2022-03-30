import React from "react";
import Me from "../../images/me.png"
import "./about-us.css"


const About = () => {
  const [about] = React.useState({
    subAbout: "About Me",
    text1:
      "I am a Full Stack Web Developer living in Italy, Europe. Am a creative and innovative Web Developer. I am interested in developing real world projects.",
    text2:
      "I am willing to learn new skills and technologies as a Developer. Apart from Web Development, Am also a Computer Hardware Engineer with six (6) years of work experience.",
  });
  const [about_contact] = React.useState([
    { id: 1, title: "Full Name:", text: "Mark Wisdom Reeves" },
    { id: 2, title: "Email Address:", text: "wisdom3510802563@gmail.com" },
    { id: 3, title: "Phone Number:", text: "+39 377 357 3878" },
    { id: 4, title: "Linkedin Username", text: "mark-wisdom-reeves" },
  ]);
  return (
    <div className="main_about_container global_style_container_box">
      <div className="inner_about_container">

        <div className="about_title_box about">
          <h1>{about.subAbout}</h1>
          <div className="border_line"></div>
          <div className="about_text_box">
            <p>{about.text1}</p>
            <p>{about.text2}</p>
          </div>
        </div>

        <div className="about_content_container">
          <div className="about_image_box about_global_content">
            <img src={Me} alt="" />
          </div>
          <div className="about_global_content">
            {about_contact.map((info) => (
              <div className="info_contacts_box" key={info.id}>
                <strong>{info.title}</strong>
                <p>{info.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
