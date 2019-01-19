import React, { Component } from 'react'

export default class Box extends Component {
  constructor(props){
      super(props);
      this.state = {count : 1}
      this.increase = this.increase.bind(this);
      this.descrease = this.descrease.bind(this);
      this.reset = this.reset.bind(this);
  }
  increase(){
    this.setState({count : this.state.count + 1})
  }
  descrease(){
    this.setState({count : this.state.count - 1})
  }
  reset(){
    this.setState({count : 0})
  }
  render() {
    return (
      <div>
          <h3>Value = {this.state.count}</h3>
          <button 
                className="btn btn-success"
                onClick={this.increase}>
                Increase
         </button>
          <button 
            className="btn btn-danger"
            onClick={this.descrease}>Descrease</button>
          <button 
            className="btn btn-warning"
            onClick={this.reset}>
            Reset
        </button>
      </div>
    )
  }
}
