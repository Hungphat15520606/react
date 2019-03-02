import React, { Component } from 'react';
import List from './components/List';
import './App.css';
// import Loop from './components/Loop';
// import Box from './components/Box';

class App extends Component {
  render() {
    return (
      <div className="App">
          <List/>
          {/* <Box/> */}
      </div>
      
    );
  }
}
export default App;

