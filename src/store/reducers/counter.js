import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case actionTypes.DECREMENT:
        // (optional) use to make code clean
            return updateObject(state, { counter: state.counter - 1 })
        // return {
        //     ...state,
        //     counter: state.counter - 1
        // }
        case actionTypes.ADD5:
            return updateObject(state, {counter: state.counter + action.value})
        // return {
        //     ...state,
        //     counter: state.counter + action.value
        // }
        case actionTypes.SUB5:
            return {
                ...state,
                counter: state.counter - action.value
            }
    }
    return state;

}

export default reducer;