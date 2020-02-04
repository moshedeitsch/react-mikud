import React from 'react';
import './index.css'
import { DarkModeContext } from './context/DarkModeContext';

import Navbar from './components/Navbar';
import Form from './components/Form';


const App = () => {
const context = React.useContext(DarkModeContext);


  return (
    <div className={context.darkMode ? "dark-mode" : "light-mode"}>
      <Navbar/>
      <Form/>
    </div>
  )
}

export default App;
