import {Homes} from '../data';
import {ADD_FAVORITE, REMOVE_FAVORITE} from './actions';
const initialState = {
    homes: Homes,
    filters: {},
    favorites: []
}

function Home(state = initialState, action) {
    switch (action.type) {
        case ADD_FAVORITE:
            const filteredFavorite = state.favorites.filter(favorite => favorite !== action.id).concat(action.id);
            return Object.assign({}, state, {
                favorites: filteredFavorite
            })
        case REMOVE_FAVORITE:
            const filteredOutFavorite = state.favorites.filter(favorite => favorite !== action.id);
            return Object.assign({}, state, {
                favorites: filteredOutFavorite
            })
        default:
            return state
    }
}

export default Home;