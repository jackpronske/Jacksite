import React, { Component } from "react";
import Header from "./header/Header";
import Bio from "./bio/Bio";
import Skills from "./skills/Skills";
import Work from "./work/Work";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Header />
        <Bio />
        <Skills />
        <Work />
        <Contact />
        <Footer />
      </>
    );
  }
}

export default App;
