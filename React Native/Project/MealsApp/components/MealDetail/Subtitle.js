import { View, Text, StyleSheet } from 'react-native';

function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    color: '#8d583b',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subtitleContainer: {
    color: '#8d583b',
    padding: 6,
    marginHorizontal: 24,
    marginVertical: 4,
    borderBottomColor: '#8d583b',
    borderBottomWidth: 2,
  },
});
