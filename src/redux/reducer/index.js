import { ADD_FAVOURITE, REMOVE_FAVOURITE } from "../action/types"

const initialState = {
    fav: []
}

export const reducer = ( state = initialState, { type, payload } ) => {
    switch (type) {
        case ADD_FAVOURITE: 
            return {
                ...state, 
                fav: [...state.fav , payload]
            }
        case REMOVE_FAVOURITE: 
         const filteredChars = state.fav.filter((character) => character.id !== payload);
          return {
             ...state,
             fav: filteredChars
          }
        default:
            return {...state};
    }
}