// import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';

function App_old() {


  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  // let a=10, b=20;
  // return(<div className="App">
  //   <header className='App-header'><>
  //   <h1>React is {a+b} times better than JSX</h1>
  //   <ul>
  //     <li>Apples</li>
  //     <li>Bananas</li>
  //     <li>Cherries</li>
  //   </ul>
  //   <p>End of the list.</p>
  //   <label>Event Name:</label>
  //   <input type="text" id="event-name" className="color" />
  //   </></header>
  // </div>); 
  // return(<h1>React is {5+5} times better than JSX</h1>);

  
  return(
    <div className='App_old'>
      <Greeting name="Vaibee"/>
      {/* <Greeting name="Max"/> */}
    </div>
  );

}

export default App_old;
