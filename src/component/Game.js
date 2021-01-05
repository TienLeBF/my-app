import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';

class Game extends React.Component {
    // Bản chơi hiển thị lượt chơi tiếp theo hoặc là người đã thắng cuộc.
    // Hiển thị danh sách bước đi theo thứ tự người chơi đã chơi, cho phép người chơi chọn lựa nước đi bất kỳ và đi tiếp từ nước đó.
    // Cho phép người chơi đi lại dựa vào việc lưu lại lịch sử game.

    // 1.1 khởi tạo bàn chơi 
    // 1.2 Vẽ bàn chơi 
    // 1.3.1 Kiểm tra xem trò chơi đã kết thúc hay chưa
    // 1.3.2 Nếu đã kết thúc thì trả về người chiến thắng và kết thúc game.
    // 1.3.3 Chọn nước đi bât kỳ trên bàn cờ.
    // 1.3.4 Nếu nước đi đã tồn tại thì không làm gì cả (=> chờ ngưởi chơi chọn nước khác Quay lại 1.3.3)
    // 1.3.5 Nếu bước đi hợp lệ thì đánh dấu X
    // 1.3.6 Kiểm tra xem trò chơi đã kết thúc hay chưa
    // Nếu trò chơi kết thúc thì hiển thị thông báo



    constructor(props) {
        super(props);
        this.state = {
            history: [{ squares: Array(100).fill(null) }],
            stepNumber: 0,
            turnX: true
        };
    }


    // 1.1 khởi tạo bàn chơi 
    // 1.2 Vẽ bàn chơi 
    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = this.checkWin(current.squares);

        const moves = history.map((step, stepNumber) => {
            const desc = stepNumber ? 'Di chuyen # ' + stepNumber : 'Bat dau tro choi';
            return (
                <li key={stepNumber}> <button onClick={() => this.jumTo(stepNumber)}>{desc}</button></li>
            )
        });
        let status;
        if (winner) {
            status = "Người thắng cuộc: " + winner;
        } else {
            status = "Lượt chơi tiếp theo:  " + (this.state.turnX ? 'X' : 'O');
        }
        return (
            <div className="game">
                <div className="game-board">
                    <Board squares={current.squares} onClick={(point) => { if (!this.checkWin(current.squares)) { this.choiceWay(point) } }} />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        )
    }

    jumTo(stepNumber) {
        this.setState (
            {
                stepNumber : stepNumber,
                turnX: ((stepNumber % 2) === 0)
            }
        );
    }
    // 1.3.1 Kiểm tra xem trò chơi đã kết thúc hay chưa
    checkWin(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                console.log("Người chơi " + squares[a] + " đã thắng.")
                return squares[a];
            }
        }
        return null;
    }
    // 1.3.3 Chọn nước đi bât kỳ trên bàn cờ.
    // 1.3.4 Nếu nước đi đã tồn tại thì không làm gì cả (=> chờ ngưởi chơi chọn nước khác Quay lại 1.3.3)
    // 1.3.5 Nếu bước đi hợp lệ thì đánh dấu X hoặc O, đổi lượt chơi 
    // 1.3.6 Kiểm tra xem trò chơi đã kết thúc hay chưa
    choiceWay(point) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (squares[point]) {
            console.log("Nước đi không hợp lệ")
        } else {
            squares[point] = this.state.turnX ? 'X' : 'O';
            this.setState({
                history: history.concat([
                    {
                        squares: squares
                    }
                ]),
                stepNumber: history.length,
                turnX: !this.state.turnX
            })
            if (this.checkWin(squares)) {
                return;
            }
        }
    }
}

//ReactDOM.render(<Game />, document, getElementById("root"));
export default Game;
