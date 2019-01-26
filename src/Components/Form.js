import React, { Component } from 'react'
import {connect } from 'react-redux';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtEn : '',
            txtVn : '',
        }
        this.addWord = this.addWord.bind(this);    
    }
   addWord(){
        const { txtEn , txtVn} = this.state;
        const word = {
            id : Math.random(),
            en : txtEn,
            vn : txtVn,
            isMemorized : false
        }
        this.setState({txtEn : '' , txtVn : ''})
        this.props.dispatch({type : 'ADD_WORD' , word});
    }
    render() {
        const { shouldShowForm , dispatch } = this.props;
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
                                className="btn btn-success"
                                onClick={this.addWord}>
                                Add word
                            </button>
                            <button
                                className="btn btn-danger"
                                onClick={() =>dispatch({type : "TOGGLE_FORM"})}>
                                Cancel
                            </button>
                        </div>
                    </div> :
                     <button 
                     className="btn btn-success"
                     style={{width : 200 ,margin : 10}}
                     onClick={() =>dispatch({type : "TOGGLE_FORM"})}>
                             +
                    </button>
                }
            </div>
        )
    }
}

const mapStateToProps = function(state){
    return {shouldShowForm : state.shouldShowForm};
}

export default connect(mapStateToProps)(Form);
