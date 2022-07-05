import React, {useState} from 'react'
import styled from 'styled-components'


import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'

// import djangoFoto from '../../img/img.django.jpg'
// import foto1 from '../../img/img.beach.labenu.jpg'
// import foto2 from '../../img/img.universo.labetube.jpg'
// import cristinaFoto from '../../img/img.cristina.jpg'


const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

function Post(props){
  
  const [numeroCurtidas, setnumeroCurtidas] = useState (0)
  const [curtido, setCurtido] = useState(false)
  const [comentando, setComentando] = useState(false)
  const [numeroComentarios, setNumeroComentarios] = useState(0)

  const onClickCurtida = () => {
    setCurtido(!curtido)
  if(numeroCurtidas === 0 ) {
    setnumeroCurtidas(numeroCurtidas+1)
  } else { 
    setnumeroCurtidas(numeroCurtidas -1)

    }
  
  }

  const onChangeComentario = (event)=>{
    setComentando(event.target.value)
    console.log(event.target.value)
  }
  const onClickComentario = () => {
    setComentando(!comentando)
    if(comentando) {
      componenteComentario = <SecaoComentario aoEnviar={aoEnviarComentario} value={comentando} onChangecomentario={onChangeComentario}/>
    }

    console.log(comentando)
  }
  
  const aoEnviarComentario = () => {
    setComentando(false)
    setNumeroComentarios(numeroComentarios + 1)
  }

  let iconeCurtida

    if(curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(comentando) {
      componenteComentario = <SecaoComentario aoEnviar={aoEnviarComentario}/>
    }



//     const arrayInsta = [
//       { 
//          nomeUsuario: "Paulinha",
//          fotoUsuario:'https://picsum.photos/50/50',
//          fotoPost:'https://picsum.photos/200/150',
//        },
             
//       { 
//          nomeUsuario:"Django",
//          fotoUsuario: djangoFoto ,
//          fotoPost: foto1 ,
//        },
  
//       {
//           nomeUsuario: "Cristina" ,
//           fotoUsuario: cristinaFoto ,
//           fotoPost: foto2 ,
//         }
//       ]
//      const Usuarios = arrayInsta.map((usuario,index)=>{
//       return <Post key={index}>
        
//         <PostContainer>
//       <PostHeader>
//         <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
//         <p>{usuario.nomeUsuario}</p>
//       </PostHeader>

//       <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

//       <PostFooter>
//         <IconeComContador
//           icone={iconeCurtida}
//           onClickIcone={onClickCurtida}
//           valorContador={numeroCurtidas}
//         />
 
//         <IconeComContador
//           icone={iconeComentario}
//           onClickIcone={onClickComentario}
//           valorContador={numeroComentarios}

//           // Os valores icone , onClickIcone e valor contador estados , eles vem de uma função e vão renderizar
//           // a função no App.jS
//         />
//       </PostFooter>
//       {componenteComentario}
//     </PostContainer>

//  </Post>
//     })
  
    // console.log({Usuarios})

  return(
    <Post> 
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />
 
        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}

          // Os valores icone , onClickIcone e valor contador estados , eles vem de uma função e vão renderizar
          // a função no App.jS
        />
      </PostFooter>
      {componenteComentario}
    </PostContainer>
    </Post>
  )
}


export default Post