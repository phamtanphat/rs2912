import React, { Component } from 'react';
// import Word from './Components/Word'
import './App.css';
// import Loop from './Components/Loop'
import List from './Components/List';
// import Box from './Components/Box';
// import Form from './Components/Form';
// import Parent from './Components/Parent';
import { createStore , combineReducers} from 'redux';
import { Provider } from 'react-redux';

const words = [
  { id: 'a1', en: "One", vn: "Mot", isMemorized: true },
  { id: 'a2', en: "Two", vn: "Hai", isMemorized: false },
  { id: 'a3', en: "Three", vn: "Ba", isMemorized: false },
  { id: 'a4', en: "Four", vn: "Bon", isMemorized: true },
]

function wordReducer(state = words, action) {
  if (action.type === 'REMOVE_WORD') {
    const words = state.filter(w => w.id !== action.id)
    return words;
  }
  if (action.type === 'ADD_WORD') {
    const words = state.concat(action.word);
    return words;
  }
  if (action.type === 'TOGGLE_WORD') {
    const words = state.map(w => {
      if (action.id === w.id) return { ...w, isMemorized: !w.isMemorized }
      return w;
    })
    return words;
  }
  return state;
}
function shouldShowFormReducer(state = false, action) {
  if (action.type === 'TOGGLE_FORM') return !state;
  if (action.type === 'ADD_WORD') return false;
  return state;
}
function filterModeReducer(state = false, action) {
  if (action.type === 'SET_FILTER_MODE') return action.filterMode
  return state;
}
const reducer = combineReducers({
    words : wordReducer,
    shouldShowForm : shouldShowFormReducer,
    filterMode : filterModeReducer
})
const store = createStore(reducer);

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
