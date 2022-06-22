import React, { Component } from 'react'
import KeyboardButton from './KeyboardButton';
import "./Keyboard.css"
export default class Keyboard extends Component {
  render() {
    const getLetters=()=>{
        let result=[];
        for(let i=65;i<65+26;i++){
            result.push(String.fromCharCode(i));
        }
        return result;
    }

    const letters=getLetters();

    const buttons=letters.map((letter)=>{
        return (
            <KeyboardButton getInput={this.props.getInput} letter={letter} key={letter.charCodeAt(0)}></KeyboardButton>
        );
    });
    return (
      <div className='keyboard-container'>
        {buttons}
      </div>
    )
  }
}
