import React from 'react';

class EnterSite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 9,
    };
    this.countDown = this.countDown.bind(this);
  }

  componentDidMount() {
    setInterval(this.countDown, 1000);
  }

  countDown() {
    const { handleEnterSiteButtonClick } = this.props;
    const { timer } = this.state;
    if (timer === 0) {
      handleEnterSiteButtonClick();
    }
    const newTime = timer - 1;
    this.setState({
      timer: newTime,
    })
  }

  render() {
    const { handleEnterSiteButtonClick } = this.props;
    const { timer } = this.state;

    return (
      <>
        <h1> GAME OVER </h1>
        <h3> Play Again? </h3>
        <button onClick={handleEnterSiteButtonClick}> Enter Site </button>
        <div id="timer"> :0{timer} </div>
       </>
    )
  }
}

export default EnterSite;
