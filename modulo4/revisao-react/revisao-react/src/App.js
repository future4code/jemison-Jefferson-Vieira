import { useEffect, useState } from "react";
// import Card from "./components/Card/Card";
// import { Header } from "./components/Header/Header";
// import { results } from "./Data/Data";
import { GlobalStyle } from "./GlobalStyle";
import { DetailsPage } from "./pages/DetailsPage/DetailsPage";
import { HomePage } from "./pages/HomePage/Homepage";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [query, setQuery] = useState("");
  const [orderParam, setOrderParam] = useState("");
  const [page, setPage] = useState("homepage");
  const [id, setId] = useState(0);


  const getAllCharacters=()=>{
    axios.get("https://rickandmortyapi.com/api/character")
    .then((response)=>setCharacters(response.data.results))
    .catch((error)=> console.log("deu ruim", error.response))
  }

  useEffect(() => {
    getAllCharacters()
  }, []);

  const handleInputImage = (e) => setImage(e.target.value);
  const handleInputName = (e) => setName(e.target.value);
  const handleInputSpecies = (e) => setSpecies(e.target.value);
  const handleInputQuery = (e) => setQuery(e.target.value);
  const handleInputOrderParam = (e) => setOrderParam(e.target.value);

  const changePage = (page, id) => {
    setPage(page);
    setId(id);
  };

  const addCharacter = (e) => {
    e.preventDefault();
    const newCharacter = {
      id: Date.now(),
      name: name,
      species: species,
      origin: {
        name: "Mars",
      },
      image: image,
    };
    const newCharactersList = [...characters, newCharacter];
    setCharacters(newCharactersList);

    setImage("");
    setName("");
    setSpecies("");
  };

  const removeCharacter = (id) => {
    const filteredList = characters.filter((char) => {
      return char.id  !== id;
    });
    setCharacters(filteredList);
  };

  const renderPage = () => {
    switch (page) 
    {
      case "homepage": 
        return (
          <HomePage
            characters={characters}
            states={{ image, name, species, query, orderParam }}
            handlers={{
              handleInputImage,
              handleInputName,
              handleInputSpecies,
              handleInputQuery,
              handleInputOrderParam,
            }}
            addCharacter={addCharacter}
            removeCharacter={removeCharacter}
            changePage={changePage}
          />
        );
      case "detailspage":
        return (
          <DetailsPage
            characters={characters}
            id={id}
            changePage={changePage}
          />
        );
    }
  };

  return (
    <div className="App">
      <GlobalStyle />
      {renderPage()}
    </div>
  );
}

export default App;
