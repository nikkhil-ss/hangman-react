import React, { Component } from 'react'

export default class Gameover extends Component {
  render() {
    return (
      <div>
        <h1>
            Sorry! You Lose
        </h1>
        <h1>
            The correct word is {this.props.word}
        </h1>
        <button onClick={this.props.resetGame}> Reset</button>
      </div>
    )
  }
}
