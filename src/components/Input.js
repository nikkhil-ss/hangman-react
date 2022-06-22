import React, { Component } from 'react'
import Keyboard from './Keyboard'
import "./Input.css"
export default class Input extends Component {
  render() {
    return (
      <div className='input-container'>
        <Keyboard getInput={this.props.getInput}></Keyboard>

      </div>
    )
  } 
}
