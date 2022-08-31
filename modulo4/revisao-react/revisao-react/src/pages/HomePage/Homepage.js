import Card from "../../components/Card/Card";
import { Header } from "../../components/Header/Header";
import { HomePageContainer } from "./HomePageStyles";


export function HomePage () {
    return(
        <HomePageContainer>
       <Header/>
       <main>
       <Card
       img={"https://rickandmortyapi.com/api/character/avatar/2.jpeg"}
       name={"Morty"}
       species={"Humano"}
       />
       <Card
       img={"https://rickandmortyapi.com/api/character/avatar/13.jpeg"}
       name={"Alien Googah"}
       species={"Alien"}
       />
       <Card
       img={"https://rickandmortyapi.com/api/character/avatar/1.jpeg"}
       name={"Rick"}
       species={"Humano"}
       />
     
       
       </main>
      
        </HomePageContainer>
    )
}


