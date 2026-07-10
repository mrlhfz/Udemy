import { View, Text, Pressable, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

function PrimaryButton({children, uponPress}) { //skips accessing children thru props, object destructuring
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable 
                style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed] 
                : styles.buttonInnerContainer} //ios styling behavior to mimic ripple
                onPress={uponPress} 
                android_ripple={{color: Colors.primary600}}
            >
            <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
        
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2
    },
    buttonText: { // cant style text from button container, no inheritance
        color: 'white',
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75,

    }
})