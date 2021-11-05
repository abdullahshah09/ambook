<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
=======
import React from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import header from './components/header/header.components';
// import Page1 from './Page1';
// import Page2 from './Page2';
// import Page3 from './Page3';
 
class App extends React.Component {
render(){
return(
<Router >
<div>
<Route path="/page2" component={header} />
{/* <Route path="/Page1" component={Page1} /> */}
{/* <Route path="/Page2" component={Page2} /> */}
{/* <Route path="/Page3" component={Page3} /> */}
</div>
</Router>
)
>>>>>>> d31ad16 (the commit1)
}

export default App;
