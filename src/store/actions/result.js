import * as actionTypes from './actionTypes';

export const saveResult = (value) => {
    return {
        type: actionTypes.STORE_RESULT,
        value: value
    }
}

export const storeResult = (value) => {
    return function (dispatch, getState) {
        setTimeout(() => {
            // nice utility function but dont overuse
            // better way to pass parameter from the container where we have write dispatch funtion in mapsPropsToDispatch
            const oldCounter = getState().ctr.counter; 
            console.log('[old value]' + oldCounter);
            dispatch(saveResult(value))
        }, 2000)
    }
}

export const deleteResult = (value) => {
    return {
        type: actionTypes.DELETE_RESULT,
        value: value
    }
}
