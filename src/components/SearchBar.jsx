import { useState } from "react";
import styled from "styled-components";

const InputStyle = styled.input`
  border: 1px solid #fff;
  outline: none;
  border-radius: 8px;
  padding: 6px;
  background-color: #3c3e44;
  color: #fff;
`;

const ButtonStyle = styled.button`
  height: 37px;
  border: none;
  color: ${(props) => (props.primary ? "#fff" : "#3c3e44")};
  padding: 4px 8px;
  background-color: ${(props) => (props.primary ? "#09f" : "#fff")};
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
`;
const Container = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: end;
  gap: 10px;
  padding-right: 15px;
  margin-top: 8px;
`;

const InputContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 5px;
`;

const Label = styled.label`
  visibility: ${(props) => (props.visibility ? "visible" : "hidden")};
  background-color: #f87171;
  color: #fff;
  border-radius: 4px;
  padding: 2px;
  margin-top: 4px;
`;

export default function SearchBar({ onSearch, error }) {
  console.log(error);
  const [input, setInput] = useState("");
  const handleInputChange = () => {
    if (input.trim().length > 0) {
      onSearch(input.trim());
      setInput("");
    }
  };

  return (
    <Container>
      <InputContainer>
        <InputStyle
          value={input}
          type="text"
          onChange={(e) => setInput(e.target.value)}
        />
        {error ? (
          <Label visibility>Personaje no encontrado</Label>
        ) : (
          <Label>Personaje no encontrado</Label>
        )}
      </InputContainer>
      <ButtonsContainer>
        <ButtonStyle onClick={handleInputChange} primary>
          Agregar
        </ButtonStyle>
        <ButtonStyle onClick={handleInputChange}>Random</ButtonStyle>
      </ButtonsContainer>
    </Container>
  );
}
