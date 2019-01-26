export function toggleForm(){
    return {type : 'TOGGLE_FORM'}
}
export function setFilterMode(filterMode){
    return { type : 'SET_FILTER_MODE' , filterMode}
}
export function removeWord(id){
    return {type : 'REMOVE_WORD' , id}
}
export function addWord(word){
    return {type : 'ADD_WORD', word}
}
export function toggleWord(id){
    return {type : 'TOGGLE_WORD' , id}
}