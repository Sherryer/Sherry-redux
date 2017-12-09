import {applyMiddleware ,createStore} from 'redux'
import reducers from './reducers/index'
import promise from 'redux-promise-middleware'
import logger from 'redux-logger'

const middleWare = applyMiddleware (promise(), logger);
const store = createStore(reducers, middleWare);


export default store