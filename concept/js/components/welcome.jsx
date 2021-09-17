class Welcome extends React.Component{
  // 생성자
  constructor(props){
    super(props); // 부모생성자 호출
    console.log(props);
    console.log(" welcome 생성자 호출")
  }
  render(){
    //JSX 리턴
    console.log("render Props:",this.props);
    return(
      <div>
        <h3>{this.props.message}</h3>
        {this.props.children}
      </div>
    )
  }
}