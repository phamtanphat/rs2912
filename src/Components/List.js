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
 
  render() {
    const { words , shouldShowForm} = this.state;
    return (
      <div>
        <Form shouldShowForm={shouldShowForm}/>
        <br/>
        <Filter filterMode={this.state.filterMode}/>
        {words.filter(w => {
          if(this.state.filterMode === 'Show_Forgot' && w.isMemorized) return false;
          if(this.state.filterMode === 'Show_Memorized' && !w.isMemorized) return false;
          return true;
        }).map(word => <Word key={word.id} word={word}/>)}
      </div>
    )
  }
}
