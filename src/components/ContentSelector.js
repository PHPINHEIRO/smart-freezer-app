import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Card, Text, Button } from 'react-native-elements'

export default class ContentSelector extends Component {

    state = {
        operacao: 'Soma'
    }

    render() {
        return (
            <View>
                <Card title='Dentro do Freezer contem:'>
                    <View>
                        <View style={styles.viewCardTop}>
                            <Text style={styles.txt}>Nome:</Text>
                            <Text style={styles.txt2}>Cerveja Heineken</Text>
                        </View>
                        <View style={styles.viewCardTop}>
                            <Text style={styles.txt}>Temp. Ideal:</Text>
                            <Text style={styles.txt2}>-4.00</Text>
                        </View>
                    </View>
                    <View style={styles.button}>
                        <Button title='Selecionar' onPress={()=>{alert('clicado')}}></Button>
                    </View>
                </Card>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    txt: {
        fontSize: 20,
        color: '#424242'
    },
    viewCardTop: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    txt2: {
        fontSize: 20,
        color: '#424242'
    },
    button:{
        marginTop:10
    }
})


