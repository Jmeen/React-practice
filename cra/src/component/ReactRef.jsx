import React, { Component } from "react";

class ReactRef extends Component {
  constructor(props) {
    super(props);
    // 참조객체 생성 : DOM요소에 엘리먼트를 저장하기 위한 ref
    this.textInput = React.createRef();
  }

  JavaScriptFucus() {
    // VJS로 DOM객체에 접근
    document.getElementById("id").style.backgroundColor = "lightblue";
    document.getElementById("id").focus();
  }

  RefFocus = (e) => {
    // ref를 이용한 DOM 객체 접근
    console.log("ref:", this.textInput);
    console.log(this.textInput.current);
    // DOM노드를 얻기위해 current 속성 이용
    this.textInput.current.style.backgroundColor = "tomato";
    this.textInput.current.focus();
  };

  render() {
    console.log("ref:", this.textInput);
    return (
      <>
        <input id="id" type="text" ref={this.textInput} />
        <input type="button" value="JS Focus" onClick={this.JavaScriptFucus} />
        <input type="button" value="Ref Focus" onClick={this.RefFocus} />
      </>
    );
  }
}

export default ReactRef;
