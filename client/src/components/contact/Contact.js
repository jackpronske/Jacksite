import React from "react";
import ContactItem from "./ContactItem";
import { contactObjects } from "../../websiteData";

const Contact = () => {
  return (
    <div id="contact" className="container contact-container">
      {contactObjects.map((contact, i) => {
        return <ContactItem contact={contact} key={i} />;
      })}
    </div>
  );
};

export default Contact;
