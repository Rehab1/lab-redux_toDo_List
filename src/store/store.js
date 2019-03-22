import {createStore} from 'redux';
import Reducer from '../reducers/toDo';

const intialState={
    data:[]
};

const Store = createStore(
    Reducer, 
    intialState, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default Store;