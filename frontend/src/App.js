import React, { useState } from 'react';
import './App.css';
import Navbar from './components/header/Appbar';
import PessoaCadastro from './pages/Pessoa/Cadastro';
import EmpresaCadastro from './pages/Empresa/Cadastro';
import FuncionarioCadastro from './pages/Funcionario/Cadastro';
import ConsultaPessoa from './pages/Pessoa/Consulta';

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
        case "ConsultaPessoa":
          return <ConsultaPessoa/>
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <Navbar texto="Cadastro de Entidades" />
      <div className="button-container">
        <button onClick={() => handleComponentChange('PessoaCadastro')}>
          Cadastrar Pessoa
        </button>
        <button onClick={() => handleComponentChange('EmpresaCadastro')}>
          Cadastrar Empresa
        </button>
        <button onClick={() => handleComponentChange('FuncionarioCadastro')}>
          Cadastrar Funcionário
        </button>
        <button onClick={() => handleComponentChange("ConsultaPessoa")}>
        Consultar Pessoa
        </button>
      </div>
      {renderActiveComponent()}
    </div>
  );
}

export default App;
