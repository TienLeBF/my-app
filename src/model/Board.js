import React from 'react'
import Square from './Square'

class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            square: this.props.current,
            turn_x: this.props.turn_x
        }
        this.renderSquare.bind(this);
        this.handleClick.bind(this);
    }
    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }

   
}

export default Board;
