import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function InstructionText({children, style}) { //style is props
    return <Text style={[styles.instructionText, style]}>{children}</Text> 
    //style can be defined as an array
    //the right side can overwrite the left
}

export default InstructionText;

const styles = StyleSheet.create({
    instructionText: {
        fontFamily: 'open-sans',
        color: Colors.accent500,
        fontSize: 24
    }
});