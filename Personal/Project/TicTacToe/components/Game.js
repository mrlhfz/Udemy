import { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Board from "./Board";

/**
 * Thought process:
 * How does one game ends? win/lose/draw
 * What is win con? 3 in sequence
 * What else? reset button
 * How do you play? turn base
 * When do you check for result? all cell filled(later update for no possible win)
 */

//WINCON
const WINNING_LINE = [
    //row wins
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    //col wins
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    //diag wins
    [0, 4, 8],
    [2, 4, 6]
];

//check board for winner
function checkWinner(board) {
    for (const [a, b, c] of WINNING_LINE) {
        if (board[a] && board [a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    if (board.every((cell) => cell !== null)) {
        return 'Draw';
    }
    return null;
}

function getWinningLine(board) {
    for (const line of WINNING_LINE) {
        const [a, b, c] = line;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return line;
        }
    }
}

function Game() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);
    const [gameCount, setGameCount] = useState(0);
    const [scores, setScores] = useState({ X: 0, O: 0 });

    const winner = checkWinner(board);
    const winningLine = getWinningLine(board);
    const currentPlayer = isXTurn ? 'X' : 'O';

    function handlePress(index) {
        if (board[index] || winner) return; // ignore if cell taken or game over

        const newBoard = [...board];
        newBoard[index] = currentPlayer;
        setBoard(newBoard);

        const newWinner = checkWinner(newBoard);
        if (newWinner && newWinner !== 'Draw') {
            //update score
            setScores((prev) => ({...prev, [newWinner]: prev[newWinner] + 1}));
        }

        setIsXTurn((prev) => !prev);
    } 

    function resetGame() {
        const nextGameCount = gameCount + 1;
        setGameCount(nextGameCount);
        setBoard(Array(9).fill(null));
        setIsXTurn(nextGameCount % 2 === 0);
    }

    function getStatusText() {
        if (winner === 'Draw') return "It's a Draw!";
        if (winner) return `Player ${winner} Wins!`;
        return `Player ${currentPlayer}'s turn.`
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Tic-Tac-Toe</Text>

            <View style={styles.scoreboard}>
                <View style={[styles.scoreCard, isXTurn && !winner && styles.activeCard]}>
                    <Text style={[styles.scorePlayer, styles.xColor]}>X</Text>
                    <Text style={styles.scoreValue}>{scores.X}</Text>
                </View>
                <View style={styles.scoreDivider} />
                <View style={[styles.scoreCard, !isXTurn && !winner && styles.activeCard]}>
                    <Text style={[styles.scorePlayer, styles.oColor]}>O</Text>
                    <Text style={styles.scoreValue}>{scores.O}</Text>
                </View>
            </View>

            <Text style={[styles.status, winner && styles.statusWinner]}>
                {getStatusText()}
            </Text>

            <Board 
                board={board}
                onPress={handlePress}
                winningLine={winningLine}
            />

            <TouchableOpacity style={styles.resetButton} onPress={resetGame}>
                <Text style={styles.resetText}>
                    {winner ? 'Play Again' : 'Reset'}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default Game;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '900',
    color: '#ffffff',
    letterSpacing: 8,
  },

  // Scoreboard
  scoreboard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a2e',
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 32,
    gap: 24,
    borderWidth: 1,
    borderColor: '#2a2a4a',
  },
  scoreCard: {
    alignItems: 'center',
    gap: 4,
    opacity: 0.5,
  },
  activeCard: {
    opacity: 1,
  },
  scorePlayer: {
    fontSize: 22,
    fontWeight: '800',
    letterSpacing: 2,
  },
  scoreValue: {
    fontSize: 28,
    fontWeight: '900',
    color: '#ffffff',
  },
  scoreDivider: {
    width: 1,
    height: 40,
    backgroundColor: '#bebec9',
  },
  xColor: {
    color: '#e94560',
    fontWeight: 900,
  },
  oColor: {
    color: '#1b5aa8',
    fontWeight: 900,
  },

  // Status
  status: {
    fontSize: 18,
    color: '#8888aa',
    fontWeight: '600',
    letterSpacing: 1,
  },
  statusWinner: {
    color: '#ffd700',
    fontSize: 22,
  },

  // Reset button
  resetButton: {
    marginTop: 8,
    backgroundColor: '#1a1a2e',
    paddingVertical: 14,
    paddingHorizontal: 48,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#2a2a4a',
  },
  resetText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 2,
  },
});
