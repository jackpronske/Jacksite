import React from 'react';
import EnterSite from './EnterSite.jsx';
import Background from './Background.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: true,
    };
    this.handleEnterSiteButtonClick = this.handleEnterSiteButtonClick.bind(this);
  }

  handleEnterSiteButtonClick() {
    this.setState({
      showLogin: false,
    })
  }

  render() {
    const { showLogin } = this.state;

    const currentView = showLogin ?
      <EnterSite handleEnterSiteButtonClick={this.handleEnterSiteButtonClick}/>
      : <Background />;

    return (
      <>
        {currentView}
      </>
    )
  }
}

export default App;
