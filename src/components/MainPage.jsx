import React, { Component } from 'react';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div> Jack Pronske </div>
        <ul>
          <li>Home</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
        <div>Blog Stuff? Maybe some dev twitter posts, screen shots</div>
        <h3>Work</h3>
        <div>Work examples, starting with FEC gif, create the breathe page</div>
        <h3>Contact</h3>
        <div>this should be at the bottom of the page, my contact info and possibly a way to copy my email address from a click of a buton</div>
        <div>social media icons (linkedin, dev twitter, github)</div>
      </div>
    );
  }
};

export default MainPage;