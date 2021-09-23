import { Component } from "react";

class ReactState extends Component {
  constructor(props) {
    super(props);
    // state선언
    this.state = {
      stateString: this.props.reactString,
      stateNumber: 0,
    };
  }

  stateChange = (flag) => {
    // flag : direct, setState, ForceUpdate
    if (flag === "direct") {
      this.state.stateString = "리액트 스테이트 직접 변경";
      this.state.stateNumber += 1;
    } else if (flag === "setstate") {
      this.setState({
        stateString: "setState 변경",
        stateNumber: this.state.stateNumber + 1,
      });
      // setstate 함수 호출, state변경 -> render함수 호출
    } else if (flag === "forceupdate") {
      this.forceUpdate();
    }
  };

  render() {
    return (
      <div>
        <h2>state</h2>
        <ul>
          <li>String:{this.state.stateString}</li>
          <li>Number:{this.state.stateNumber}</li>
        </ul>
        <button onClick={(e) => this.stateChange("direct", e)}>
          state 직접 변경
        </button>
        <button onClick={(e) => this.stateChange("setstate", e)}>
          SetState 변경
        </button>
        <button onClick={(e) => this.stateChange("forceupdate", e)}>
          State 강제 업데이트
        </button>
      </div>
    );
  }
}

export default ReactState;
