import './App.css';
import Navbar from './components/Appbar'
import Cadastro from './pages/Main/Cadastro'
import MoradorCadastro from './pages/Morador/Cadastro';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MoradorCadastro/>
    </div>
  );
}

export default App;
