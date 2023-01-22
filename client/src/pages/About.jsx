import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 20px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 3rem;
`;

const Content = styled.p`
  font-size: 1.5rem;
`;
export default function About() {
  return (
    <Container>
      <Title>Rick and Morty App</Title>
      <Content>
        Esta app es el primer proyecto del bootcamp de{" "}
        <strong>soy Henry</strong>, en la cual vamos integrando cada tema nuevo
        que aprendemos.
      </Content>
    </Container>
  );
}
