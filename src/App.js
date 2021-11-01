import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './bodyelements/Nav';
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
function App() {
  return (
    <>
    <Navbar />
      <div className="App">
        <header className="App-header">
          <img src={"logo.png"} className="App-logo" alt="logo" />
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
    </>
  );
}

export default App;
