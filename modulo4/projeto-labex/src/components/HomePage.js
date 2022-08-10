import React from 'react';
import {BrowserRouter, Route, Routes}from 'react-router-dom';
import Aprovacao from './Aprovavao';
import ViagensPublic from './ViagensPublic';
import ListaExistentes from './ListaExitentes'
import ListaForm from './ListaForm';
import Autenticacao from './Autenticacao';
import ListaViagensAdm from './ListaViagensAdm';
import CriarViagem from './CriarViagem';
import DetalhesViagem from './DetalhesViagem';
import ListaCandidatos from './ListaCandidatos';
import ListaAprovados from './ListaAprovados';
import Home from './Home';

function HomePage(){
  
    return(

           <BrowserRouter>
              <Routes>
                <Route index element={ <Home/>}/>
                <Route path="/publico" element={<ViagensPublic />}/>
                <Route path="/existentes" element={<ListaExistentes />}/>
                <Route path="/formulario" element={<ListaForm />}/>
                <Route path="login" element={<Autenticacao/>} />
                <Route path="/viagemadm" element={<ListaViagensAdm.js />}/>
                <Route path="/criar" element={<CriarViagem />}/>
                <Route path="/detalhes" element={ <DetalhesViagem />}/>
                <Route path="/aprovacao" element={ <Aprovacao />}/>
                <Route path="/candidatos" element={<ListaCandidatos />}/>
                <Route path="/aprovados" element={<ListaAprovados />}/>
            </Routes>
           </BrowserRouter>
         
            
     
     
    )
}


export default HomePage;