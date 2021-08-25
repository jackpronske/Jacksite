import React from "react";
import WorkItem from "./WorkItem";

const Work = () => {
  const workItems = [
    {
      name: "Lovelace Legends",
      stack: "React | Pure-CSS | Jest | Axios | Node/Express | A11y",
      description:
        "Developed a Related Products and Outfit Creator module for an e-commerce website.",
      image_url: "assets/FEC_demo.gif",
    },
    {
      name: "Sudoku Solver",
      stack: "Node | Jest | CMD-line | Recursion",
      description:
        "Created a Sudoku solving algorithm that will take an incomplete board and provide a valid solution.",
      image_url: "assets/Sudoku_solution.gif",
    },
  ];
  return (
    <div id="portfolio" className="container work-container">
      {workItems.map((item, i) => {
        return <WorkItem item={item} key={i} />;
      })}
    </div>
  );
};

export default Work;
