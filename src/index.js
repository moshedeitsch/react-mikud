import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
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


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
