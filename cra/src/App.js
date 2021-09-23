import logo from './logo.svg';
import './App.css';
import Item from './component/Item'

// 다수의 컴포넌트 렌더링
const items = [
  { id: 1, name: "NoteBook", checked: true },
  { id: 2, name: "Smartphone", checked: false },
  { id: 3, name: "Tablet", checked: true },
  { id: 4 },
]
const renderItem = item => <Item key={item.id}
  name={item.name}
  checked={item.checked} />

function App() {
  return (
    <div className="App">
      {items.map(renderItem)}
      {/* {items.map(item => (
        <Item key={item.id}
          name={item.name}
          checked={item.checked}>
      ))} */}
      {/* // <Item name="notebook" checked={true}></Item>
      // <Item name="smartphone" checked={false}></Item>
      // <Item name="tablet" checked></Item>
      // <Item name="monitorg"></Item> */}
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
