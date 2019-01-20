import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtEn : '',
            txtVn : '',
        }
       
    }
    render() {
        const { shouldShowForm } = this.props;
        return (
            <div>
                {shouldShowForm ? 
                    <div className="form-group word-from" >
                        <input
                            placeholder="English"
                            className="form-control"
                            value={this.state.txtEn}
                            onChange={evt => this.setState({txtEn : evt.target.value})}/>
                        <br />
                        <input
                            placeholder="Vietnamese"
                            className="form-control"
                            value={this.state.txtVn}
                            onChange={evt => this.setState({txtVn : evt.target.value})}/>
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
