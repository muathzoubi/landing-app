import { useEffect, useState } from 'react';
import './App.css';
import PreLoader from './PreLoder';
import Icon from './icons';

function App() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => setShow(false), 3500);
  }, []);
  return (
    <div>
      <PreLoader show={show} />
      <div className="nav hide">
        <img src={'./logo.svg'} className="" alt=" logo" />
        <a className="p-1 ml-auto">
          <Icon iconName="menu" />
        </a>
      </div>
      <nav className="non-collapsed">
        <div>
          <img src={'./logo.svg'} className="logo" alt="Vite logo" />
        </div>
        <div className="app-head">
          <a className="pages">
            <Icon iconName="menu" />
          </a>
          <a id="sol"></a>
          <a id="page"></a>
          <a id="about"></a>
        </div>
        <div>
          {' '}
          <button className="btn2">Login</button>
        </div>
      </nav>
      <h1>Vite + React</h1>
      <p>
        Potential of your applications with our robust suite of APIs designed to
        streamline your workflow and enhance your solutions.
      </p>
      <div className="card">
        <button className="btn1" onClick={() => setCount((count) => count + 1)}>
          Get Started
        </button>{' '}
        <button className="btn2" onClick={() => setCount((count) => count + 1)}>
          Docs
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
