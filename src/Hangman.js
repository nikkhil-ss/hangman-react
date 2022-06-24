import React, { Component } from 'react'
import getRandomWords from './words'
import Header from './components/Header';
import Man from './components/Man';
import "./Hangman.css"
import Displayboard from './components/DisplayBoard';
import Input from './components/Input';
import Winner from './components/Winner';
import Gameover from './components/Gameover';


const EMPTY_SPACE = "___";
const MAX_WRONG = 6;
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
    this.resetGame=this.resetGame.bind(this);

  }
  getGuessedWord() {
    let answer = this.state.word;

    let answerArray = answer.split("").map((letter) => {
      return this.state.guessedWord.has(letter) ? letter : EMPTY_SPACE;
    });

    return answerArray;
  }

  getInput(letter) {
    console.log("clicked", letter);
    let newWrongGuesses = this.state.wrongGuesses + (this.state.word.includes(letter) ? 0 : 1);

    this.setState((state) => ({
      guessedWord: state.guessedWord.add(letter),
      wrongGuesses: newWrongGuesses,
      isWinner: this.getGuessedWord().join("") === state.word,
      isGameover: newWrongGuesses > MAX_WRONG - 1 ? true : false,
    }));
  }

  resetGame(){
    this.setState({
      word: getRandomWords(),
      wrongGuesses: 0,
      isGameover: false,
      isWinner: false,


  })

    
  }

  render() {

    const game = (
      <div className='game'>
        <Displayboard word={this.getGuessedWord()} ></Displayboard>

        <Input getInput={this.getInput} ></Input>

      </div>
    )

    const winnerOrLoser = this.state.isWinner ? (<Winner resetGame={this.resetGame} ></Winner>) : this.state.isGameover ? (<Gameover resetGame={this.resetGame} word={this.state.word}></Gameover>) : game ;

    return (
      <div className='hangman-container'>
        <Header attempts={MAX_WRONG-this.state.wrongGuesses} ></Header>
        <Man wrongGuesses={this.state.wrongGuesses}></Man>
        {winnerOrLoser}
        {/* <Displayboard word={this.getGuessedWord()}></Displayboard>
        <Input getInput={this.getInput}></Input> */}

      </div>
    )
  }
};
export default Hangman;
