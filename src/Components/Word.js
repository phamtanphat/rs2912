import React, { Component } from 'react';

export default class Word extends Component {
    
    render() {
        const word = this.props.word;
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
                        className={word.isMemorized ? 'btn btn-success' : 'btn btn-danger'}>
                        {word.isMemorized ? 'Forgot' : 'Memorized'}
                    </button>
                    <button
                        className="btn btn-warning">
                        Remove
                    </button>
                </div>
            </div>
        );
    }
}
