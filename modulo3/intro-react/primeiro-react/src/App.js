import foto from './img/foto-perfil.jpg';
import './App.css';

function App() {
  const titulo ='Oi Eu sou Jefferson Vieira'
  const paragrafo ='Este é meu primeiro site React'
  const onClickBotao=()=>{
    alert('Boa noite Turma Jemison')
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="titulo">{titulo}</h1>
      </header>
      <div>
        <img src={foto} className="App-logo" alt="logo" />
        <p>{paragrafo}</p>
        <button className="botao" onClick={onClickBotao}>Aperte este botão</button>
      </div>
        
    </div>
  );
}

export default App;
