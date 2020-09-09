import {createStore} from 'redux';
import Home from './homesReducer';


const store = createStore(Home);

export default store;