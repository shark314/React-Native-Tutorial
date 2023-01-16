import React, { Component } from 'react'
import {StyleSheet, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, Text, View, Button, TouchableWithoutFeedback } from 'react-native'

class AppButton extends Component {
    handlePressed = () => {
        return false;
    }

    render() {
        return (
            <View>
                <Button onPress={this.handlePressed} title="Red Button!" color="red" />
                <View style={styles.container}>
                    <TouchableOpacity>
                        <Text style = {styles.text}>
                            Button
                        </Text>
                    </TouchableOpacity>
                    <TouchableHighlight>
                        <Text style = {styles.text}>
                            Button
                        </Text>
                    </TouchableHighlight>
                    <TouchableNativeFeedback>
                        <Text style = {styles.text}>
                            Button
                        </Text>
                    </TouchableNativeFeedback>
                    <TouchableWithoutFeedback>
                        <Text style = {styles.text}>
                            Button
                        </Text>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        )
    }
}

export default AppButton

const styles = StyleSheet.create ({
    container: {
        marginTop: 30,
        alignItems: 'center',
    },
    text: {
        borderWidth: 1,
        padding: 25,
        borderColor: 'black',
        backgroundColor: 'red'
    }
})