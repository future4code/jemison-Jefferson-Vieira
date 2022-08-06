import styled from 'styled-components';

export const Cabecalho = styled.header`
display:flex;
justify-content: space-between;
border-bottom: 1px solid red;
width:40vw;
height:15vh;
/* border:1px solid white; */
margin-top:10px;


.TextoLogo{
    display:flex;
    
}


.logoAstromatch{
    color:white;
    margin-top:15px;  
    margin-right:0;
}

.logoAstromatch2{
    color:yellow;
    margin-top:15px;  
    margin-left:0;
}

img{
  
    height:40px;
    object-fit:contain;
    margin-top:40px;
}
.icone{
   /* padding:50px; */
   color:yellow;
   margin:35px ;
}
`

export const Foto = styled.img`
width:100%;



`




export default  Cabecalho ;


