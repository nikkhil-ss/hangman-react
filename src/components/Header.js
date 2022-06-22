import React, { Component } from 'react'
import './Header.css'
class Header extends Component {
     render() {
       return (
        <div className='header'>
        <h1>Hangman Game</h1>
        <h3>Enter a letter one by one and guess the correct word</h3>
        <h3> you have <span className="lives" >{this.props.attempts} </span>attempts left</h3>
    </div>
       )
     }
   }

export default Header;
   