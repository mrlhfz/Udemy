import { useState, useEffect } from "react";
import { View, StyleSheet, Alert, FlatList, useWindowDimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import Colors from "../constants/colors";
import InstructionText from "../components/ui/InstructionText";
import GuessLogItem from "../components/game/GuessLogItem";

function generateRandomBetween(min, max, exclude) {
    const randoNum = Math.floor(Math.random() * (max - min)) + min;

    if (randoNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return randoNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({userNumber, onGameOver}) {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRound, setGuessRound] = useState([initialGuess]);
    const { width, height } = useWindowDimensions();

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(guessRound.length);
        }
    }, [currentGuess, userNumber, onGameOver]);

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []);

    function nextGuessHandler(direction) { //direction, 'less' / 'more'
        if ((direction === 'lower' && currentGuess < userNumber) || 
        (direction === 'heehee' && currentGuess > userNumber)) {
            Alert.alert('Why the fuck you lyin?', 'That ain\'t it', [{text: 'Sorry!', style: 'cancel'}]);
            return;
        }

        if (direction === 'lower') {
            maxBoundary = currentGuess;   
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRandoNum = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRandoNum);
        setGuessRound(prevGuessRound => [newRandoNum, ...prevGuessRound])
    }

    const guessRoundsListLength = guessRound.length;

    let content = (
        <>
            <NumberContainer>{currentGuess}</NumberContainer>            
            <Card>
                <InstructionText style={styles.instructionText}>Higher or Lower?</InstructionText>
                <View style={styles.hintButtonsContainer}>
                    <View style={styles.hintButtonContainer}>
                        <PrimaryButton uponPress={nextGuessHandler.bind(this, 'lower')}>
                            <Ionicons name='remove' size={24} color='white' />
                        </PrimaryButton>
                    </View>
                    <View style={styles.hintButtonContainer}>
                        <PrimaryButton uponPress={nextGuessHandler.bind(this, 'heehee')}>
                            <Ionicons name='add' size={24} color='white' />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
        </>
    );

    if (width > 500) {
        content = (
            <>
                <View style={styles.hintButtonContainerWide}>
                        <View style={styles.hintButtonContainer}>
                            <PrimaryButton uponPress={nextGuessHandler.bind(this, 'lower')}>
                                <Ionicons name='remove' size={24} color='white' />
                            </PrimaryButton>
                        </View>
                        <NumberContainer>{currentGuess}</NumberContainer> 
                        <View style={styles.hintButtonContainer}>
                            <PrimaryButton uponPress={nextGuessHandler.bind(this, 'heehee')}>
                                <Ionicons name='add' size={24} color='white' />
                            </PrimaryButton>
                        </View>
                </View>
            </>
        );
    }

    return (
        <View style={styles.screen}>
            <Title>Computer's Guess</Title>
            {content}
            <View style={styles.listContainer}>
                {/* {guessRound.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)} */}
                <FlatList 
                    data={guessRound} 
                    renderItem={(itemData) => {
                        return (
                            <GuessLogItem 
                                roundNumber={guessRoundsListLength - itemData.index} 
                                guess={itemData.item}
                            />
                        )
                    }}
                    keyExtractor={(item) => item.toString()}
                />
            </View>
        </View>
    )
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1, 
        padding: 12,
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.accent500,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Colors.accent500,
        padding: 12
    },
    instructionText: {
        marginBottom: 20,
    },
    hintButtonsContainer: {
        flexDirection: 'row'
    },
    hintButtonContainer: {
        flex: 1
    },
    hintButtonContainerWide: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    listContainer: {
        flex: 1,
        padding: 16
    }
})