/* eslint-disable no-useless-constructor */
import React from 'react';
import store from '../store/index.js'

export default class Counter extends React.Component {
    constructor(props){
        super(props);
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
        this.state = {
            counter: store.getState()
        }
    }
    handleIncrement() {
        console.log('handleIncrement');
        store.dispatch({
            type: "INCREMENT"
        })
        this.setState({
            counter: store.getState()
        })
    }
    handleDecrement() {
        console.log('handleIncrement');
        store.dispatch({
            type: "DECREMENT"
        })
        this.setState({
            counter: store.getState()
        })
    }
    render() {
        return (
            <>
                <div>{this.state.counter}</div>
                <div onClick={this.handleIncrement}>increment</div>
                <div onClick={this.handleDecrement}>decrement</div>
            </>
        )
    }
}