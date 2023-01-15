import React, { Component } from 'react'
import {StyleSheet, TextInput, Text, View, TouchableOpacity } from 'react-native'

class AppInputs extends Component {
    state = {
        email: "",
        password: ""
    };

    handleEmail = (text) => {
        this.setState({email: text});
    }
    handlePassword = (text) => {
        this.setState({password: text});
    }
    login = () => {
        alert("email: " + this.state.email + "\npassword: " + this.state.password);
    }

    render() {
        return (
            <View style = {styles.container}>
                <TextInput
                    underlineColorAndroid = "transparent"
                    style = {styles.input}
                    placeholder = "Email"
                    placeholderTextColor = "#9a73ef"
                    autoCapitalize = "none"
                    onChangeText = {this.handleEmail}
                />
                <TextInput
                    underlineColorAndroid = "transparent"
                    style = {styles.input}
                    placeholder = "Password"
                    placeholderTextColor = "#9a73ef"
                    autoCapitalize = "none"
                    onChangeText = {this.handlePassword}
                />
                <TouchableOpacity
                    style = {styles.submitButton}
                    onPress = {this.login}
                ><Text style = {styles.submitButtonText}> Submit </Text></TouchableOpacity>
            </View>
        )
    }
}
export default AppInputs

const styles = StyleSheet.create({
    container: {
        paddingTop: 23
    },
    input: {
        margin: 15,
        height: 40,
        paddingLeft: 15,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText:{
        color: 'white'
    }
})