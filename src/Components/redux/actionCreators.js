import axios from 'axios';
export function toggleForm(){
    return {type : 'TOGGLE_FORM'}
}
export function setFilterMode(filterMode){
    return { type : 'SET_FILTER_MODE' , filterMode}
}


export function getAllWords(){
    return function(dispatch){
        const URL = "http://localhost:4000/word";
        axios.get(URL)
        .then(response => dispatch({type : 'SET_WORDS' , words : response.data.words}));
    }
}
export function removeWord(_id){
    return function(dispatch){
        const URL = "http://localhost:4000/word/" +  _id;
        axios.delete(URL)
        .then(() => dispatch({type : 'REMOVE_WORD' , _id}));
    }
}
export function addWord(en , vn){
    return function(dispatch){
        const URL = "http://localhost:4000/word/"
        axios.post(URL , { en,vn })
        .then(res => {
            const { success , word , message} = res.data;
            if(!success) return alert(message);
            dispatch({type : 'ADD_WORD' , word});           
        });
        
    }
}
export function toggleWord(_id , isMemorized){
    return function(dispatch){
        const URL = "http://localhost:4000/word/" +  _id;
        axios.put(URL , {isMemorized})
        .then(res => dispatch({type : 'TOGGLE_WORD' , _id}));
    }
}