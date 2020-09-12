export const ADD_FILTER = 'ADD_FILTER';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE'

export function addFavorite(id) {
    return { type: ADD_FAVORITE, id: id}
}

export function removeFavorite(id) {
    return {type: REMOVE_FAVORITE, id: id}
}