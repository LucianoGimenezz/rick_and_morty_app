/* eslint-disable react-hooks/exhaustive-deps */
// import { Component } from "react";
// import { connect } from "react-redux"; 
// import { CardStyle, Img, SectionInfo, TitleName, DivContainer, TitleInfo} from "../../components/Card/styles";
// import { Grid } from "../../components/Cards";
// import styled from "styled-components";
// import { filterCards, orderCards } from '../../redux/action/actions'

// const Container = styled.div`
//     width: 100%;
//     height: 100%;
//     display: flex;
//     flex-direction: column;
// `

// const Genders = ['Male', 'Female', 'unknown', 'Genderless'];

// class Favourite extends Component{
//     render() {
//         const handleChange = (e) => {
//             this.props.orderCards(e.target.value)
//         }

//         return<Container>
//             <div style={{
//                 height: "40px",
//                 display: "flex",
//                 justifyContent: "center",
//                 padding: "8px",
//                 gap: "6px"
//             }}>
//                 <select onChange={handleChange}>
//                     <option value="Ascendente">Ascendente</option>
//                     <option value="Descendiente">Descendiente</option>
//                 </select>
//                 <select>
//                     {Genders.map((item, index) => (
//                         <option key={index} value={item}>{item}</option>
//                     ))}
//                 </select>
//             </div>
//             <Grid>
//                 {this.props?.fav?.map(item => (
//                     <CardStyle key={item.id}>
//                         <div style={{
//                         height: "90%",
//                         display: "flex",
//                         }}>
//                         <Img src={item.image} alt={item.name} />
//                         </div>
//                         <div>
//                             <SectionInfo>
//                                 <TitleName>
//                                     {item.name}
//                                 </TitleName>
//                             </SectionInfo>
//                             <DivContainer>
//                                 <TitleInfo>
//                                     {item.gender}
//                                 </TitleInfo>
//                             </DivContainer>
//                         </div>
//                     </CardStyle>
//                 ))}
//             </Grid>
//         </Container> 
//     }

// }

// const mapStateToProps = (state) => ({fav: state.fav});

// const mapDispatchToProps = (dispatch) => {
//     return {
//         orderCards: (order) => dispatch(orderCards(order))
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Favourite) ;

import { CardStyle, Img, SectionInfo, TitleName, DivContainer, TitleInfo} from "../../components/Card/styles";
import { Grid } from "../../components/Cards";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { filterCards, orderCards } from '../../redux/action/actions'
import { useEffect } from "react";

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

const Select = styled.select`
    border: none;
    width: 150px;
    padding: 8px;
    box-shadow: 2px 7px 9px -4px rgba(0,0,0,0.76);
    &:focus{
        outline: 3px solid #09f;
    }
`
const Genders = ['Male', 'Female', 'unknown', 'Genderless'];

const Favourite = (props) => {
    const { fav } = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(filterCards('All'))
    },[])

    const handleChangeOrder = (e) => {
        dispatch(orderCards(e.target.value))
    }

    const handleChangeFilter = (e) => {
        dispatch(filterCards(e.target.value));
    }
    return <Container>
         <div style={{
                height: "40px",
                display: "flex",
                justifyContent: "center",
                padding: "8px",
                gap: "6px"
            }}>
                <Select onChange={handleChangeOrder}>
                    <p>Order:</p>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendiente">Descendiente</option>
                </Select>
                <Select onChange={handleChangeFilter}>
                    <option value="All">All</option> 
                    {Genders.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))}
                </Select>
        </div>
        <Grid>
             { fav?.map(item => (
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
    </Container>

} 

export default Favourite