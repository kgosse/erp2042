
import React from 'react';
import ReactDom from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './config/routes';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

ReactDom.render(
    <Router history={browserHistory}>{routes}</Router>,
    document.getElementById('app')
);
