import React, { Component } from 'react'
import {StyleSheet, ScrollView, Text, View, Image } from 'react-native'

const ImagesExample = () => (
    <Image source = {require('./assets/images/flower.jpg')} style = {styles.image} />
)
export default ImagesExample

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300
    }
});