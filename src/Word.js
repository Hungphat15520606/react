import React, { Component } from 'react';

export class Word extends Component {
  render() {
    return (
      <div>
          <h3 style={{color : 'green' ,margin : 10}}>{this.props.en}</h3>
          <h3>{this.props.vn}</h3>
      </div>
    );
  }
}

