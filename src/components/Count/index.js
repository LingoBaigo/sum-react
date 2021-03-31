import React,{ Component } from 'react'
import store from '../../redux/store'
import {createDecrementAction,createIncrementAction} from "../../redux/count_action";

export default class Count extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1
        }
    }

    componentDidMount() {
        //检测redux中状态的变化,如果变化就render,只要store里面任何状态改变都会调用这个回调
        store.subscribe(()=>{
            this.setState({});
        })
    }

    handleChange = (e) => {
        const val = e.target.value*1;
        this.setState({value: val});
    }

    increment = () => {
        const { value } = this.state;
        store.dispatch(createIncrementAction(value*1));

    }

    decrement = () => {
        const { value } = this.state;
        store.dispatch(createDecrementAction(value*1));
    }

    incrementOdd = () => {
        const { value } = this.state;
        if( store.getState() % 2 === 0 ) {
            store.dispatch(createIncrementAction(value*1));
        }
    }

    incrementAsync = () => {
        const { value } = this.state;
        setTimeout(()=>{
            store.dispatch(createIncrementAction(value*1));
        },1000)
    }


    render() {
        return(
            <div>
                <h3>当前的和为 { store.getState() }</h3>
                <select onChange = {this.handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <hr />
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.incrementOdd}>偶数+</button>
                <button onClick={this.incrementAsync}>异步+</button>
            </div>
        )
    }
}