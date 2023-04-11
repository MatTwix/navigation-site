import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from "./App";


// DOM element
if (document.getElementById('user')) {
    ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('user'));
}
