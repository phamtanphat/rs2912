import React, { Component } from 'react'
// import Word from './Word';
const words = [
  { id: 'a1', en: "One", vn: "Mot", isMemorized: true },
  { id: 'a2', en: "Two", vn: "Hai", isMemorized: false },
  { id: 'a3', en: "Three", vn: "Ba", isMemorized: false },
  { id: 'a4', en: "Four", vn: "Bon", isMemorized: true },
]

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = { words: words };
  }
  getWorditem(word) {
    return (
      <div className="word" key={word.id}>
        <div className="word-container">
          <h3 className="text-success">{word.en}</h3>
          <h3 className="text-danger">
            {word.isMemorized ? '----' : word.vn}
          </h3>
        </div>
        <div className="btn-container">
          <button
            className={word.isMemorized ? 'btn btn-danger' : 'btn btn-success'}>
            {word.isMemorized ? 'Forgot' : 'Memoried'}
          </button>
          <button
            className="btn btn-warning"
            onClick={() => {
              const words = this.state.words.filter(w => w.id !== word.id);
              this.setState({ words });
            }}>
            Remove
          </button>
        </div>
      </div>
    )
  }
  render() {
    const { words } = this.state;
    return (
      <div>
        {words.map(word => this.getWorditem(word))}
      </div>
    )
  }
}
