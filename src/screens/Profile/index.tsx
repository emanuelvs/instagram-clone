import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export class Profile extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Profile Page </Text>
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

export default Profile
