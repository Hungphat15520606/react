import React, { Component } from 'react';
import Word from './Word';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Word/>
          <Word/>
      </div>
      
    );
  }
}

export default App;
