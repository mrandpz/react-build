import React from 'react';

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from '../component/Loading/Loading';
import fakeDelay from '../component/Loading/fakeDelay';

let LoadableHome = Loadable({
    loader: () => fakeDelay(400).then(() => import('pages/Home/Home')),
    loading: Loading
});
let LoadablePage1 = Loadable({
    loader: () => fakeDelay(400).then(() => import('pages/Page1/Page1')),
    loading: Loading
});
import Counter from 'pages/Counter/Counter';
import UserInfo from 'pages/UserInfo/UserInfo';

const getRouter = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/page1">Page1</Link></li>
                <li><Link to="/counter">Counter</Link></li>
                <li><Link to="/userinfo">UserInfo</Link></li>
            </ul>
            <Switch>
                <Route exact path="/" component={LoadableHome}/>
                <Route path="/page1" component={LoadablePage1}/>
                <Route path="/counter" component={Counter}/>
                <Route path="/userinfo" component={UserInfo}/>
            </Switch>
        </div>
    </Router>
);

export default getRouter;