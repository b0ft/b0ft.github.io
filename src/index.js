import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './js/App';
import * as serviceWorker from './serviceWorker';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-177617748-1');
ReactGA.pageview(window.location.pathname + window.location.search);


ReactDOM.render(
  <React.StrictMode>
    <script src="https://kit.fontawesome.com/cd3884a346.js" crossorigin="anonymous"></script>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
