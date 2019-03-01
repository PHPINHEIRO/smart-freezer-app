
import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Overlay, Button, Card, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';



export default class Modal extends Component {

  state = {
    isVisible: false,
    spValue:0.00
  }

  increaseSPValue = () => {
    this.setState({spValue: this.state.spValue + 1.00})
  }
  decreaseSPValue = () => {
    this.setState({spValue: this.state.spValue - 1.00})
  }

  render() {
    if (this.props.editable) {
      return(
      <View>
        <TouchableOpacity onPress={() => this.setState({ isVisible: true })}>
          <Card containerStyle={styles.card}
            title={this.props.title}
          >
            <Overlay isVisible={this.state.isVisible} height='auto' height='auto'>
              <View>
                <Card title='Alterar SP'>
                <Text style={styles.txt}>{this.state.spValue}</Text>
                </Card>
                <View style={styles.Overlay}>
                  <TouchableOpacity 
                    onPress={this.increaseSPValue}
                  ><Icon name="md-add-circle-outline" size={45}/>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    onPress={this.decreaseSPValue}
                  ><Icon name="md-remove-circle-outline" size={45}/>
                  </TouchableOpacity>
                </View>
                <Button buttonStyle={styles.buttonSend}
                  onPress={() => { 
                    this.setState({ isVisible: false })
                   }}
                  title='Atualizar'
                ></Button>
              </View>
            </Overlay>
            <Text style={styles.txt}>{this.state.spValue}</Text>
          </Card>
        </TouchableOpacity>
      </View>
      )
    } else {
      return(
        <View>
          <Card containerStyle={styles.card} title={this.props.title}>
            <Text style={styles.txt}>{this.props.value}</Text>
          </Card>
      </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  txt: {
    textAlign: 'center',
    fontSize: 35,
  },
  Overlay: {
    margin:10,
    flexDirection:'row',
    justifyContent: 'space-around'
  },
  buttonSend:{
    borderRadius:30,
  },
  card:{
    width:130,
    height:125,
  }
})
