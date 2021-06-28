import React, { Component } from 'react';
import EnterSite from './EnterSite.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEnterSite: true,
    };
  }

  render() {
    const { showEnterSite } = this.state;
    const pageView = showEnterSite ?
      <EnterSite /> :
      <div> We are Entered </div>;

    return (
      <div>
        {pageView}
      </div>
    );
  }
};

export default App;