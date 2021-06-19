import React from 'react';

class EnterSite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { handleEnterSiteButtonClick } = this.props;

    return (
      <>
        <h1> GAME OVER </h1>
        <h3> Play Again? </h3>
        <button onClick={handleEnterSiteButtonClick}> Enter Site </button>
        <div> timer goes brrr </div>
       </>
    )
  }
}

export default EnterSite;
