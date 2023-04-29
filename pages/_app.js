import React, { PureComponent } from 'react'
import TicTacToe from '../components/games/tictac'
import GooglePage from "../components/google/googlepage"
import '../public/styles.css';

export class App extends PureComponent {
  render() {
    return (
      // <TicTacToe />
      <GooglePage />
    )
  }
}

export default App