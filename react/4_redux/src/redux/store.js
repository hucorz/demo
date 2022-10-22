import {createStore, applyMiddleware} from 'redux'
import reducer from './reducers' // 引入汇总后的 reducer
import thunk from 'redux-thunk'  // 引入redux-thunk，用于支持异步action
import {composeWithDevTools} from 'redux-devtools-extension'

export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
