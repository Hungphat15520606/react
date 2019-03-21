// import React, { Component } from 'react';
// import List from './components/List';
// //import Form from './components/Form';
// import './App.css';
// // import Loop from './components/Loop';
// // import Box from './components/Box';
// //import Filter from './components/Filter'
// //import Parent from './components/Parent'
// //import Word from'./components/Word'

// class App extends Component {
//   render() {
//     return (
//       <div className="App">      
//       <List/>       
//       {/* <Box/> */}
//           {/* <Parent/> */}         
//       </div>    
//     );  
//   }
// }
// export default App;



import React, { Component } from 'react';
import List from './components/List';
import './App.css';
// import Filter from './components/Filter';
// import Form from './components/Form';
// import Loop from './components/Loop';
// import Box from './components/Box';
// import Parent from './components/Parent';
//import { createStore } from 'redux'
import {store} from './redux/store'

import {Provider} from 'react-redux';

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

// const store = createStore((state =  defaultState, action ) =>{
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
// });


class App extends Component {
  render() {
    return (
      <div className="App">
          <Provider store={store}>
            <List/>
          </Provider>      
      </div>
      
    );
  }
}
export default App;