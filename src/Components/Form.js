import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shouldShowForm: true
        }
    }
    render() {
        return (
            <div>
                {this.state.shouldShowForm ? 
                    <div className="form-group word-from" >
                        <input
                            placeholder="English"
                            className="form-control"/>
                        <br />
                        <input
                            placeholder="Vietnamese"
                            className="form-control"/>
                        <br />
                        <div className="btn-container">
                            <button 
                                className="btn btn-success">
                                Add word
                            </button>
                            <button
                                className="btn btn-danger">
                                Cancel
                            </button>
                        </div>
                    </div>:
                     <button 
                     className="btn btn-success"
                     style={{width : 200 ,margin : 10}}>
                             +
                    </button>
                }
            </div>
        )
    }
}
