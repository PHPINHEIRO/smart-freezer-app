import React from 'react'
import { Platform, Dimensions } from 'react-native'
import { createDrawerNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from '../screens/HomeScreen';
import NewScreen from '../screens/NewScreen';
import SettingsScreen from '../screens/SettingsScreen';


const WIDTH = Dimensions.get('window').width

const drawerConfig ={
    drawerWidth: WIDTH*0.83
}

const DrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeScreen,
    },
    Novo: {
        screen: NewScreen
    },
    Config: {
        screen: SettingsScreen
    }
},drawerConfig)

export default createAppContainer(DrawerNavigator)