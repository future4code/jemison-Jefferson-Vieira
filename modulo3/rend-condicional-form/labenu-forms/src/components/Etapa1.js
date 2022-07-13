import React,{useState}from "react";


function Etapa1() {

    const [nome,setNome]=useState('')
    const handleChangeNome =(e)=>{
        setNome(e.taget.value)
    }
    const[idade,setIdade]=useState('')
    const handleChangeIdade =(e)=>{
        setIdade(e.target.value)
    }

    const[email,setEmail]=useState('')
    const handleChangeEmail =(e)=>{
        setEmail(e.target.value)
    }

    const [escolaridade,setEscolaridade]=useState('')
    const handleChangeEscolaridade =(e)=>{
        setEscolaridade(e.target.value);
    }
    return (
      <form>
        <h1>Etapa1 Dados Gerais</h1>
        <div>
        <label>1. Qual o seu nome ?</label>
        <input type="text" nome="formNome" value={nome} onChange={(e)=>handleChangeNome(e)}
        required />
        </div>
        <div>
            <label>2. Qual a sua idade ?</label>
            <input type="text" idade="formIdade" value={idade} onChange={(e)=>handleChangeIdade(e)}
            required />

        </div>
        <div>
            <label>3. Qual é o seu email?</label>
            <input type="text" email="formEmail" value={email} onChange={(e)=>handleChangeEmail(e)}
            required />
            
        </div>
        <div>
        <label>4. Qual a sua escolaridade?</label>
                <select value={escolaridade} onChange={handleChangeEscolaridade}>
                    <option value=" "></option>
                    <option value="medioIncompleto">Ensino médio Incompleto</option>
                    <option value="medioCompleto">Ensino médio completo</option>
                    <option value="superiorIncompleto">Ensino superior Incompleto</option>
                    <option value="superiorCompleto">Ensino superior completo</option>
                </select>
        </div>
       
      
      </form>
      
    );
  }
  
  export default Etapa1;
  