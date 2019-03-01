
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import DrawerNavigation from './src/routes/drawerNavigation';

export default class App extends Component {
  render() {
    return (
       <DrawerNavigation></DrawerNavigation>
    );
  }
}

const styles = StyleSheet.create({
  
});
