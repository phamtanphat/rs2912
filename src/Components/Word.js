import React, { Component } from 'react';

export default class Word extends Component {
    render() {
        const {word , onRemoveWord , onToggleWord} = this.props;
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
                        onClick={() => onToggleWord(word.id)}>
                        {word.isMemorized ? 'Forgot' : 'Memorized'}
                    </button>
                    <button
                        className="btn btn-warning"
                        onClick={() => onRemoveWord(word.id)}>
                        Remove
                    </button>
                </div>
            </div>
        );
    }
}
