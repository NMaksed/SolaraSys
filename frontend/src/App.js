import React, { useState } from 'react';
import './App.css';
import Button from '@mui/material/Button';
import Navbar from './components/header/Appbar';
import PessoaCadastro from './pages/Pessoa/Cadastro';
import EmpresaCadastro from './pages/Empresa/Cadastro';
import FuncionarioCadastro from './pages/Funcionario/Cadastro';
import ConsultaEmpresa from './pages/Empresa/Consulta';
import Login from './pages/Main/login';

function App() {
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
      </div>
      {renderActiveComponent()}
      
    </div>
  );
}

export default App;
