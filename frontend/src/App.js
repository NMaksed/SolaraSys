import React, { useState } from 'react';
import './App.css';
import Navbar from './pages/Pessoa/Cadastro/Appbar';
import PessoaCadastro from './pages/Pessoa/Cadastro';
import EmpresaCadastro from './pages/Empresa/Cadastro';
import FuncionarioCadastro from './pages/Funcionario/Cadastro';

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
      </div>
      {renderActiveComponent()}
    </div>
  );
}

export default App;
