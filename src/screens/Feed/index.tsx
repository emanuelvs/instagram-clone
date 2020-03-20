import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Cam from './Camera';
import Direct from './Direct';
const logo = require('../../assets/Logo/instagram.png');
import { CameraIcon, DirectIcon } from '../../assets/FeedIcons';

const Stack = createStackNavigator();

export class Feed extends Component<any, any> {
    render() {
        return (
            <NavigationContainer independent={true} >
                <Stack.Navigator initialRouteName="feed" screenOptions={{ headerStyle: { backgroundColor: "#f5f5f5" } }}>
                    <Stack.Screen name="Home" component={Home} options={({navigation, route}) => ({
                        headerTitle: () => <Header navigation={navigation} route={route}/>,
                    })}/>
                    <Stack.Screen name="Direct" component={Direct}/>
                    <Stack.Screen name ="Camera" component={Cam}/>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

function Header(props) {
    return (
        <View style={{flexDirection: 'row'}}>
            <View style={{width: '38%', paddingRight: 10}}>
            <TouchableOpacity onPress={() => props.navigation.navigate("Camera")}>
                <CameraIcon/>
            </TouchableOpacity>
            </View>
            <View style={{alignSelf: 'flex-end', paddingBottom: 3}}>
                <Image source={logo}/>
            </View>
            <View style={{width: '175%'}}>
            <TouchableOpacity onPress={() => props.navigation.navigate("Direct")}>
                <DirectIcon/>
            </TouchableOpacity>
            </View>
        </View>
    );
}

export default Feed
