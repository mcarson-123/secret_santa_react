import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './index.css';

import Welcome from "./components/Welcome"

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={Welcome} />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
