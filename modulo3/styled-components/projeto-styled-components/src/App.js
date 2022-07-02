import React from 'react';
// import logo from './img/LabZap.svg';
import Header from './Components/Header/styledHeader.js'
import Footer from './Components/Footer/styledFooter.js'
import ContainerMain from './Components/Main/estilosMain.js'
import ColunaDir from './Components/Main/estilosMain.js'
import ColunaEsq from './Components/Main/estilosMain.js'

function App() {
  return (
    <div>
     
      <Header/>
    
     <ContainerMain>
           <ColunaEsq>
           Coluna1
           </ColunaEsq>
           <ColunaDir>
           Coluna2
           </ColunaDir>
      </ContainerMain>

      <Footer>
        Copyright © Jefferson Vieira All Rights reserved R. Pais Vasco , 215, Ap  402 Rio de Janeiro cep 23011147
      </Footer>
    </div>
  );
}
export default App;