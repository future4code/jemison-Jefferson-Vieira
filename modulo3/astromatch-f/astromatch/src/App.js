import React,{useState} from 'react';
import Homepage from './components/Homepage/Homepage';
import Match from './components/Match/Match';
import Card from './components/Card/Card';
import { GlobalStyle } from './createGlobalStyle';
import Header from './components/Header/Header';
import { HomePageContainer } from './components/Homepage/StylesHomePage';
import { AppContainer } from './StylesApp';

      function App(props) {

      const[page,setPage]=useState("inicial")

      const renderPage=(page)=>{
         setPage(page)
      }

      const paginaMatch=()=>{
      switch(page){
        case"inicial":
        return <Card renderPage={renderPage}/>     
        case"matches":
        return <Match renderPage={renderPage}/>
        default: 
        return null;
      }
      
      }

  return (
            <AppContainer >
              <GlobalStyle/>
              <Header/>
              {paginaMatch()}
            </AppContainer> 
  );
}

export default App;
