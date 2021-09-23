import React from "react";

// function Item(props) { // 매개변수로 props를 전달
//   console.log("Props:", props);
// return <h3>My item: {props.name}</h3>;
// }

function Item({ name, checked }) {
  // 구조 분해 할당, props에서 name필드 분해 후 할당
  //  조건부 랜더링
  // checked가 true면 "*" 넣기
  return (
    <h3>
      {checked ? <b>*</b> : null}
      My item: {name}
    </h3>
  );
}

// 내보내기
export default Item;
