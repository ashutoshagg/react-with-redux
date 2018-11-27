import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';
import * as actionCreators from '../../store/actions/index';

class Counter extends Component {

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.add5Counter} />
                <CounterControl label="Subtract 5" clicked={this.props.sub5Counter} />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(strResult => (
                        <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapPropsToState = (state) => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    }

}

const mapsPropsToDispatch = (dispatch) => {
    return {
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        //onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
        //add5Counter: () => dispatch({ type: actionTypes.ADD5, value: 5 }),
        //sub5Counter: () => dispatch({ type: actionTypes.SUB5, value: 5 }),
        //onStoreResult: (ctr) => dispatch({ type: actionTypes.STORE_RESULT, value: ctr }),
        //onDeleteResult: (id) => dispatch({ type: actionTypes.DELETE_RESULT, value: id })
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        add5Counter: () => dispatch(actionCreators.add5(5)),
        sub5Counter: () => dispatch(actionCreators.sub5(5)),
        onStoreResult: (ctr) => dispatch(actionCreators.storeResult(ctr)),
        onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id))
    }
}



export default connect(mapPropsToState, mapsPropsToDispatch)(Counter);