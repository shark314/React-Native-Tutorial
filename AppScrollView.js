import React, { Component } from 'react'
import {StyleSheet, ScrollView, Text, View, TouchableOpacity } from 'react-native'

class AppScrollView extends Component {
    state = {
        names: [
            {id: 0, name: "blue shark"},
            {id: 1, name: "white spider"},
            {id: 2, name: "lion king"},
            {id: 3, name: "victory july"},
            {id: 4, name: "victor Rey"},
            {id: 5, name: "Harry Bennett"},
            {id: 6, name: "Romeo"},
            {id: 7, name: "Juliet"},
            {id: 8, name: "Napoleon"},
            {id: 9, name: "Rose Marry"},
            {id: 10, name: "Paul Rossi"},
            {id: 11, name: "Lionel Messi"},
            {id: 12, name: "C Ronaldo"},
        ]
    };

    alertItemName = (item) => {
        alert("This is " + item.name + "!");
    };

    render() {
        return (
            <View>
                <ScrollView>
                    {
                        this.state.names.map((item, index) => (
                            <View key = {item.id} style = {styles.item}>
                                <Text>{item.name}</Text>
                            </View>
                        ))
                    }
                </ScrollView>
            </View>
        )
    }
}
export default AppScrollView

const styles = StyleSheet.create ({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
        margin: 2,
        borderColor: '#2a4944',
        borderWidth: 1,
        backgroundColor: '#d2f7f1'
    }
})