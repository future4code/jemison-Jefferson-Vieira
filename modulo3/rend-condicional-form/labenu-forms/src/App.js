import React,{useState} from 'react';
import './App.css';
import Etapa1 from './components/Etapa1'
import Etapa2 from './components/Etapa2'
import Etapa3 from './components/Etapa3'
import Final from './components/Final'





function App() {
  const[nav,setNav]=useState('')

  const handleEtapa1 =()=>{
    setNav('etapa1')
  }
  const handleEtapa2 =()=>{
    setNav('etapa2')
  }

// let navigation ()=>{
  switch(nav){
    
    case 'estapa1':
    return <Etapa1/>
    break;
    case 'etapa2':
    return <Etapa2/>
    break;
    default:
      break;
  }
// }
 
  return (
    <div>
    <Etapa1/>
    <Etapa2/>
    <Etapa3/>
    <Final/>
    <button onClick={handleEtapa2}>Próxima Página</button>
    {/* {navigation} */}
    </div>
 
  );
}

export default App;
