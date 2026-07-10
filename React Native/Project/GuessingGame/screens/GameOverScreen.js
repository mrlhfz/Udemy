import { Text, View, Image, StyleSheet, ScrollView, useWindowDimensions } from "react-native";

import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
    const { width, height } = useWindowDimensions();

    let imageSize = 300;

    if (width < 380) {
        imageSize = 150;
    }

    if (height < 400) {
        imageSize = 80;
    }

    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2
    }

    return (
        <ScrollView style={styles.screen}>
            <View style={styles.rootContainer}>
                <Title>GAME OVER!!!</Title>
                <View style={[styles.imgContainer, imageStyle]}>
                    <Image 
                        source={require('../assets/images/success.png')} 
                        style={styles.img}
                    />
                </View>
                <Text style={styles.summaryText}>
                    Your phone needed <Text style={styles.highlightText}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlightText}>{userNumber}</Text>.
                </Text>
                <PrimaryButton uponPress={onStartNewGame}>Rematch?</PrimaryButton>
            </View>
        </ScrollView>
        
    ) 
}

export default GameOverScreen;

// const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgContainer: {
        // borderRadius: deviceWidth < 380 ? 75 : 150,
        // width: deviceWidth < 380 ? 150 : 300,
        // height: deviceWidth < 380 ? 150 : 300,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36
    },
    img: {
        width: '100%', 
        height: '100%'
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 16
    },
    highlightText: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500
    }
})