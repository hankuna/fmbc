import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Home from './routes/Home';
import Detail from './routes/Detail';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/index" exact component={IndexPage} />
        <Route path="/home" exact component={Home} />
        <Route path="/Detail" exact component={Detail} /> 
      </Switch>
    </Router>
  );
}

export default RouterConfig;
