// import React, { Component } from 'react'
// import {connect} from 'react-redux';

// class Form extends Component {
//     constructor(props){
//         super(props);
//         this.state = {txtEn : '' , txtVn : ''}
//     }
//     render() {
//         if(!this.props.shouldShowForm) return(
//             <button 
//               className="btn btn-success"
//               style={{width : 200 , margin : 10}}
//               onClick={this.props.ontoggleForm}>
//                     +
//             </button>
//          )
//          return(
//           <div className="form-group word-from" >
//               <input
//                   placeholder="English"
//                   className="form-control"
//                   value={this.state.txtEn}
//                   onChange={evt => this.setState({txtEn : evt.target.value})}/>
//               <br />
//               <input
//                   placeholder="Vietnamese"
//                   className="form-control"
//                   value={this.state.txtVn}
//                   onChange={evt => this.setState({txtVn : evt.target.value})}/>
//               <br />
//               <div className="btn-container">
//                   <button 
//                       className="btn btn-success"
//                       onClick={() =>{
//                           const { txtVn , txtEn} = this.state;
//                           const {onaddWord} = this.props;
//                           const newWord = {
//                               id : Math.random() + "",
//                               en : txtEn,
//                               vn : txtVn,
//                               isMemorized : false
//                           }
//                           onaddWord(newWord);
//                           this.setState({txtEn : '' , txtVn : ''})
//                       }}>
//                       Add word
//                   </button>
//                   <button
//                       className="btn btn-danger"
//                       onClick={this.props.ontoggleForm}>
//                       Cancel
//                   </button>
//               </div>
//           </div> 
//          )
//     }
// }


import React, { Component } from 'react'
import {connect} from 'react-redux';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {txtEn : '' , txtVn : ''}
        this.addWord = this.addWord.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
    }
    addWord(){
        const { txtVn , txtEn} = this.state;
        const newWord = {
            id : Math.random() + "",
            en : txtEn,
            vn : txtVn,
            isMemorized : false
        }
        this.props.dispatch({type : 'ADD_WORD' , word : newWord});
        this.setState({txtEn : '' , txtVn : ''});
    }
    toggleForm(){
        this.props.dispatch({type : 'TOGGLE_FORM'})
    }
    render() {
        if(!this.props.shouldShowForm) return(
            <button 
              className="btn btn-success"
              style={{width : 200 , margin : 10}}
              onClick={this.toggleForm}>
                    +
            </button>
         )
         return(
          <div className="form-group word-from" >
              <input
                  placeholder="English"
                  className="form-control"
                  value={this.state.txtEn}
                  onChange={evt => this.setState({txtEn : evt.target.value})}/>
              <br />
              <input
                  placeholder="Vietnamese"
                  className="form-control"
                  value={this.state.txtVn}
                  onChange={evt => this.setState({txtVn : evt.target.value})}/>
              <br />
              <div className="btn-container">
                  <button 
                      className="btn btn-success"
                      onClick={this.addWord}>
                      Add word
                  </button>
                  <button
                      className="btn btn-danger"
                      onClick={this.toggleForm}>
                      Cancel
                  </button>
              </div>
          </div> 
         )
    }
}

const mapStateToProps = state => ({shouldShowForm : state.shouldShowForm});
export default connect(mapStateToProps)(Form);