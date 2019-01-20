import React, { Component } from 'react'
import Word from './Word';
import Form from './Form';
import Filter from './Filter';
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
      shouldShowForm : false,
      filterMode : 'Show_All'
    };
    this.onRemoveWord = this.onRemoveWord.bind(this);
    this.onToggleWord = this.onToggleWord.bind(this);
    this.onToggleForm = this.onToggleForm.bind(this);
    this.onAddWord = this.onAddWord.bind(this);
  }
  onRemoveWord(id){
    const words = this.state.words.filter(w => w.id !== id);
    this.setState({ words });
  }
  onToggleWord(id){
    const words = this.state.words.map(w => {
      if(w.id !== id) return w;
      return {...w , isMemorized : !w.isMemorized} 
    });
    this.setState({words});
  }
  onToggleForm(){
    this.setState({shouldShowForm : !this.state.shouldShowForm })
  }
  onAddWord(word){
    const words = this.state.words.concat(word);
    this.setState({words , shouldShowForm : false});
                  
  }
 
  render() {
    const { words , shouldShowForm} = this.state;
    return (
      <div>
        <Form 
          shouldShowForm={shouldShowForm}
          onToggleForm={this.onToggleForm}
          onAddWord={this.onAddWord}/>
        <br/>
        <Filter filterMode={this.state.filterMode}/>
        {words.filter(w => {
          if(this.state.filterMode === 'Show_Forgot' && w.isMemorized) return false;
          if(this.state.filterMode === 'Show_Memorized' && !w.isMemorized) return false;
          return true;
        }).map(word => 
          <Word 
            key={word.id} 
            word={word}
            onRemoveWord={this.onRemoveWord}
            onToggleWord={this.onToggleWord}/>)}
      </div>
    )
  }
}
