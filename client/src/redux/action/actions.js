import { ADD_FAVOURITE, REMOVE_FAVOURITE, ORDER, FILTER, GET_FAVOURITE } from './types'

// export const getFavourites = async () => {
//     const res = await fetch('http://localhost:3000/rickandmorty/fav')
//     const data = await res.json()
//     console.log(data)
//     return {
//         type: GET_FAVOURITE,
//         payload: data
//     }
// }

export const getFavourites = () => {
    let payload = []
    fetch('http://localhost:3000/rickandmorty/fav')
      .then((res) => res.json())
      .then((data) => payload.push(...data))
      .catch((err) => console.error(err))
    return {
        type: GET_FAVOURITE,
        payload
    }
}

export const addFavourite = (payload) => {
    fetch('http://localhost:3000/rickandmorty/fav', {
        method: 'POST',
        headers: {
         'Content-Type': 'application/json'
        },
        body: JSON.stringify({character: payload})
    })
    .catch((err) => console.error(new Error(err)))
    return {
        type: ADD_FAVOURITE,
        payload
    }
}

export const removeFavourite = (payload) => {
    const fetchConfig = {
        method: 'DELETE'
    }
    fetch(`http://localhost:3000/rickandmorty/fav/${300}`, fetchConfig)
      .catch(err => console.error(new Error(err)))
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