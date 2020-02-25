import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DarkModeProvider from './context/DarkModeContext'
import FormProvider from './context/FormContext'
import App from './App'



ReactDOM.render(
    <DarkModeProvider>
        <FormProvider>
        <App />
        </FormProvider>
    </DarkModeProvider>
    , document.getElementById('root'));


