import { applyMiddleware ,combineReducers ,createStore} from 'redux';
import promise from 'redux-promise-middleware';
import logger from  'redux-logger';
import axios from 'axios';

const fetch = (store = {
    fetching: false,
    fetched: false,
    error: null,
    value: ""
}, action) => {
    switch (action.type) {
        case "fetch_PENDING":
            store = {...store, fetching: true};
            break;
        case "fetch_FULFILLED":
            store = {...store, fetching: false, fetch:true , value: action.payload};
            break;
        case "fetch_REJECTED":
            store = {...store, fetching: false, fetched: false, error: action.payload};
            break;
    }
    return store
};

const reducers = combineReducers({
    fetch
});


const middleware = applyMiddleware(promise(), logger)
const store = createStore(reducers, middleware)

store.dispatch({
    type:"fetch",
    payload:axios.get('http://localhost:8080/dist/test')
});

