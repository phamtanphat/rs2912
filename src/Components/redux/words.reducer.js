const words = [
    { id: 'a1', en: "One", vn: "Mot", isMemorized: true },
    { id: 'a2', en: "Two", vn: "Hai", isMemorized: false },
    { id: 'a3', en: "Three", vn: "Ba", isMemorized: false },
    { id: 'a4', en: "Four", vn: "Bon", isMemorized: true },
]

export function wordReducer(state = words, action) {
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