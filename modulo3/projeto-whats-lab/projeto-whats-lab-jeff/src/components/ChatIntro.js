import React from 'react';
import './ChatIntro.css';
import imagemWhats from '.././img/imgTelefoneConectado.png';

export default()=>{
    return(
        <div className="chatIntro">
            <img src={imagemWhats} alt="whatsapp deixe seu telefone conectado!" />
            <h1>Mantenha seu celular conectado !</h1>
            <h2>O whatsaap conecta seu telefone para sincronizar suas mensagens.Para reduzir o uso de dados, conecte seu telfone à uma rede Wi-Fi.</h2>
           
        </div>
    )
}