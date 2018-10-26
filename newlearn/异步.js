import { applyMiddleware ,combineReducers ,createStore} from 'redux';
import promise from 'redux-promise-middleware';
import logger from  'redux-logger';
import axios from 'axios';

// reudux 做异步有两种解决方案
// 1、使用 redux-thunker 中间键（使得dispatch可以传递函数为参数；函数的参数是原dispatch方法），在函数中根据请求前、请求成功、请求失败分别发送三个dispatch
// 2、使用 redux-promise-middleware （自动监听类型为promise的payload），如果监听到有 promise，会自动根据promise情况发出 {type}_PENDING，{type}_FULFILLED，{type}_REJECTED 三个dispatch

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

