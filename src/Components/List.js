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
    this.state = { words,
      txtEn : '',
      txtVn : '',
      shouldShowForm : false
    };
  }
  removeWord(id){
    const words = this.state.words.filter(w => w.id !== id);
    this.setState({ words });
  }
  toggleWord(id){
    const words = this.state.words.map(w => {
      if(w.id !== id) return w;
      return {...w , isMemorized : !w.isMemorized} 
    });
    this.setState({words});
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
            className={word.isMemorized ? 'btn btn-danger' : 'btn btn-success'}
            onClick={() => this.toggleWord(word.id)}>
            {word.isMemorized ? 'Forgot' : 'Memoried'}
          </button>
          <button
            className="btn btn-warning"
            onClick={() => this.removeWord(word.id)}>
            Remove
          </button>
        </div>
      </div>
    )
  }
  getForm(){
    const { shouldShowForm , txtEn , txtVn } = this.state;
    if(!shouldShowForm) return (
      <button 
        className="btn btn-success"
        style={{width : 200 ,margin : 10}}>
                +
      </button>
    );
    return (
      <div className="form-group word-from" >
          <input
              placeholder="English"
              className="form-control"
              value={txtEn}
              onChange={evt => this.setState({txtEn : evt.target.value})}/>
          <br />
          <input
              placeholder="Vietnamese"
              className="form-control"
              value={txtVn}
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
      </div>);
  }
  render() {
    const { words } = this.state;
    return (
      <div>
        {this.getForm()}
        {words.map(word => this.getWorditem(word))}
      </div>
    )
  }
}
