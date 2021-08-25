import React from "react";

const ContactItem = ({ contact }) => {
  return (
    <div className="contact-item-container">
      <img className="contact-item-image" src={contact.image_url} />
      <p className="contact-item-name">{contact.name}</p>
    </div>
  );
};

export default ContactItem;
