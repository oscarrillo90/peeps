// src/config/routes.js
import React from 'react'
import {Route, Router, browserHistory} from 'react-router'
import App from '../App'
import Home from './components/Home.js';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/home" component={Home} />
        </Route>
    </Router>
)
