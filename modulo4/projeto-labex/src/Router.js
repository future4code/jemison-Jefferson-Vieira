import React from 'react';
import {BrowserRouter, Route, Routes}from 'react-router-dom';
import Aprovacao from './components/Aprovavao';
import ViagensPublic from './components/ViagensPublic';
import ListaExistentes from './components/ListaExitentes'
import ApplicationForm from './components/ApplicationForm';
import Autenticacao from './components/Autenticacao';
import ViagensAdm from './components/ViagensAdm';
import CriarViagem from './components/CriarViagem';
import DetalhesViagem from './components/DetalhesViagem';
import ListaCandidatos from './components/ListaCandidatos';
import ListaAprovados from './components/ListaAprovados';
import HomePage from './components/HomePage';
import ListaViagemAdm from './components/ListaViagemAdm';

function Router(){
  
    return(

           <BrowserRouter>
              <Routes>
                <Route index element={ <HomePage/>}/>
                <Route path="/listaPublic" element={<ViagensPublic />}/>
                <Route path="/existentes" element={<ListaExistentes />}/>
                <Route path="/formulario" element={<ApplicationForm />}/>
                <Route path="login" element={<Autenticacao/>} />
                <Route path="adm" element= {<ViagensAdm />} />
                <Route path="listaAdm" element= {<ListaViagemAdm />} />
                <Route path="/criar" element={<CriarViagem />}/>
                <Route path="/detalhes" element={ <DetalhesViagem />}/>
                <Route path="/aprovacao" element={ <Aprovacao />}/>
                <Route path="/candidatos" element={<ListaCandidatos />}/>
                <Route path="/aprovados" element={<ListaAprovados />}/>
            </Routes>
           </BrowserRouter>
         
            
     
     
    )
}


export default Router;