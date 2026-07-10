import { TouchableOpacity, StyleSheet, Text, useWindowDimensions } from 'react-native';

/**
 * Thought process:
 * make a Square
 * text inside Square holds {value}
 * forward {onPress} for logic purpose
 * allow style to be overwritten 
 *
 */

function Square({ value, onPress, isWinningCell, style, cellSize }) {
    return (
        <TouchableOpacity //replace view, built in with press animation
            style={[styles.cell(cellSize), style, isWinningCell && styles.winningCell]}
            onPress={onPress}
            activeOpacity={0.7} 
        >
            <Text style={[
                styles.symbol,
                value === 'X' && styles.xSymbol,
                value === 'O' && styles.oSymbol,
                isWinningCell && styles.winningSymbol
            ]}>
                {value}
            </Text>
        </TouchableOpacity>
    );
}

export default Square;


const styles = {
  cell: (size) => ({
    width: size,
    height: size,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#2a2a4a',
    backgroundColor: '#0f0f1a',
  }),
  ...StyleSheet.create({
    winningCell: { backgroundColor: '#1a1a2e' },
    symbol: { fontSize: 48, fontWeight: '900' },
    xSymbol: { color: '#e94560' },
    oSymbol: { color: '#4fc3f7' },
    winningSymbol: {
      textShadowColor: '#ffd700',
      textShadowOffset: { width: 0, height: 0 },
      textShadowRadius: 12,
    },
  }),
};