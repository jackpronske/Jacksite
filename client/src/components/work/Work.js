import React from "react";
import WorkItem from "./WorkItem";
import { workItems } from "../../websiteData";

const Work = () => {
  return (
    <div id="portfolio" className="container work-container">
      {workItems.map((item, i) => {
        return <WorkItem item={item} key={i} />;
      })}
    </div>
  );
};

export default Work;
