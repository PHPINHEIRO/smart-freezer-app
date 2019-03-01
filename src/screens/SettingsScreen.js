import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import Myheader from '../components/Header';

export default class SettingsScreen extends Component {
  render() {
    return (
      <View>
        <Myheader navigation={this.props.navigation} title='Configurações'></Myheader>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
