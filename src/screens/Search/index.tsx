import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export class Search extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Search Page </Text>
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

export default Search
