import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

/*
var lang = window.localStorage.getItem('lang');
if(lang === undefined || lang === null || lang === '') {
  document.getElementsByTagName("html")[0].setAttribute("dir", "ltr");
}else{
  if(lang === 'en') {
    document.getElementsByTagName("html")[0].setAttribute("dir", "ltr");
  }else{
    document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
  }
}
*/

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
