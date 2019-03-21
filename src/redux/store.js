// import { createStore, combineReducers } from 'redux'


// const defaultWords = [
//   {id : 'a1' , en : 'One' , vn : 'Mot' , isMemorized : true},
//   {id : 'a2' , en : 'Two' , vn : 'Hai' , isMemorized : false},
//   {id : 'a3' , en : 'Three' , vn : 'Ba' , isMemorized : true}
// ]

// const defaultState = {
//     words : defaultWords, 
//     shouldShowForm : false, 
//     filterMode : 'Show_All'
// }

// function reducer(state =  defaultState, action ){
//     if(action.type === 'TOGGLE_WORD'){
//        const newWords = state.words.map(w =>{
//           if(w.id !== action.id) return w;
//           return {...w, isMemorized : !w.isMemorized}
//        });
//        return {...state,words : newWords}
//     }
//     if(action.type === 'REMOVE_WORD'){
//       const newWords = state.words.filter(w => w.id !== action.id);
//       return {...state,words : newWords}
//     }
//     if(action.type === 'SET_FILTER_MODE') return {...state, filterMode : action.filterMode}
//     if(action.type === 'ADD_WORD'){
//       const newWords = state.words.concat(action.word);
//       return {...state,words : newWords , shouldShowForm : false}
//     }
//     if(action.type === 'TOGGLE_FORM')return {...state , shouldShowForm : !state.shouldShowForm}
//     return state;
// };

//function wordsReducer(state= defaultWords, action){ // o day state la word nen ta chi can state.map la giong nhu state.word.map
// function wordsReducer(state = defaultWords , action){
//     if (action.type === 'TOGGLE_WORD') {
//         const newWords = state.map(w => {
//             if (w.id !== action.id) return w;
//             return { ...w, isMemorized: !w.isMemorized }
//         });
//         return newWords;
//     }
//     if (action.type === 'ADD_WORD') {
//         const newWords = state.concat(action.word);
//         return newWords;
//     }
//     if (action.type === 'REMOVE_WORD') {
//         const newWords = state.filter(w => w.id !== action.id);
//         return newWords
//     }
//     return state;
// }
// function shouldShowFormReducer(state = false , action){
//     if (action.type === 'ADD_WORD') return !state;
//     if (action.type === 'TOGGLE_FORM') return !state;
//     return state;
// }
// function filterModeReducer(state = "Show_All" , action){
//     if (action.type === 'SET_FILTER_MODE') return action.filterMode;
//     return state;
// }

// const reducer = combineReducers({
//     words : wordsReducer,
//     filterMode : filterModeReducer,
//     shouldShowForm : shouldShowFormReducer
// })
// export const store = createStore(reducer);


import { createStore , combineReducers } from 'redux'
import wordsReducer from './word.reducer';
import filterModeReducer from './filtermode.reducer';
import shouldShowFormReducer from './shoudshowform.reducer';
const reducer = combineReducers({
    words : wordsReducer,
    filterMode : filterModeReducer,
    shouldShowForm : shouldShowFormReducer
})
export const store = createStore(reducer);
 