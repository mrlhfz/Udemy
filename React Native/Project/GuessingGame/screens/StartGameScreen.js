import { useState } from 'react';
import { 
    TextInput, 
    View, 
    StyleSheet, 
    Alert, 
    useWindowDimensions,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native';

import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../constants/colors';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

function StartGameScreen({onPickNumber}) {
    const [enteredNumber, setEnteredNumber] = useState('');
    
    const { width, height } = useWindowDimensions();

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }

    function resetInputHandler() {
        setEnteredNumber('');
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid number!',
                'Number has to be in 1 to 99 range.',
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
            );
            return;
        } 

        onPickNumber(chosenNumber);
    }

    const marginTopDistance = height < 380 ? 30 : 100; //in place of Dimensions API and marginTop hardcode in styles

    return (
        <ScrollView style={styles.screen}> { /**allows content to be scrollable when keyboard is open, only on android, ios has default behavior of moving content up */ }
            <KeyboardAvoidingView style={styles.screen} behavior='position'> { /**moves content up when keyboard is open, only on ios, android has default behavior of resizing screen */ }
                <View style={[styles.rootContainer, {marginTop: marginTopDistance}]}> { /**apply as additional style */ }
                    <Title>Guessing Game</Title>
                    <Card>
                        <InstructionText>Enter a Number</InstructionText>
                        <TextInput 
                        style={styles.numberInput} 
                        maxLength={2} //restrict to 2 char
                        keyboardType='number-pad' //shows number keyboard instead of letters
                        autoCapitalize='none' //for places that dont need autocaps
                        autoCorrect={false} //for places that dont need autocorrect
                        onChangeText={numberInputHandler}
                        value={enteredNumber}
                        /> 
                        <View style={styles.buttonsContainer}>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton uponPress={resetInputHandler}>Reset</PrimaryButton>
                            </View>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton uponPress={confirmInputHandler}>Confirm</PrimaryButton>
                            </View>           
                        </View>
                    </Card>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>    
    )
}

export default StartGameScreen;

// const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    rootContainer: {
        flex: 1,
        // marginTop: deviceHeight < 380 ? 30 : 100,
        alignItems: 'center'
    },
    numberInput: {
        height: 70,
        width: 50,
        fontSize: 36,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    }
})