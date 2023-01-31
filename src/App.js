import React, { useState, useEffect } from "react";
import Heading from './components/Heading/Heading';
import Menu from "./components/Menu/Menu";
import ContentSwitcher from "./components/ContentSwitcher/ContentSwitcher";
import './styles.css';

function App() {
  const [currentView, setCurrentView] = useState("AboutMe");

  const changeView = (viewName) => setCurrentView(viewName);

  return (
    <div className="mainContainer">
        <Heading />
        <Menu currentView={currentView} onMenuClick={changeView} />
        <ContentSwitcher currentView={currentView} />
    </div>
  );
}

export default App;