import React, { Component } from 'react';
import './App.css';
import List from './Components/List';
import {store} from './Components/redux/store';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        {/* <List/> */}
        {/* <Box/> */}
        {/* <Form/> */}
        <Provider store={store}>
          <List />
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
