import styled from 'styled-components';

    export const CardContainer= styled.div`
    border:1px solid var(--yellow);
    background-color: #f8efc9;
    display: flex;
    flex-direction:column;
    text-align: center;
    color: var(--dark);
    justify-content: center;
    align-items: center;
    width:20vw;
    margin-top:5vh;
    border-radius:10px;



.botoesContainer{
    width:100%;
    /* height:60px; */
    display:flex;
    justify-content:space-around;
    align-items:center;
  
   
}
.botao1{
    color:red;
    width:60px;
    padding:0;
}  

.botao2{
    color: grey;
}

.botao3{
color:purple;

}

img{

    width:19vw;
    height:30vh;
    border-radius:8px;
    margin-top:5px;

}
`
const FavoriteIcon=styled.button`
color : yellow;

`
const CloseIcon=styled.button`
color:var(--yellow);

`

export default CardContainer;