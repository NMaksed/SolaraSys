import React, { useState } from 'react';
import { Link, useRouteMatch, Route, Switch } from 'react-router-dom';
import PessoaCadastro from '../../Pessoa/Cadastro/index';
import EmpresaCadastro from '../../Empresa/Cadastro/index';
import FuncionarioCadastro from '../../Funcionario/Cadastro/index';
import ConsultaEmpresa from '../../Empresa/Consulta/index';
import Header from '../../../components/Header';
import MoradorCadastro from '../../Morador/Cadastro';
import AuthChecker from '../../../components/Authentication';

function DashboardScreen() {
  const match = useRouteMatch();

  const renderActiveComponent = () => {
    return (
      <div>
        {/* <AuthChecker> */}
        <Header/>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Link to={`${match.url}/cadastro-pessoa`}>Cadastrar Pessoa</Link>
          <Link to={`${match.url}/cadastro-empresa`}>Cadastrar Empresa</Link>
          <Link to={`${match.url}/cadastro-funcionario`}>Cadastrar Funcionário</Link>
          <Link to={`${match.url}/consulta-empresa`}>Consultar Empresa</Link>
          <Link to={`${match.url}/cadastro-morador`}>Cadastrar Morador</Link>
        </div>
        <Switch>
          <Route path={`${match.path}/cadastro-pessoa`} component={PessoaCadastro} />
          <Route path={`${match.path}/cadastro-empresa`} component={EmpresaCadastro} />
          <Route path={`${match.path}/cadastro-funcionario`} component={FuncionarioCadastro} />
          <Route path={`${match.path}/consulta-empresa`} component={ConsultaEmpresa} />
          <Route path={`${match.path}/cadastro-morador`} component={MoradorCadastro} />
          <Route path={`${match.path}`} exact>
            <p>Selecione uma opção acima para começar.</p>
          </Route>
        </Switch>
        </AuthChecker>
      </div>
    );
  };

  return renderActiveComponent();
}

export default DashboardScreen;
