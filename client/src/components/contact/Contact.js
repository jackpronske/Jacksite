import React from "react";
import ContactItem from "./ContactItem";

const Contact = () => {
  const contactObjects = [
    {
      name: "Jopronske@gmail.com",
      image_url: "images/Mail.png",
    },
    {
      name: "Austin, TX",
      image_url: "images/Location.png",
    },
    {
      name: "Phone | Zoom",
      image_url: "images/Phone.png",
    },
    {
      name: "GitHub",
      image_url: "images/GitHub.png",
      url: "https://github.com/jackpronske",
    },
    {
      name: "LinkedIn",
      image_url: "images/LinkedIn.png",
      url: "https://www.linkedin.com/in/jackpronske/",
    },
  ];
  return (
    <div id="contact" className="container contact-container">
      {contactObjects.map((contact, i) => {
        return <ContactItem contact={contact} key={i} />;
      })}
    </div>
  );
};

export default Contact;
