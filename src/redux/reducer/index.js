import { ADD_FAVOURITE, REMOVE_FAVOURITE, FILTER, ORDER } from "../action/types"

const typeOrders = {
    ASC: "Ascendente",
    DSC: "Descendiente"
}

const initialState = {
    fav: [],
    allCharacters: []
}

export const reducer = ( state = initialState, { type, payload } ) => {
    switch (type) {
        case ADD_FAVOURITE: 
          const characters = [...state.fav, payload]
            return {
                ...state, 
                fav: characters,
                allCharacters: characters
            }
        case REMOVE_FAVOURITE: 
         let filteredChars = state.allCharacters.filter((character) => character.id !== payload);
          return {
             ...state,
             fav: filteredChars,
             allCharacters: filteredChars
          }
        case FILTER:
            let filteredCharsByGender;
            if (payload === 'All') {
                filteredCharsByGender = state.allCharacters;
            }else {
                filteredCharsByGender = state.allCharacters.filter((char => char.gender === payload))
            }
            return{
                ...state,
                fav: filteredCharsByGender
            }
        case ORDER:
            const orderedChars = typeOrders.ASC === payload ? state.fav.sort((a , b) => a.id - b.id) : state.fav.sort((a, b) => b.id - a.id)
            return {
                ...state,
                fav: orderedChars
            }
        default:
            return {...state};
    }
}