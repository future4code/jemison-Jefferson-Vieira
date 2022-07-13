import React,{useState}from "react";


function Etapa3() {
   const[graduacao,setGraduacao]=useState('')
   const handleChangeGraduacao=(e)=>{
    setGraduacao(e.target.value)
   }
   const[complementar,setComplementar]=useState('')
   const handleChangeComplementar=(e)=>{
    setComplementar(e.target.value)
   }
   
    return (
      <form>
        <h1>Informações Gerais de Ensino</h1>
        <div>
        <label>Por que voçê não terminou um curso de graduação ?</label>
        <input type="text" nome="formGraduacao" value={graduacao} onChange={(e)=>handleChangeGraduacao(e)}
        required />
        </div>
        <div>
        <label>Voçê fez algum curso complementar ?</label>
                <select value={complementar} onChange={handleChangeComplementar}>
                    <option value=" "></option>
                    <option value="Curso Complentar">Nenhum</option>
                    <option value="Curso Ingles">Ingles</option>
                    <option value="Curso Espanhol">Espanhol</option>
                    <option value="Curso Analise de Sistemas">Analise de sistemas</option>
                </select>
        </div>
      </form>
   
    );
  }
  
  export default Etapa3;
  