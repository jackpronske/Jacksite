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
        <h3>Full Stack Developer</h3>
        <p>Jack Pronske</p>
        <p>
          something about me asdfasdfasdfasdfasdfasdfasdf sdfa sdfasdfasdfasdfa
          sdfasdf asdfasdfasdf asdf asdfasdfa sdfasdfa sdfa sdf asdfasdfasd fsdf
          asdf asdf asdf asdfasdfasdfa sdfa sdf asdf asdf asdfasdfa sfasdfasdf
          asdfasdfa sdfa sdfasdf
        </p>
      </div>
      {meOrGuts}
      {/* <img src="images/Waterfall-jack.png" className="bio-background" /> */}
    </div>
  );
};

export default Bio;
