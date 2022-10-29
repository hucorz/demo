import {combineReducers} from 'redux' // combineReducers 可以汇总多个 reducer
import countReducer from './count'
import personReducer from './person'

export default combineReducers({
    count:countReducer,
    persons:personReducer
})