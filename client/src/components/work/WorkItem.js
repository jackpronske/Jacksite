import React from "react";

const WorkItem = ({ item }) => {
  return (
    <div className="work-item-container">
      <img className="work-item-image" src={item.image_url} />
      <div className="work-item-text-container">
        <h3 className="work-item-name">{item.name}</h3>
        <p className="work-item-stack">{item.stack}</p>
        <p className="work-item-description">{item.description}</p>
      </div>
    </div>
  );
};

export default WorkItem;
