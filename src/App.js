import Cards from './components/Cards.jsx'
import styled from 'styled-components'
import Nav from './components/Nav.jsx'
import { useState } from 'react'
import SearchBar from "./components/SearchBar.jsx";


const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  `

function App () {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(false);

  function onSearch(id) {
    if (!characters.some(character => character.id === parseInt(id))) {
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.name) {
            setError(false);
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            setError(true);
          }
        });
    } else setError(false);
  }

  function onClose(id){
    const result = characters.filter((character) => character.id !== id);
    setCharacters(result);
  }
  return (
    <Wrapper>
      <Nav>
        <SearchBar onSearch={onSearch} error={error}/>
      </Nav>
        <Cards
          characters={characters}
          onClose={onClose}
        />
    </Wrapper>
  )
}

export default App
