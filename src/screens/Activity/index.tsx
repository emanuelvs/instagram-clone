import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export class Activity extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Activity Page </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Activity
