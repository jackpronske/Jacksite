import React from "react";
import ReactPlayer from "react-player";

const Bio = ({ guts }) => {
  const meOrGuts = guts ? (
    <ReactPlayer
      className="bio-background"
      url="https://www.youtube.com/watch?v=vZa0Yh6e7dw"
    />
  ) : (
    <img src="images/Waterfall-jack.png" className="bio-background" />
  );
  return (
    <div id="about" className="container bio-container">
      <div className="bio-about">
        <h3 className="bio-title">Full Stack Developer</h3>
        <div className="bio-name-button-container">
          <p className="bio-name">Jack Pronske</p>
        </div>
        <p>
          I specialize in Javascript and my tech stack includes React/Redux,
          NodeJS/ExpressJS, SQL/NoSQL databases, and some AWS.
        </p>
        <p className="last-paragraph">
          Previously in life, I was a professionally sponsored musician/educator
          and wrote a book about techniques and processes for my craft. This
          required me to develop a strong attention to detail and dedication to
          see longer projects through. I continue to bring that same energy into
          my passion for programming.
        </p>
        <a
          href="assets/Jack_Pronske_Resume.pdf"
          download
          className="bio-resume-button"
        >
          {" "}
          Download Resume{" "}
        </a>
      </div>
      {meOrGuts}
    </div>
  );
};

export default Bio;
