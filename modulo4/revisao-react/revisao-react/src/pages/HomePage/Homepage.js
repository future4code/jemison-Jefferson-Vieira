import Card from "../../components/Card/Card";
import { Header } from "../../components/Header/Header";
import { HomePageContainer } from "./styles";
import { useState } from "react";

export function HomePage (props) {
    const {characters}= props
    const {image,name,species,query,orderParam}= props.states
    const {handleInputImage,handleInputName,handleInputSpecies,handleInputQuery, handleInputOrderPram} = props.handlers
    const {addCharacter} = props
    const {removeCharacter} =props
    const {changePage} = props
    console.log("chegou na homepage", characters)

    const renderList = characters
    .filter(char=> query === "" || char.name.toLowerCase().includes(query))
    .sort((a,b)=> orderParam === "" || orderParam === "asc"  && a.name > b.name ? 1 : -1)
    .sort((a,b)=> orderParam === "" || orderParam === "desc"  && a.name > b.name ? -1 : 1)
    .map(char=>{
        return(
            <Card key={char.id}
            id={char.id}
            img={char.image}
            name={char.name}
            species={char.species}
            removeCharacter={removeCharacter}
            />
        )
    })
   
    return(

        <>
        <HomePageContainer>
       <Header/>
       <aside>
       <form>
        <label htmlFor="image">Image:</label>
        <input
         type="text" 
         id="image" 
         onChange={handleInputImage}
         value={image}
         />

        <label htmlFor="name">Name:</label>
        <input 
        type="text"
        id="name"
        onChange={handleInputName}
        value={name}
        />

        <label htmlFor="species">Species:</label>
        <input 
        type="text" 
        id="species"
        onChange={handleInputSpecies}
        value={species}
        />
        <button onClick={addCharacter}>Criar</button>


        <h2>Busca</h2>
        <input 
        type="text" 
        value={query} 
        onChange={handleInputQuery}/>

        <h2>Ordenar</h2>
        <select 
        name="" 
        id=""
        value={orderParam}
        onChange={handleInputOrderPram}
        >
        <option value="asc">Crescente</option>
        <option value="desc">Decrescente</option>
        </select>
       </form>
       </aside>
     
       <main>
          {renderList}    
       </main>
      
        </HomePageContainer>
        </>
    )
}


