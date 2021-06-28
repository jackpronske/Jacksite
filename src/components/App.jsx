import React, { Component } from 'react';

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
      <div> Enter Here </div> :
      <div> We are Entered </div>;

    return (
      <div>
        {pageView}
      </div>
    );
  }
};

export default App;