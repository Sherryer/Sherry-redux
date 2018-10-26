import { createStore, applyMiddleware} from 'redux';
import { combineReducers } from 'redux-immutablejs';
import logger from 'redux-logger';
import Immutable from 'immutable';

var inatialStore = {
    number: 0
};

function count(store = Immutable.fromJS(inatialStore), action) {
    switch (action.type) {
        case "ADD":
            console.log('ADD')
            var newNum = store.get('number')+1;
            return store.set('number', newNum)
            break;
        case "RED":
            console.log('RED')
            console.log(store.get('number'))
            break
    }
    return store
}

var reducers = combineReducers({count});
var store = createStore(reducers);

store.dispatch({type:"ADD"})
store.dispatch({type:"RED"})
console.log(store)

console.log(11111);