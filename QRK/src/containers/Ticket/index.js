import React, { Component } from 'react'
import {
  SafeAreaView,
  Text,
  View,
  TextInput
} from 'react-native'
import {
  Surface,
  Button
} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons'

const styles = require('./style.js')

class Ticket extends Component {

  render() {

    return (
      <SafeAreaView style={styles.area}>
        <Surface style={styles.card}>
          <View style={styles.contentInput}>
            <Icon
             name='local-atm'
             size={25}
             color="#00bcd5"
            />
            <TextInput
             placeholder='Número de ticket'
             style={styles.Input}
            />
          </View>

          <Button
            mode='outlined'
            color='gray'
            icon="camera-alt"
            style={styles.button}>
          Agregue un archivo
          </Button>
        </Surface>
      </SafeAreaView>
    )
  }
}

export default Ticket
