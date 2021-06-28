import React, { Component } from 'react';
import EnterSite from './EnterSite.jsx';
import MainPage from './MainPage.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEnterSite: true,
    };

    this.showHide = this.showHide.bind(this);
  }

  showHide(comp) {
    const currentStatus = this.state[comp];
    this.setState({
      [comp]: !currentStatus,
    });
  };

  render() {
    const { showEnterSite } = this.state;

    const pageView = showEnterSite ?
      <EnterSite showHide={this.showHide}/> :
      <MainPage />;

    return (
      <div>
        {pageView}
      </div>
    );
  }
};

export default App;