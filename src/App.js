import styled from "styled-components";
import Nav from "./components/Nav.jsx";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Details from "./pages/Details";
import NotFound from "./pages/404.jsx";
import { Login } from "./pages/Login.jsx";


const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

function App() {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(false);
  const location = useLocation();

  function onSearch(id) {
    if (!characters.some((character) => character.id === parseInt(id))) {
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.name) {
            setError(false);
            setCharacters([...characters, data]);
          } else {
            setError(true);
          }
        });
    } else setError(false);
  }
  function onRandom() {
    const random = Math.floor(Math.random() * 826)
    if (!characters.some((character) => character.id === random)) {
      fetch(`https://rickandmortyapi.com/api/character/${random}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.name) {
            setError(false);
            setCharacters([...characters, data]);
          } else {
            setError(true);
          }
        });
    } else setError(false);
  }

  function onClose(id) {
    const result = characters.filter((character) => character.id !== id);
    setCharacters(result);
  }
  return (
    <Wrapper>
      {location.pathname !== '/' &&
      <Nav>
        <SearchBar onSearch={onSearch} error={error} onRandom={onRandom} />
      </Nav>
      }
      <Routes>
          <Route path="" element={<Login />} />
          <Route path="" element={<Home characters={characters} onClose={onClose}/>}/>
          <Route path="about" element={<About />}/>
          <Route path="/detail/:detailId" element={<Details />}/>
          <Route path="/404" element={<NotFound />}/>
          <Route path="*" element={<NotFound />}/>
      </Routes>
    </Wrapper>
  );
}

export default App;
