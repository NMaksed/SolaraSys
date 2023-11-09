import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../../pages/Main/Login/index';
import DashboardScreen from '../../pages/Main/Dashboard/index';
import EmpresaCadastro from '../../pages/Empresa/Cadastro/index';
import { Dashboard } from '../../components/Dashboard/index';
import ConsultaMorador from '../../pages/Morador/Dashboard';
import ConsultaFuncionario from '../../pages/Funcionario/Dashboard';
function Routes() {
  return (
    <div style={{height: '100vh'}}>
    <Router >
      <Switch >
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={DashboardScreen} />
        <Route path="/cadastro-empresa" component={EmpresaCadastro} />
        <Route path="/teste" component={ Dashboard } />
        <Route path="/dashMorador" component={ConsultaMorador} />
        <Route path="/dashFuncionario" component={ConsultaFuncionario} />
      </Switch>
    </Router>
    </div>
  );
}


export default Routes;
