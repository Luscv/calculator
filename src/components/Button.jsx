import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight
} from 'react-native'

const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888'
    },
    operationButton: {
        color: '#fff',
        backgroundColor: '#fa8231'
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 2
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3
    }
})

export const Button = (button) => {
    const stylesButton = [styles.button]
    if(button.double) stylesButton.push(styles.buttonDouble)
    if(button.triple) stylesButton.push(styles.buttonTriple)
    if(button.operation) stylesButton.push(styles.operationButton)
    return(
        <TouchableHighlight onPress={button.onClick}>
            <Text style={stylesButton}>{button.label}</Text>
        </TouchableHighlight>
    )
} 