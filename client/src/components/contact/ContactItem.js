import React from "react";

const ContactItem = ({ contact }) => {
  const handleClick = () => {
    switch (contact.type) {
      case "MAIL":
        navigator.clipboard.writeText(contact.name);
      case "LOCATION":
        window.open("https://youtu.be/AW2cmIIomac?t=246", "_blank");
      case "PHONE":
        window.open("https://zoom.us/", "_blank");
      case "GITHUB":
        window.open(contact.url, "_blank");
      case "LINKEDIN":
        window.open(contact.url, "_blank");
    }
  };
  return (
    <div
      onClick={() => {
        handleClick();
      }}
      className="contact-item-container"
    >
      <img className="contact-item-image" src={contact.image_url} />
      <p className="contact-item-name">{contact.name}</p>
    </div>
  );
};

export default ContactItem;
