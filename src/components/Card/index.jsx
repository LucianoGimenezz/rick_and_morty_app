import {
  CardStyle,
  ButtonDelete,
  Img,
  SectionInfo,
  TitleInfo,
  TitleName,
  DivContainer,
} from "./styles";
import { Link } from "react-router-dom";

export default function Card(props) {
  const { name, gender, image, onClose, id } = props;
  return (
    <CardStyle>
      <div
        style={{
          height: "90%",
          display: "flex",
        }}
      >
        <ButtonDelete onClick={() => onClose(id)}>X</ButtonDelete>
        <Img src={image} alt="Character of Rick And Morty" />
      </div>
      <div>
        <SectionInfo>
          <Link to={`/detail/${id}`} style={{ textDecoration: "none" }}>
            <TitleName>{name}</TitleName>
          </Link>
        </SectionInfo>
        <DivContainer>
          <TitleInfo>{gender}</TitleInfo>
        </DivContainer>
      </div>
    </CardStyle>
  );
}
