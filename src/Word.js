import React, { Component } from 'react';

export class Word extends Component {
  getButton() {
    if (this.props.wordInfo.isMemorized) {
      return <button className="btn btn-success">Forgot</button>
    } else {
      return <button className="btn btn-danger">isMemorized</button>
    }
  }
  render() {
    const { en , vn , isMemorized } = this.props.wordInfo;
    return (
      <div className="word">
          <div className="word-container">
            <h3 className="text-success">{en}</h3>
            <h3 className="text-danger">
              {isMemorized ? '----' : vn}
            </h3>
          </div>
          <div className="btn-container">
              <button
                className={isMemorized ? 'btn btn-success' : 'btn btn-danger'}>
                {isMemorized ? 'Forgot' : 'Memorized'}
              </button>
              <button
                className="btn btn-warning">
                Remove
              </button>
          </div>
      </div>
    );
  }
}

