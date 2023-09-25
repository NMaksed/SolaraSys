import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Header from '../../../components/Header/index.js';
import PessoaCadastro from '../../Pessoa/Cadastro/index';
import EmpresaCadastro from '../../Empresa/Cadastro/index';
import FuncionarioCadastro from '../../Funcionario/Cadastro/index';
import ConsultaEmpresa from '../../Empresa/Consulta/index';

function DashboardScreen() {
  const [activeComponent, setActiveComponent] = useState(null);
  const [activeComponentName, setActiveComponentName] = useState('Cadastro de Entidades');

  const handleComponentChange = (componentName, componentDisplayName) => {
    setActiveComponent(componentName);
    setActiveComponentName(componentDisplayName);
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
      default:
        return null;
    }
  };

  return (
    <div>
      <Header texto={activeComponentName} />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Button onClick={() => handleComponentChange('PessoaCadastro', 'Cadastro de Pessoa')}>
          Cadastrar Pessoa
        </Button>
        <Button onClick={() => handleComponentChange('EmpresaCadastro', 'Cadastro de Empresa')}>
          Cadastrar Empresa
        </Button>
        <Button onClick={() => handleComponentChange('FuncionarioCadastro', 'Cadastro de Funcionário')}>
          Cadastrar Funcionário
        </Button>
        <Button onClick={() => handleComponentChange('ConsultaEmpresa', 'Consulta de Empresa')}>
          Consultar Empresa
        </Button>
      </div>
      {renderActiveComponent()}
      
    </div>
  );
}

export default DashboardScreen;
