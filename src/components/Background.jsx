import React from 'react';

class Background extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
    };
    this.moveLeft = this.moveLeft.bind(this);
  }

  componentDidMount() {
    setInterval(this.moveLeft, 50);
  }

  moveLeft() {
    const { x } = this.state;
    const newX = x - 5;
    this.setState({
      x: newX,
    })
  }

  render() {
    const { x } = this.state;
    return (
      <div id="background-frame">
        <div
          id="background-rectangle"
          style={{
            transform: `translateX(${x}px)`
          }}
        ></div>
      </div>
    )
  }
}

export default Background;
