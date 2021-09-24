import React from "react";
import { Consumer } from "./ContextApi";

class Contextchildren2 extends React.Component {
  // 컨텍스트 이용하기
  render() {
    return (
      <Consumer>
        {(ContextValue) => <h3>ContextValue: {ContextValue}</h3>}
      </Consumer>
    );
  }
}

export default Contextchildren2;
