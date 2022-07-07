import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import foto1 from './img/img.beach.labenu.jpg';
import foto2 from './img/img.universo.labetube.jpg';
import djangoFoto from './img/img.django.jpg';
import cristinaFoto from './img/img.cristina.jpg';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

  function App() {
     const arrayInsta = [
     { 
       nomeUsuario: "Paulinha",
       fotoUsuario:'https://picsum.photos/50/50',
       fotoPost:'https://picsum.photos/200/150',
      },
           
     { 
       nomeUsuario:"Django",
       fotoUsuario: djangoFoto ,
      fotoPost: foto1,
    },

   {
      nomeUsuario: "Cristina" ,
        fotoUsuario: cristinaFoto ,
       fotoPost: foto2 ,
       }
     ]

     
    const Usuarios = arrayInsta.map((usuario,index)=>{
   return( <Post key={index}

       
    nomeUsuario =    {usuario.nomeUsuario}
    fotoUsuario =    {usuario.fotoUsuario}
    fotoPost    =    {usuario.fotoPost}
      

     />
   )
   })

 console.log({Usuarios})


return(
  <MainContainer>
         {Usuarios}  
        
       </MainContainer>
)}

export default App;
