import { ADD_FAVOURITE, REMOVE_FAVOURITE, ORDER, FILTER } from './types'

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

export const filterCards = (payload) => {
    return {
        type: FILTER,
        payload
    }
}

export const orderCards = (payload) => {
    return {
        type: ORDER,
        payload
    }
}