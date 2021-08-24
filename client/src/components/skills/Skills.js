import React from "react";
import SkillItem from "./SkillItem";

const Skills = () => {
  const skillItems = [
    {
      name: "JavaScript",
      url: "images/JavaScript_Logo.png",
    },
    {
      name: "React | Redux",
      url: "images/ReactRedux_Logo.png",
    },
    {
      name: "HTML | CSS",
      url: "images/Htmlcss_Logo.png",
    },
    {
      name: "Node | Express",
      url: "images/Node_Logo.png",
    },
    {
      name: "MongoDB",
      url: "images/Mongo_Logo.png",
    },
    {
      name: "PostgreSQL",
      url: "images/Postgres_Logo.png",
    },
  ];
  return (
    <div id="skills" className="container skills-container">
      {skillItems.map((skill, i) => {
        return <SkillItem skill={skill} key={i} />;
      })}
    </div>
  );
};

export default Skills;
