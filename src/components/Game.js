import React, { Fragment } from 'react'
import Board from './Board'
import '../index.css'

class Game extends React.Component {
    render() {
        return (
            <Fragment>
            <header className="header">
                <h1>Tic Tac Toe</h1>
            </header>
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>[PlaceHolder]</div>
                    <ol></ol>
                </div>
             </div>
             <footer className="footer">
                 <h3>by Colin But</h3>
             </footer>
            </Fragment>
        ) 
    }
}

export default Game