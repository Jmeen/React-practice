import React, { Component } from "react";

class ReactRef extends Component {
  constructor(props) {
    super(props);
  }

  JavaScriptFucus() {
    // VJS로 DOM객체에 접근
    document.getElementById("id").style.backgroundColor = "lightblue";
    document.getElementById("id").focus();
  }

  render() {
    return (
      <>
        <input id="id" type="text" />
        <input type="button" value="JS Focus" onClick={this.JavaScriptFucus} />
      </>
    );
  }
}

export default ReactRef;
