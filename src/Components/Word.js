import React, { Component } from 'react';
import {connect} from 'react-redux';
import { removeWord } from './redux/actionCreators';
class Word extends Component {
    render() {
        const {word ,dispatch} = this.props;
        return (
            <div className="word">
                <div className="word-container">
                    <h3 className="text-success">{word.en}</h3>
                    <h3 className="text-danger">
                        {word.isMemorized ? '----' : word.vn}
                    </h3>
                </div>
                <div className="btn-container">
                    <button
                        className={word.isMemorized ? 'btn btn-success' : 'btn btn-danger'}
                        onClick={() => dispatch({type : 'TOGGLE_WORD' , id : word.id})}>
                        {word.isMemorized ? 'Forgot' : 'Memorized'}
                    </button>
                    <button
                        className="btn btn-warning"
                        onClick={() => this.props.removeWord(word.id)}>
                        Remove
                    </button>
                </div>
            </div>
        );
    }
}

// connect(thamsoa , thamsob)
// > thamsoa = 
    // +Gia tri o trong store muon hien thi len cho Components phai co kieu la object
    // + Lay gia tri tham so a = this.props.tenthuoctinhthamsoa
// > thamsob =
    // + Phuong thuc da duoc dispatch de xu ly logic cho du lieu
    // + Lay gia tri tham so b = this.props.tenphuongthucxuly
export default connect(null,{removeWord})(Word);
