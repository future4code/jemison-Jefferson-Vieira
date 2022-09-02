import { Header } from "../components/Header/Header"

export function DetailsPage (props) {
    const {characters,id} = props
    const {changePage}=props

    const [character] = characters.filter(char=> char.id === id)
    console.log(characters)
    return(
        <>
         <Header/>
         <div>
            <h2>{character.name}</h2>
            <img src={character.image} alt=""></img>
            <p>{character.species}</p>
            <button onClick={()=> changePage("homepage")}>Voltar</button>
         </div>
        </>
    )
}


