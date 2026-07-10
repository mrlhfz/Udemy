import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
    return (
        <View style={styles.textContainer}>
            <Pressable 
                android_ripple={{color: '#dddddd'}} 
                style={({pressed}) => pressed && styles.pressedItem}
                onPress={props.onDeleteGoal.bind(this, props.id)}>
                <Text style={styles.text}>{props.text}</Text>
            </Pressable>
        </View>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    textContainer: {
        margin: 8,
        backgroundColor: '#4d7949ff',
        borderRadius: 6,
        overflow: 'hidden',
    },
    text: {
        color: 'white',
        fontSize: 16,
        padding: 10,
    },
    pressedItem: {
        opacity: 0.5,
    }
});