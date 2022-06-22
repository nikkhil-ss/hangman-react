import React, { Component } from 'react'
import "./DisplayBoard.css"
export default class DisplayBoard extends Component {
  render() {
    const word=this.props.word;

    const letters=word.map((letter,index)=>{
      return (
        <h2 key={letter+index} className="display-letter" >{letter}</h2>
      );
    })
    return (
      <div className='displayboard-container'>{letters}</div>
    )
  }
}
