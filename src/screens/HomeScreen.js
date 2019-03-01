import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import Myheader from '../components/Header';
import Modal from '../components/Modal'
import ContentSelector from '../components/ContentSelector'

export default class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Myheader navigation={this.props.navigation} title='Home'></Myheader>
        <View style={styles.tile}>
          <Modal title='SP(˚C)' editable={true}></Modal>
          <Modal title='Temp(˚C)' value='-5.00' editable={false}></Modal>
        </View>
        <View>
          <ContentSelector></ContentSelector>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tile:{
    flexDirection:'row',
    justifyContent: 'space-between'
  }
})
