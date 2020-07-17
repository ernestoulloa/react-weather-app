import React from 'react';

import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import ParticlesBg from 'particles-bg';
import history from '../../helpers/history/index';

import Home from '../Home';
import './App.css';

const App = () => (
  <div>
    <CssBaseline />
    <ConnectedRouter basename="/weather-react" history={history}>
      <div className="main-body">
        <div className="content container">
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </div>
    </ConnectedRouter>
    <ParticlesBg type="cobweb" bg />
  </div>
);

export default App;
