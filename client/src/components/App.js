import React, { Component } from "react";
import Header from "./header/Header";
import Bio from "./bio/Bio";
import Skills from "./skills/Skills";
import Work from "./work/Work";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import ReactPlayer from "react-player/youtube";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guts: false,
    };
    this.makeGuts = this.makeGuts.bind(this);
  }

  makeGuts() {
    this.setState({
      guts: !this.state.guts,
    });
  }

  render() {
    const { guts } = this.state;
    return (
      <>
        <Header makeGuts={this.makeGuts} />
        <Bio guts={guts} />
        <Skills />
        <Work />
        <Contact />
        <Footer />
      </>
    );
  }
}

export default App;
