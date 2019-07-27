import React from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

import Signin from './views/Signin/Signin';
import Signup from './views/Signup/Signup';
import Home from './views/Home/Home';
import Results from './views/Results/Results';

const Routes = () => {
  return(
    <HashRouter>
      <Switch>
        <Route exact path="/signin" component={Signin}/>
        <Route exact path="/signup" component={Signup}/>
        <Route path="/results" component={Results}/>
        <Route path="/" component={Home}/>
      </Switch>
    </HashRouter>
  )
}

export default Routes
