import React from "react";

const ContactItem = ({ contact }) => {
  const handleClick = () => {
    switch (contact.type) {
      case "MAIL":
        navigator.clipboard.writeText(contact.name);
        return;
      default:
        window.open(contact.url, "_blank");
    }
  };
  return (
    <div onClick={handleClick} className="contact-item-container">
      <img className="contact-item-image" src={contact.image_url} />
      <p className="contact-item-name">{contact.name}</p>
    </div>
  );
};

export default ContactItem;
