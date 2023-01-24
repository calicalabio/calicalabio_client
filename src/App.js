import React from "react";
import Heading from './components/Heading/Heading';
import Messages from './components/Messages/Messages';
import './styles.css';

function App() {
  return (
    <div className="mainContainer">
        <Heading />
        <Messages />
    </div>
  );
}

export default App;