/**
 * Created by kevin on 03/03/2016.
 */

import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Main from '../components/Main';
import Login from '../components/Login';
import Home from '../components/Home';

module.exports = (
    <Route path="/" component={Main}>
        <IndexRoute component={Login} />
        <Route path="/home" component={Home} />
    </Route>
);
