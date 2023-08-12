import './App.css';
import Navbar from './components/Appbar'
import CadastroPessoa from './pages/Pessoa/Cadastro';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <CadastroPessoa/>
    </div>
  );
}

export default App;
