import React, { useState, useEffect } from "react";
import Heading from './components/Heading/Heading';
import Messages from './components/Messages/Messages';

function App() {
  return (
    <div>
        <Heading />
        <Messages />
    </div>
  );
}

export default App;