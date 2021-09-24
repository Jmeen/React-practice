import { useState, useEffect } from "react";

function UseEffectComp() {
  const [count, setCount] = useState(0);

  //렌더링 될때마다 Effect 발생
  // useEffect(() => {
  //   console.log("렌더링 될떄마다 Effect");
  // });

  // 처음 렌더링 될때만 실행되는 Effect
  // 두번쨰 인자를 빈 배열로 전달
  // useEffect(() => {
  //   console.log("처음 전달될때 Effect");
  // }, []); // 의존하고 있는 상태변수 없음

  // 특정 상태변수가 변경될때 실행하는 Effect
  useEffect(() => {
    console.log("Count 변수가 업데이트 Effect");
    console.log("변경된 count :", count);
  }, [count]);

  // 컴포넌트가 unbount, 업데이트 직전에 실행하는 effect
  // cleanup 함수를 return

  useEffect(() => {
    console.log("useEffct:count", count);
    // cleanup 함수
    return () => {
      console.log("클린업 함수");
      console.log("count", count);
    };
  }, []);

  // 오직 언마운트 시점에만 cleanup 함수를 호출하고 싶을때
  // 두번째 인자값으로 빈 배열을 넘기면 된다.

  return (
    <div>
      <h3>Effect 상태</h3>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>증가</button>
    </div>
  );
}

export default UseEffectComp;
