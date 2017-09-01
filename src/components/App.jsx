import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../containers/Home';
import Landing from './Landing';

const FourOhFour = () => <h1>404 Sorry Not Sorry</h1>;

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/home" component={Home} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
