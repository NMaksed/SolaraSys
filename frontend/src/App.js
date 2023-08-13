import './App.css';
import Navbar from './pages/Pessoa/Cadastro/Appbar'
import CadastroPessoa from './pages/Pessoa/Cadastro';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header/>
      <CadastroPessoa/>
    </div>
  );
}

export default App;
