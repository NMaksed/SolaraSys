import './App.css';
import Navbar from './pages/Pessoa/Cadastro/Appbar'
import CadastroPessoa from './pages/Pessoa/Cadastro';
import Header from './components/header';
import Login from './pages/Main/login';
import FuncionarioCadastro from './pages/Funcionario/Cadastro';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <FuncionarioCadastro/>
    </div>
  );
}

export default App;
