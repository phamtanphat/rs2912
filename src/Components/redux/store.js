import { createStore, combineReducers } from 'redux';

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
    words: wordReducer,
    shouldShowForm: shouldShowFormReducer,
    filterMode: filterModeReducer
})
export const store = createStore(reducer);
