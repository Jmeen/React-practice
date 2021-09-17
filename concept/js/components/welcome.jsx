class Welcome extends React.Component{
  // 생성자
  constructor(props){
    super(props); // 부모생성자 호출



    // state : 객체 내부에서 정의되고 사용되는 데이터
    // 내부에서 변경 가능하다.

    this.state = {
      color : "yellow"
    }
    console.log(props);
    console.log("Welcome.state:",this.state)
    // state 조회하기 위해선 this.state로 접근
    // state 변경은 반드시 this.setState()함수로 변경
    console.log(" welcome 생성자 호출")
  }

    //  LifeCycle
    //  Mount 단계: rendering 직전
    componentWillMount() {
      console.log("LifeCycle: componentWillMount Calls");
  }

  //  Mount 단계: rendering 직후
  componentDidMount() {
      console.log("LifeCycle: componentDidMount Calls");
  }

  componentWillUnmount() {
      console.log("LifeCycle: componentWillUnmoutn Calls");
  }
  //  Mount 단계: componentWillMount -> render -> componentDidMount
  //  Unmount 단계: componentWillUnmount

  //  Old Updating 라이프 사이클:
  //  componentWillRecieveProps -> componentWillUpdate -> componentDidUpdate
  componentWillReceiveProps() {
      console.log("LifeCycle: componentWillReceiveProps call");
  }

  componentWillUpdate() {
      console.log("LifeCycle: componentWillUpdate call");
  }

  componentDidUpdate() {
      console.log("LifeCycle: componentDidUpdate call");
  }

  render(){
    //JSX 리턴
    console.log("render Props:",this.props);
    console.log("LifeCycle:Render")
    // 컴포넌트에 style 부여
    // style 속성에 객체 전달
    const style ={
      color : this.state.color,
      backgroundColor : "black"
    }
    return(
      <div>
        <h3 style={style}>{this.props.message}</h3>
        {this.props.children}
      </div>
    )
  }
}