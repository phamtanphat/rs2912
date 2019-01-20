import React, { Component } from 'react';
// import Word from './Components/Word'
import './App.css';
// import Loop from './Components/Loop'
// import List from './Components/List';
// import Box from './Components/Box';
// import Form from './Components/Form';
import Parent from './Components/Parent';
import { createStore } from 'redux';
import {Provider} from 'react-redux';

const store = createStore((state = {count : 10} , action) =>{
    if(action.type === 'INCREASE') return {count : state.count + 1}
    if(action.type === 'DECREASE') return {count : state.count - 1}
    if(action.type === 'RESET') return {count : 0}
    return state;
});

class App extends Component {
  render() {
    return (
      <div>
          {/* <List/> */}
          {/* <Box/> */}
          {/* <Form/> */}
          <Provider store={store}>
              <Parent/>
          </Provider>
      </div>
    );
  }
}

export default App;


// Auto Close Tag formulahendry.auto-close-tag
// Auto Rename Tag
// npm Intellisense
// path Intellisense
// es7 react/redux
// vscode-icons

//Redux
// Dinh nghia ra store
// Ket noi store voi components
// Hien thi store ra components
// Thay doi store tu components
