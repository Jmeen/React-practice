import logo from './logo.svg';
import './App.css';
import Item from './component/Item'

function App() {
  return (
    <div classname="App">
      <Item name="notebook"></Item>
      <Item name="smartphone"></Item>
      <Item name="tablet"></Item>
      <Item name="monitor"></Item>
    </div>
  )
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           첫번째 리액트 앱입니다.
//         </p>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }



export default App;
