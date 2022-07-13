import React,{useState}from "react";



function Etapa2() {
   
    const[curso,setCurso]=useState('')
    const handleChangeCurso =(e)=>{
        setCurso(e.target.value)
    }

    const [unidadeEnsino,setUnidadeEnsino]=useState('')
    const handleChangeUnidadeEnsino =(e)=>{
        setUnidadeEnsino(e.target.value);
    }

   return(
      <form>
        <h1>Etapa 2 Informações do Ensino Superior</h1>
            <div>
            <label> Qual o curso?</label>
            <input type="text" nome="formCurso" value={curso} onChange={(e)=>handleChangeCurso(e)}
            required />
            </div>
            <div>
            <label> Qual a unidade de ensino ?</label>
            <input type="text" idade="formUnidadeEnsino" value={unidadeEnsino} onChange={(e)=>handleChangeUnidadeEnsino(e)}
                required />

        </div>
      </form>
   
    );
  }
  
  export default Etapa2;
  