import React, { Component } from 'react'
import {StyleSheet, Text, View } from 'react-native'

const AppFlexBox = (props) => {
    return (
        <View style = {styles.container}>
            <View style = {styles.redBox} />
            <View style = {styles.blueBox} />
            <View style = {styles.yellowBox} />
        </View>
    )
}
export default AppFlexBox

const styles = StyleSheet.create ({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'grey',
        height: '100%',
    },
    redBox: {
        width: 100,
        height: 100,
        backgroundColor: 'red'
    },
    blueBox: {
        width: 100,
        height: 100,
        backgroundColor: 'blue'
    },
    yellowBox: {
        width: 100,
        height: 100,
        backgroundColor: 'yellow'
    },
})