import React, { Component } from 'react'
import {StyleSheet, ScrollView, Text, View, Image } from 'react-native'

class AppHttp extends Component {
    state = {
        data: ""
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                this.setState({
                    data: responseJson
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <View>
                <Text style={{fontWeight: "bold", fontSize: 30, textAlign: "center"}}>{this.state.data.title}</Text>
                <Text style={{fontSize: 20, textAlign: "center"}}>{this.state.data.body}</Text>
            </View>
        )
    }
}
export default AppHttp