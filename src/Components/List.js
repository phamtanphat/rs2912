import React, { Component } from 'react'
import Word from './Word';
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
      shouldShowForm : false,
      filterMode : 'Show_All'
    };
    this.toggleForm = this.toggleForm.bind(this);
    this.addWord = this.addWord.bind(this);
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
  toggleForm(){
    this.setState({shouldShowForm : !this.state.shouldShowForm })
  }
  addWord(){
    const { txtEn , txtVn  } = this.state;
    const word = {
        id : Math.random() ,
        en : txtEn,
        vn : txtVn,
        isMemorized : false
    }
    const words = this.state.words.concat(word);
    this.setState({words , txtEn : '' , txtVn : '' , shouldShowForm : false});
                  
  }
  getForm(){
    const { shouldShowForm , txtEn , txtVn  } = this.state;
    if(!shouldShowForm) return (
      <button 
        className="btn btn-success"
        style={{width : 200 ,margin : 10}}
        onClick={this.toggleForm}
      >
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
                  className="btn btn-success"
                  onClick={this.addWord}>
                  Add word
              </button>
              <button
                  className="btn btn-danger"
                  onClick={this.toggleForm}
              >
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
        <br/>
        <select 
          className="word"
          value={this.state.filterMode}
          onChange={evt => this.setState({filterMode : evt.target.value})}>
          <option value="Show_All">Show All</option>
          <option value="Show_Memorized">Show Memoried</option>
          <option value="Show_Forgot">Show Forgot</option>
        </select>
      
        {words.filter(w => {
          if(this.state.filterMode === 'Show_Forgot' && w.isMemorized) return false;
          if(this.state.filterMode === 'Show_Memorized' && !w.isMemorized) return false;
          return true;
        }).map(word => <Word key={word.id} word={word}/>)}
      </div>
    )
  }
}
