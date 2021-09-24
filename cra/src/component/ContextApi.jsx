import React from "react";
import Children from "./ContextChildren";

// provider / consumer
const { Provider, Consumer } = React.createContext();

export { Consumer }; // 다른 컴포넌트에서 접근 할수 있게 export

class ContextApi extends React.Component {
  // context API 데이터 전송 예제
  render() {
    return (
      <Provider value="using Context API">
        <Children />
      </Provider>
    );
  }
}

export default ContextApi;
