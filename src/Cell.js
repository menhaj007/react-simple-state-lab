import React, { Component } from "react";


export default class Cell extends Component {
    constructor(props) {
        super();
        this.state = {
            color: props.value
        }
    }
    changeState = () => {
        const newValue = '#333';
        this.setState({
            color: newValue
        })
    }

    render () {
        return (
            <div className="cell" onClick={this.changeState} style = {{backgroundColor: this.state.color}}>
               
            </div>
        )
    }
}