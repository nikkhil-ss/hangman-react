import React, { Component } from 'react'
import getRandomWords from './words'
import Header from './components/Header';
import Man from './components/Man';
import "./Hangman.css"
import Displayboard from './components/DisplayBoard';
import Input from './components/Input';


const EMPTY_SPACE = "___";
class Hangman extends Component {
  constructor(props) {
    super(props);

    this.state = {
      word: getRandomWords(),
      guessedWord: new Set(),
      wrongGuesses: 0,
      isGameover: false,
      isWinner: false
    };

    this.getInput = this.getInput.bind(this);
    this.getGuessedWord = this.getGuessedWord.bind(this);

  }
  getGuessedWord() {
    let answer = this.state.word;

    let answerArray = answer.split("").map((letter) => {
      return this.state.guessedWord.has(letter) ? letter : EMPTY_SPACE;
    });

    return answerArray;
  }

  getInput(letter) {
    console.log("clicked",letter);
    let newWrongGuesses = this.state.wrongGuesses + (this.state.word.includes(letter) ? 0 : 1);

    this.setState((state) => ({
      guessedWord: state.guessedWord.add(letter),
      wrongGuesses: newWrongGuesses,
    }));
  }

  render() {
    return (
      <div className='hangman-container'>
        <Header></Header>
        <Man></Man>
        <Displayboard word={this.getGuessedWord()}></Displayboard>
        <Input getInput={this.getInput}></Input>

      </div>
    )
  }
};
export default Hangman;
