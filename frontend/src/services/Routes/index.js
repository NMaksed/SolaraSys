import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../../pages/Main/Login/index';
import DashboardScreen from '../../pages/Main/Dashboard/index';
import ConsultaMorador from '../../pages/Morador/Dashboard';
import ConsultaFuncionario from '../../pages/Funcionario/Dashboard';
import ConsultaCondominio from '../../pages/Condominio/Dashboard';
import Erro from '../../pages/Erro';
function Routes() {
  return (
    <div style={{height: '100vh'}}>
    <Router >
      <Switch >
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={DashboardScreen} />
        <Route path="/dashMorador" component={ConsultaMorador} />
        <Route path="/dashFuncionario" component={ConsultaFuncionario} />
        <Route path="/dashCondominio" component={ConsultaCondominio} />
        <Route path="/erro" component={Erro} />
      </Switch>
    </Router>
    </div>
  );
}


export default Routes;
