import React, { useState, useEffect } from "react";
import Info from './components/Info/Info';
import Heading from './components/Heading/Heading';
import Menu from "./components/Menu/Menu";
import ContentSwitcher from "./components/ContentSwitcher/ContentSwitcher";
import './styles.css';

function App() {
  const [currentView, setCurrentView] = useState("Skills");

  const changeView = (viewName) => setCurrentView(viewName);

  return (
    <div className="mainContainer">
        <Info />
        {/*<Heading />*/}
        {/*<Menu currentView={currentView} onMenuClick={changeView} />*/}
        {/*<ContentSwitcher currentView={currentView} />*/}
    </div>
  );
}

export default App;