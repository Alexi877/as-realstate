import {Homes} from '../data';

const initialState = {
    homes: Homes,
    filters: {}
}

function Home(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}

export default Home;