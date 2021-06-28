import React, { Component } from 'react';
import EnterSite from './EnterSite.jsx';

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
      <div> stop clicking enter site and add the nav bar next, then the basic layout of the main page, its easy! get something laid out tonight </div>;

    return (
      <div>
        {pageView}
      </div>
    );
  }
};

export default App;