// import React, { Component } from 'react';

// export default class Word extends Component {
//   render() {
//     const {word , onremoveWord , ontoggleWord } = this.props;
//     return (
//       <div className="word" key={word.id}>
//         <div className="word-container">
//           <h3 className="text-success">{word.en}</h3>
//           <h3 className="text-danger">
//             {word.isMemorized ? '----' : word.vn}
//           </h3>
//         </div>
//       <div className="btn-container">
//           <button
//             className={word.isMemorized ? 'btn btn-success' : 'btn btn-danger'}
//             onClick={() =>  ontoggleWord(word.id)}>
//             {word.isMemorized ? 'Forgot' : 'Memorized'}
//           </button>
//           <button
//             className="btn btn-warning"
//             onClick={() => onremoveWord(word.id)}>
//             Remove
//           </button>
//         </div>
//       </div>  
//     );
//   }
// }


import React, { Component } from 'react';
import {connect} from 'react-redux';
//import {toggleWord , removeWord} from '../redux/actioncreators';
import *as actioncreators from '../redux/actioncreators'

class Word extends Component {
  render() {
    const {toggleWord , word , removeWord} = this.props;
    return (
      <div className="word" key={word.id}>
        <div className="word-container">
          <h3 className="text-success">{word.en}</h3>
          <h3 className="text-danger">
            {word.isMemorized ? '----' : word.vn}
          </h3>
        </div>
      <div className="btn-container">
          <button
            className={word.isMemorized ? 'btn btn-success' : 'btn btn-danger'}
            onClick={() => toggleWord(word.id)}>
            {word.isMemorized ? 'Forgot' : 'Memorized'}
          </button>
          <button
            className="btn btn-warning"
            onClick={() =>removeWord(word.id)}>
            Remove
          </button>
        </div>
      </div>  
    );
  }
}

export default connect(null,actioncreators)(Word);