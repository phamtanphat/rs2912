import React, { Component } from 'react';

export default class Word extends Component {
    getButton() {
        const { isMemorized } = this.props.wordinfo;
        if (isMemorized) {
            return (<button className="btn btn-success">Forgot</button>);
        }
        return <button className="btn btn-danger">Memorized</button>
    }

    render() {
        const { en, vn, isMemorized } = this.props.wordinfo;
        const color = isMemorized ? "green" : "red";
        return (
            <div style={
                {
                    backgroundColor: "#D5D6D4",
                    width: 200,
                    margin: 10,
                    borderRadius: 10
                }}>
                <h3 style={{ color, margin: '10px' }}>
                    {en}
                </h3>
                <p>{vn}</p>
                {this.getButton()}
            </div>
        );
    }
}