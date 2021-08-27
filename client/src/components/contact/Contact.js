import React from "react";
import ContactItem from "./ContactItem";
import { contactItems } from "../../websiteData";

const Contact = () => {
  return (
    <div id="contact" className="container contact-container">
      {contactItems.map((contact, i) => {
        return <ContactItem contact={contact} key={i} />;
      })}
    </div>
  );
};

export default Contact;
