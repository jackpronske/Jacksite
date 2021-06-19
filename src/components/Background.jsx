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
      <div className="container">
        <div className="slider"> Jack Pronske </div>
      </div>
    )
  }
}

export default Background;
