import React, { Component } from 'react'
import {StyleSheet, View } from 'react-native'
import Myheader from '../components/Header';

export default class NewScreen extends Component {
  render() {
    return (
      <View>
        <Myheader navigation={this.props.navigation} title='Novo Produto'></Myheader>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
