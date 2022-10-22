import {INCREMENT, DECREMENT} from '../constant.js'

// 同步 action
export const incrementAction = data => ({type:INCREMENT, data})
export const decrementAction = data => ({type:DECREMENT, data})
// 异步 action
export const incrementActionAsync = (data, time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(incrementAction(data))
        }, time)
    }
}