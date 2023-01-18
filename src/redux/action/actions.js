import { ADD_FAVOURITE, REMOVE_FAVOURITE } from './types'

export const addFavourite = (payload) => {
    return {
        type: ADD_FAVOURITE,
        payload
    }
}

export const removeFavourite = (payload) => {
    return {
        type: REMOVE_FAVOURITE,
        payload
    }
}