import React, { Component } from 'react'
import {StyleSheet, Text, View, TouchableOpacity } from 'react-native'

class AppListView extends Component {
    state = {
        names: [
            {
                id: 0,
                name: "blue shark"
            },
            {
                id: 1,
                name: "white spider"
            },
            {
                id: 2,
                name: "lion king"
            },
            {
                id: 3,
                name: "victory july"
            },
        ]
    };

    alertItemName = (item) => {
        alert("This is " + item.name + "!");
    };

    render() {
        return (
            <View>
                {
                    this.state.names.map((item, index) => (
                        <TouchableOpacity
                            key = {item.id}
                            style = {styles.container}
                            onPress = {() => this.alertItemName(item)}
                        >
                            <Text style = {styles.text}>{item.name}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        )
    }
}
export default AppListView

const styles = StyleSheet.create ({
    container: {
        padding: 10,
        marginTop: 3,
        backgroundColor: '#d9f9b1',
        alignItems: 'center',
    },
    text: {
        color: '#4f603c'
    }
})