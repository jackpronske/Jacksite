import React from "react";
import SkillItem from "./SkillItem";
import { skillItems } from "../../websiteData";

const Skills = () => {
  return (
    <div id="skills" className="container skills-container">
      {skillItems.map((skill, i) => {
        return <SkillItem skill={skill} key={i} />;
      })}
    </div>
  );
};

export default Skills;
