import React from "react";

const SkillItem = ({ skill }) => {
  return (
    <div className="skill-item-container">
      <img className="skill-item-logo" src={skill.url} />
      <div className="skill-item-name">{skill.name}</div>
    </div>
  );
};

export default SkillItem;
