import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Navbar from '../../../components/header/Appbar';
import PessoaCadastro from '../../Pessoa/Cadastro/index';
import EmpresaCadastro from '../../Empresa/Cadastro/index';
import FuncionarioCadastro from '../../Funcionario/Cadastro/index';
import ConsultaEmpresa from '../../Empresa/Consulta/index';

function DashboardScreen() {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleComponentChange = (componentName) => {
    setActiveComponent(componentName);
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'PessoaCadastro':
        return <PessoaCadastro />;
      case 'EmpresaCadastro':
        return <EmpresaCadastro />;
      case 'FuncionarioCadastro':
        return <FuncionarioCadastro />;
      case "ConsultaEmpresa":
        return <ConsultaEmpresa/>
      case "Login":
        return <Login/>
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <Navbar texto="Cadastro de Entidades" />
      <div className="button-container">
        <Button onClick={() => handleComponentChange('PessoaCadastro')}>
          Cadastrar Pessoa
        </Button>
        <Button onClick={() => handleComponentChange('EmpresaCadastro')}>
          Cadastrar Empresa
        </Button>
        <Button onClick={() => handleComponentChange('FuncionarioCadastro')}>
          Cadastrar Funcionário
        </Button>
        <Button onClick={() => handleComponentChange("ConsultaEmpresa")}>
          Consultar Empresa
        </Button>
        <Button onClick={() => handleComponentChange("Login")}>
          Login
        </Button>
        FALTA FINALIZAR TESTE; turar esse campo bugado numnber
      </div>
      {renderActiveComponent()}
      
    </div>
  );
}

export default DashboardScreen;
