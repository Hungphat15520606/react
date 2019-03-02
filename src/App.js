import React, { Component } from 'react';
import {Word} from './components/Word';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Word wordInfo={{en : 'One' , vn : 'Mot'}}/>
          <Word wordInfo={{en : 'Two' , vn : 'Hai'}}/>
      </div>
      
    );
  }
}
export default App;

