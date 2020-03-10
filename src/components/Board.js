import React, { Component } from 'react'
import Square from './Square'

class Board extends Component {

    renderSquare() {
        return <Square/>;
    }

    render() {

        const status = "Next Player: X"

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                </div>
                <div className="board-row">
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                </div>
                <div className="board-row">
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                </div>
            </div>
        )
    }
}
export default Board