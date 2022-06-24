import React, { Component } from 'react'

export default class Winner extends Component {
  render() {
    return (
      <div className="winner">
        <h1>You Won</h1>
        <button onClick={this.props.resetGame}>Play Again</button>
      </div>
    )
  }
}
