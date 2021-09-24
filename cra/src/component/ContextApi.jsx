import React from "react";
import Children from "./ContextChildren";

// provider / consumer
const { Provider, Consumer } = React.createContext();

export { Consumer }; // 다른 컴포넌트에서 접근 할수 있게 export

class ContextApi extends React.Component {
  // context API 데이터 전송 예제
  //   render() {
  //     return (
  //       <Provider value="using Context API">
  //         <Children />
  //       </Provider>
  //     );
  //   }
  // }
  // Constext로 데이터 전송 예제
  constructor(props) {
    super(props);
    this.state = { name: "Context API" };
    // this 바인드
    this.setStateFunc = this.setStateFunc.bind(this);
  }
  setStateFunc(value) {
    alert(value);
    this.setState({ name: value });
  }

  render() {
    // propvider에 전달한 객체
    const content = {
      ...this.state,
      setStateFunc: this.setStateFunc,
    };
    return (
      <Provider value={content}>
        <div>
          <h1>{this.state.name}</h1>
          <Children />
        </div>
      </Provider>
    );
  }
}

export default ContextApi;
