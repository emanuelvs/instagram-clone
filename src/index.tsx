import React, { Component } from 'react'
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feed, Search, NewPost, Activity, Profile } from './screens';
import { 
    FeedIcon,
    FeedIconSelected,
    SearchIcon,
    SearchIconSelected,
    NewPostIcon,
    NewPostIconSelected,
    ActivityIcon,
    ActivityIconSelected,
    ProfileIcon,
    ProfileIconSelected
} from './assets/TabIcons';

const Tab = createBottomTabNavigator();

export default class App extends Component {
    render() {
        return (
            <>
            <StatusBar backgroundColor="#f5f5f5" barStyle="dark-content"/>
            <NavigationContainer >
                <Tab.Navigator screenOptions={options} tabBarOptions={{ showLabel: false, tabStyle: { backgroundColor: "#f5f5f5" } }}>
                    <Tab.Screen name="Feed" component={Feed}/>
                    <Tab.Screen name="Search" component={Search}/>
                    <Tab.Screen name="NewPost" component={NewPost}/>
                    <Tab.Screen name="Activity" component={Activity}/>
                    <Tab.Screen name="Profile" component={Profile}/>
                </Tab.Navigator>
            </NavigationContainer>
            </>
        )
    }
}

const options = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
    
    return RouteIcon[focused][route.name];
    },
    
  })

const RouteIcon = {
    ['true']: {
        Feed: <FeedIconSelected/>,
        Search: <SearchIconSelected/>,
        NewPost: <NewPostIconSelected/>,
        Activity: <ActivityIconSelected/>,
        Profile: <ProfileIconSelected/>
    },
    ['false']: {
        Feed: <FeedIcon/>,
        Search: <SearchIcon/>,
        NewPost: <NewPostIcon/>,
        Activity: <ActivityIcon/>,
        Profile: <ProfileIcon/>
    }
}