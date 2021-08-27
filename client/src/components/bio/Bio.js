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
          <p className="bio-name">Hello, I'm Jack.</p>
        </div>
        <p>
          I'm a software developer base out of Austin, TX. As someone who is
          highly focused and attentive to detail, I thrive on building quality
          systems that surpass end users' expectations.
        </p>
        <p className="last-paragraph">
          I specialize in Javascript, tech stack includes React/Redux,
          NodeJS/ExpressJS, SQL/NoSQL databases, as well as AWS and other cloud
          services.
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
