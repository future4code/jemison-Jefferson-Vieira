import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import fotoPerfilJefferson from './components/Imagens/fotoPerfilJefferson.jpg';
import logoEny from './components/Imagens/logoEnyBoutique.png';
import logoCasasBahia from './components/Imagens/CasasBahiaLogo.png'
import IconeEmail from './components/Imagens/iconeEmail33.png'
import IconeCasa from './components/Imagens/iconeCasa.png'



function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={fotoPerfilJefferson} alt="foto do perfil de Jefferson Vieira"
          nome="Jefferson Vieira" 
          descricao="Oi, Sou Jefferson Vieira. Sou aluno da turma Jemison na Labenu de desenvolvimento Web Full Stack "
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>
      <div>
       <CardPequeno 
       imagem={IconeEmail} alt="icone caixa de email"
       texto="Email:"
       textoConteudo="myjeff22vieira@gmail.com"
       />
      </div>

      <div>
        <CardPequeno
        imagem={IconeCasa} alt=" ícone home "
        texto="Endereco"
        textoConteudo="Rua do Desenvolvedor ReactJs"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={logoEny} alt="Logo do Eny Boutique Hotel"
          nome="Eny Boutique Hotel" 
          descricao="Chefe do Bar responsável por compras , criação ,preparação e gestão de equipe!" 
        />
        
        <CardGrande 
          imagem={logoCasasBahia} alt="Logo das Casas Bahia"
          nome="Casas Bahia" 
          descricao="Vendedor, sendo responsável pelas atividades de demonstração de produtos, negociação de produtos e serviços!" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" alt="Logo do Fcebook"
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" alt="Logo do Twitter"
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
