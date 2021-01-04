import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';

class Game extends React.Component {
    // 1.1 khởi tạo bàn chơi 
    // 1.2 Vẽ bàn chơi 
    // 1.3.1 Kiểm tra xem trò chơi đã kết thúc hay chưa
    // 1.3.2 Nếu đã kết thúc thì trả về người chiến thắng và kết thúc game.
    // 1.3.3 Chọn nước đi bât kỳ trên bàn cờ.
    // 1.3.4 Nếu nước đi đã tồn tại thì không làm gì cả => Quay lại 1.3.3
    // 
    constructor(props) {
        super(props);
        this.state = {
            history: [{ squares: Array(9).fill(null) }],
            status_win: null,
            turn_x: true
        };
    }

   
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
            </div>
        )
    }
}

//ReactDOM.render(<Game />, document, getElementById("root"));
export default Game;
