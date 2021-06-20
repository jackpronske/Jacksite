import React from 'react';

class Background extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: ['bio', 'github']
    };
  }

  render() {
    return (
      <div className="enter-site-container">
        <div className="container">
          <div className="slider"> welcome to jack pronske </div>
        </div>
        <div className="enter-site-button"> enter </div>
      </div>
    )
  }
}

export default Background;
