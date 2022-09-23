import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
   :root{
    --soft-white:#f2f2f2;
    --green:#8bcf21;
    --yellow:#Ffcb16;
    --dark:#383b40;
    --deep-blue:#011640;
    --deep-blue-secondary:#010F2B;
   }

   h1{
    font-size:70px;  
    font-family: 'Jolly Lodger', cursive;
    color: var(--green);
   }

   h2 , h3 {
    font-family:'Staatliches', cursive;
    color: var(--yellow);
   }

   body{
    font-family:'Rajdhani', sans-serif;
    background: var(--deep-blue);
    color: var(--soft-white);
   }

   button{
      font-family:'Staatliches', cursive;
     
   }

   *{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
   }
   `