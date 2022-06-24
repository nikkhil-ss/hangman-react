import React, { Component } from 'react'
import "./Button.css"
export default class Gameover extends Component {
  render() {
    return (
      <div className='game-over'>
        <h1>
            Sorry! You Lose
        </h1>
        <h1>
            The correct word is {this.props.word}
        </h1>
        <button className='reset-button' onClick={this.props.resetGame}> Try Again!</button>
      </div>
    )
  }
}
