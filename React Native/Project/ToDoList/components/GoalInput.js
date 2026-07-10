import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";  

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');
    
    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    };

    function addGoalHandler() {
        if (enteredGoalText.trim().length === 0) return; // Prevent adding empty goals
        props.onAddGoalHandler(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image source={require('../assets/images/goal.png')} style={styles.image} />
                <TextInput 
                    style={styles.textInput} 
                    placeholder="Your course goal!"
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button title="Add Goal" color="#123812ff"  onPress={addGoalHandler} /></View>
                    <View style={styles.button}><Button title="Cancel" color="rgb(1, 36, 1)" onPress={props.onCancel} /></View>
                </View>  
            </View>
        </Modal>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        padding: 16,
        backgroundColor: '#ffffff' 
    },
    textInput: {
        borderWidth: 1,
        padding: 10,
        borderColor: '#a6c98a',
        backgroundColor: '#a6c98a',
        borderRadius: 6,
        color: 'rgb(0, 0, 0)',
        width: '90%'
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16
    },
    button: {
        width: '40%',
        marginHorizontal: 8
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    }
});