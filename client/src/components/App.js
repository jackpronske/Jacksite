import React, { Component } from "react";
import Header from "./header/Header";
import Bio from "./bio/Bio";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Header />
        {/* <Bio /> */}
      </>
    );
  }
}

export default App;
