import { View, StyleSheet, useWindowDimensions } from 'react-native';
import Square from './Square';

/**
 * Thought process: 
 * render 3x3 grid
 * flex wrap (z flow) + index
 * use .map for board
 * inner border to make # shape 
 * use index passed to label the Square - maths % and /
 *  
 * plus: use useWindowDimensions for dynamic sizing instead of Dimensions
 */

function Board({ board, onPress, winningLine }) {
    const { width } = useWindowDimensions();
    const CELL_SIZE = width * 0.25;
    const BOARD_SIZE = CELL_SIZE * 3;

    function getCellBorderStyle(index) {
        const col = index % 3;
        const row = Math.floor(index/3);

        return {
            borderRightWidth: col < 2 ? 2 : 0, //right border for 0, 1
            borderBottomWidth: row < 2 ? 2 : 0, //bottom border for 0, 1
        }
    }

    return(
        <View style={styles.board(BOARD_SIZE)}>
            {board.map((value, index) => {
                const isWinningCell = winningLine?.includes(index);
                return (
                    <Square 
                        key={index}
                        value={value}
                        onPress={() => onPress(index)}
                        isWinningCell={isWinningCell}
                        style={getCellBorderStyle(index)} 
                        cellSize={CELL_SIZE} //pass down to square.js
                    />
                )
            })}
            
        </View>  
    );
}

export default Board;

const styles = {
    board: (boardSize) => ({
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: boardSize,
        height: boardSize
    })
}