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

      const [inputNome, setInputNome] = useState("")
      const [inputIdade, setInputIdade] = useState("")
      const [Usuarios, setUsuarios] = useState("")

      
    
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

     const handleInputNome = (e) => {
      setInputNome(e.target.value)
    }
    const handleInputIdade = (e) => {
      setInputIdade(e.target.value)
    }
    const addUsuario = (e) => {
      e.preventDefault();
      const novoUsuario = {nomeUsuario: inputNome, idadeUsuario: inputIdade}
      const novaListaDeUsuarios = [...arrayInsta, novoUsuario]
      setPessoas(novaListaDeUsuarios)
    }
  

     
    const UsuariosNovo = arrayInsta.map((usuario,index)=>{
      const deletarUsuario=()=>{
        const novoUsuarios=[...arrayInsta]
        const deletar = Usuarios.findIndex((usuarioExcluido)=>{
          return usuarioExcluido === Usuarios
        })
        novoUsuarios.splice(deletar,1)
        setarrayInsta(novoUsuarios)
      }
   

   return (
    <Post key={index}>
      <p>{Usuarios.nome}</p>
      <p className='coral'>{Usuarios.idade}</p>
      <button onClick={deletarUsuario}>X</button>
    </Post>
  )
})

 console.log({Usuarios})



 return (
  <MainContainer>
    <Form>
      <label>Nome:</label>
      <input
        placeholder='Insira um nome'
        value={inputNome}
        onChange={handleInputNome}
      />
      <label>Idade:</label>
      <input
        placeholder='Insira uma idade'
        value={inputIdade}
        onChange={handleInputIdade}
      />
      <button onClick={addPessoa}>Adicionar</button>
    </Form>
    {listaDeUsuarios}
  </MainContainer>
)
}


export default App;
