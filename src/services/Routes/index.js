import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Main/Login/index';
import DashboardScreen from './Main/Dashboard/index';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={DashboardScreen} />
        {/* Adicione outras rotas aqui, se necessário */}
      </Switch>
    </Router>
  );
}

export default Routes;
