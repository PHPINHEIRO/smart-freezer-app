import React, { Component } from 'react'
import { StyleSheet, View,Text } from 'react-native'



export default class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Text>Home</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tile: {
    flexDirection: 'row',
    justifyContent: 'space-around',

  },
})
