// import React, { Component } from 'react'

// export default class Parent extends Component {
//   constructor(props){
//       super(props);
//       this.state = {value : 0}
//       this.onIncrease = this.onIncrease.bind(this);
//       this.onDecrease = this.onIncrease.bind(this);
//       this.onReset = this.onReset.bind(this);
//   }
//   onIncrease(){
//       this.setState({value : this.state.value + 1})
//   }
//   onDecrease(){
//     this.setState({value : this.state.value - 1})
//     }
// onReset(){
//         this.setState({value:0})
//         }


//   render() {
//     return (
//       <div>
//           <h3>Value = {this.state.value}</h3>
//           <Child onIncrease={this.onIncrease}
//           onDecrease={this.onDecrease}
//           onReset={this.onReset}/>
//       </div>
//     )
//   }
// }

// class Child extends Component{
//     render() {
//         const {onIncrease, onDecrease, onReset} = this.props;
//         return (
//         <div>
//              <button 
//                 className="btn btn-success" name="button1"
//                 onClick={onIncrease}>
//                 Increase
//             </button>
//             <button 
//                 className="btn btn-warning" name="button1"
//                 onClick={onDecrease}>
//                 Descrease
//             </button>
//             <button 
//                 className="btn btn-danger" name="button1"
//                onClick= {onReset}>
//                 Reset
//             </button>
//         </div>
//         )
//     }
// }



import React, { Component } from 'react'
import Child from './Child';
import {connect} from 'react-redux';

class Parent extends Component {   
  render() {
    return (
      <div>
          <h3>Value = {this.props.value} </h3>
          <Child />
      </div>
    )
  }
}

const mapStateToProps = state => ({value : state.value})
export default connect(mapStateToProps)(Parent)