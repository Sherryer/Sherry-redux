import { applyMiddleware, combineReducers, createStore } from 'redux';
import axios from 'axios';
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';

// reudcer
const Fetch = (store={
    fetching: false,
    fetched: false,
    error: false,
    data:[]

}, action)=>{
    // 使用 promise 中间件，会自动发送 type_PEDDING type_FULFILLED type_REJECTED 三种 dispatch，只有 payload 里的 promise 才会被解释。
    switch (action.type) {
        case("fetch_PENDING"):
            store = {...store, fetching: true, fetched: false};
            break;
        case("fetch_FULFILLED"):
            store = {...store, fetching: false, fetched: true};
            break;
        case("fetch_REJECTED"):
            store = {...store, fetching: false, fetched: false, error: true};
            break;
    }
    return store
};



const reducers = combineReducers({
    fetch: Fetch
});

// middleware
const middleware = applyMiddleware(promiseMiddleware() ,logger);

// store
const store = createStore(reducers, {} , middleware);

// dispatch
store.dispatch({
    type: "fetch",
    payload: axios.get('http://localhost:8080/dist/message.txt')
});