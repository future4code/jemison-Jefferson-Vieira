import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
 import foto1 from './img/img.beach.labenu.jpg';
 import foto2 from './img/img.universo.labetube.jpg';
 import djangoFoto from './img/img.django.jpg';
 import cristinaFoto from './img/img.cristina.jpg';
//  import { SecaoComentario } from './components/SecaoComentario/SecaoComentario';
//  import { IconeComContador } from './components/IconeComContador/IconeComContador';


const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
  //    const arrayInsta = [
  //    { 
  //      nomeUsuario: "Paulinha",
  //      fotoUsuario:'https://picsum.photos/50/50',
  //      fotoPost:'https://picsum.photos/200/150',
  //     },
           
  //    { 
  //      nomeUsuario:"Django",
  //      fotoUsuario: djangoFoto ,
  //     fotoPost: foto1,
  //   },

  //  {
  //     nomeUsuario: "Cristina" ,
  //       fotoUsuario: cristinaFoto ,
  //      fotoPost: foto2 ,
  //      }
  //    ]
  //   const Usuarios = arrayInsta.map((usuario,index)=>{
  //  return <Post key={index}>
  //     <div>
  //        {usuario.nomeUsuario}
  //      {usuario.fotoUsuario}
  //       </div>   
  //     <div>
  //      {usuario.fotoUsuario}
  //      </div>  
  //   </Post >

  // })

  // console.log({Usuarios})
function App() {
  
  
return(
  <MainContainer>
           
           <Post
               nomeUsuario={'Paulinha'}
               fotoUsuario={'https://picsum.photos/50/50'}
               fotoPost={'https://picsum.photos/200/150'}
           />
         <Post
              nomeUsuario={'Django'}
              fotoUsuario={djangoFoto}
              fotoPost={foto1}
    />
     <Post
               nomeUsuario={'Cristina'}
               fotoUsuario={cristinaFoto}
               fotoPost={foto2}
    />
       </MainContainer>
)}

export default App;