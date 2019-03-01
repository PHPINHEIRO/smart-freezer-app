import React, { Component } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Header, Icon} from 'react-native-elements';


export default class Myheader extends Component {
  render() {
    return (
      <View>
        <Header
            leftComponent={<TouchableOpacity onPress={()=> this.props.navigation.toggleDrawer()}><Icon name='menu' color='#FFF'/></TouchableOpacity>}
            centerComponent={{ text:this.props.title, style: { color: '#FFF', fontSize: 20 } }}
          />
      </View>
    )
  }
}

const styles = StyleSheet.create({})
