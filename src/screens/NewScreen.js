import React, { Component } from 'react'
import {StyleSheet, View } from 'react-native'
import Myheader from '../components/Header';
import { Input, Button } from 'react-native-elements';

export default class NewScreen extends Component {
  render() {
    return (
      <View>
        <Myheader navigation={this.props.navigation} title='Novo Produto'></Myheader>
        <Input placeholder='Nome'></Input>
        <Input placeholder='Temp. Idemal'></Input>
        <Button buttonStyle={styles.button} title='Salvar'></Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button:{
    margin:10
  }
})
