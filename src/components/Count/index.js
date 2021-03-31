import React,{ Component } from 'react'

export default class Count extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            value: 1
        }
    }

    handleChange = (e) => {
        const val = e.target.value*1;
        this.setState({value: val})
    }

    increment = () => {
        const { count,value } = this.state
        this.setState({count: count+value});
    }

    decrement = () => {
        const { count,value } = this.state
        this.setState({count: count-value});
    }

    incrementOdd = () => {
        const { count,value } = this.state
        if(count % 2 === 0 ) {
            this.setState({count: count+value});
        }
    }

    incrementAsync = () => {
        const { count,value } = this.state
        setTimeout(()=>{
            this.setState({count: count+value});
        },1000)
    }


    render() {
        return(
            <div>
                <h3>当前的和为 { this.state.count }</h3>
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