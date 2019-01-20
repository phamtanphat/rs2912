import React, { Component } from 'react'
import Word from './Word';
import Form from './Form';
import Filter from './Filter';
import {connect} from 'react-redux';


class List extends Component {
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
            key={word.id} 
            word={word}/>)}
      </div>
    )
  }
}

const mapStateToProps = function(state){
   return {words : state.words , filterMode : state.filterMode}
}

export default connect(mapStateToProps)(List);
