import React, { Component } from 'react'
import Word from './Word';
import Form from './Form';
import Filter from './Filter';
import {connect} from 'react-redux';
import * as actionCreators from './redux/actionCreators';

class List extends Component {
  componentWillMount(){
    this.props.getAllWords();
  }
  render() {
    const { words , filterMode} = this.props;
    return (
      <div>
        <Form />
        <br/>
        <Filter />
        {words.filter(w => {
          if(filterMode === 'Show_Forgot' && w.isMemorized) return false;
          if(filterMode === 'Show_Memorized' && !w.isMemorized) return false;
          return true;
        }).map(word => 
          <Word 
            key={word._id} 
            word={word}/>)}
      </div>
    )
  }
}

const mapStateToProps = function(state){
   return {words : state.words , filterMode : state.filterMode}
}

export default connect(mapStateToProps,actionCreators)(List);