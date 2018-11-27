import * as actionTypes from './action';

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD5:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case actionTypes.SUB5:
            return {
                ...state,
                counter: state.counter - action.value
            }
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: state.counter })
            }

        case actionTypes.DELETE_RESULT:
            return {
                ...state,
                results: state.results.filter((result) => result.id != action.value)
            }
    }
    return state;

}

export default reducer;