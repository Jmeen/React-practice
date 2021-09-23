import React from "react";

// function Item(props) { // 매개변수로 props를 전달
//   console.log("Props:", props);
// return <h3>My item: {props.name}</h3>;
// }

function Item({ name, checked }) {
  // 구조 분해 할당, props에서 name필드 분해 후 할당
  //  조건부 랜더링
  // checked가 true면 "*" 넣기
  // return (
  //   <h3>
  //     {checked ? <b>*</b> : null}
  //     My item: {name}
  //   </h3>
  // );

  // 조건부 렌더링 2. 논리 연산자 이용
  return (
    <h3>
      {checked && <b>*</b>}
      My item: {name}
    </h3>
  );
}
//  props를 검사하기 (타입검사, 기본값 설정)
Item.propTypes = {
  name: PropTypes.string.isRequired, //  name prop: string, 필수 정보
  checked: PropTypes.bool.isRequired, //  checked : bool, 필수 정보
};

Item.defaultProps = {
  name: "Unnamed",
  checked: true,
};
// 내보내기
export default Item;
