import styled from "styled-components";

const CardStyle = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  background-color: #3c3e44;
  border-radius: 8px;
  box-shadow: 1px 6px 5px 2px rgba(0, 0, 0, 0.67);
  transform: scale(1);
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;

const TitleName = styled.h2`
  color: #fff;
  font-weight: bold;
`;

const SectionInfo = styled.div`
  display: flex;
  padding: 4px;
  align-items: center;
  width: 100%;
`;

const Info = styled.p`
  color: #fff;
  margin-left: 4px;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`;

const ButtonDelete = styled.button`
  position: absolute;
  padding: 10px;
  background-color: #ef4444;
  border: none;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  border-radius: 6px;
  cursor: pointer;
  right: 0;
  top: -10px;
`;

const DivContainer = styled.div`
  padding: 10px;
`;

const TitleInfo = styled.p`
  color: #fff;
`;

export default function Card(props) {
  const { name, species, gender, image, onClose, id } = props;
  return (
    <CardStyle>
      <div>
        <ButtonDelete onClick={() => onClose(id)}>X</ButtonDelete>
        <Img src={image} alt="Character of Rick And Morty" />
      </div>
      <div>
        <SectionInfo>
          <TitleName>{name} - </TitleName>
          <Info>{species}</Info>
        </SectionInfo>
        <DivContainer>
          <TitleInfo>{gender}</TitleInfo>
        </DivContainer>
      </div>
    </CardStyle>
  );
}
