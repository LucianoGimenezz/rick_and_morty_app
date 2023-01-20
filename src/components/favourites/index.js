import { Component } from "react";
import { connect } from "react-redux"; 
import { CardStyle, Img, SectionInfo, TitleName, DivContainer, TitleInfo} from "../Card/styles";
import { Grid } from "../Cards";

class Favourite extends Component{
    render() {
        return <Grid>
            {this.props?.fav?.map(item => (
                <CardStyle key={item.id}>
                    <div style={{
                    height: "90%",
                    display: "flex",
                    }}>
                     <Img src={item.image} alt={item.name} />
                    </div>
                    <div>
                        <SectionInfo>
                            <TitleName>
                                {item.name}
                            </TitleName>
                        </SectionInfo>
                        <DivContainer>
                            <TitleInfo>
                                {item.gender}
                            </TitleInfo>
                        </DivContainer>
                    </div>
                </CardStyle>
            ))}
        </Grid>
    }

}

const mapStateToProps = (state) => ({fav: state.fav});

export default connect(mapStateToProps, null)(Favourite) ;