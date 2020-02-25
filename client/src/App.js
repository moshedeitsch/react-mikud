import React from 'react';
import  './style/dark-mode.css';
import { DarkModeContext } from './context/DarkModeContext';

import Navbar from './components/Navbar';
import Form from './components/Form';


const App = () => {
const context = React.useContext(DarkModeContext);

  return (
    <div className={context.darkMode ? "darkMode" : "lightMode"}>
      <Navbar/>
      <Form/>
    </div>
  )
}

export default App;
