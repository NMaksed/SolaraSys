import React, { useState } from 'react';
import Button from '@mui/material/Button';
import PessoaCadastro from '../../Pessoa/Cadastro/index';
import EmpresaCadastro from '../../Empresa/Cadastro/index';
import FuncionarioCadastro from '../../Funcionario/Cadastro/index';
import ConsultaEmpresa from '../../Empresa/Consulta/index';
import Header from '../../../components/Header';
import MoradorCadastro from '../../Morador/Cadastro';
import CondominioCadastro from '../../Condominio/Cadastro/index';

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
      case "MoradorCadastro":
        return <MoradorCadastro />;
      case "CondominioCadastro":
        return <CondominioCadastro />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Header texto="Cadastro de Entidades" />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
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
        <Button onClick={() => handleComponentChange("MoradorCadastro")}>
          Cadastrar Morador
        </Button>
        <Button onClick={() => handleComponentChange("CondominioCadastro")}>
          Cadastrar Condominio
        </Button>
      </div>
      {renderActiveComponent()}
      
    </div>
  );
}

export default DashboardScreen;