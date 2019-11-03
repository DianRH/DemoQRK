import React, { Component } from 'react'
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  Alert,
  Image
} from 'react-native'
import {
  Surface,
  Button
} from 'react-native-paper'
import AsyncStorage from '@react-native-community/async-storage'
import axios from 'axios'
import Icon from 'react-native-vector-icons/MaterialIcons'
import ImagePicker from 'react-native-image-crop-picker'
import _ from 'lodash'

const styles = require('./style.js')
const tickets = [
  '12345678',
  '87654321',
  '510152025',
  '24681012',
  '1357911'
]

class Ticket extends Component {
  constructor(props){
    super(props)

    this.state = {
      ticket: '',
      visible: false
    }

    this.onNext = this.onNext.bind(this)
  }

  onNext(){
    const { navigate } = this.props.navigation

    if(!tickets.includes(this.state.ticket)){
      Alert.alert(
        'Datos Incorrectos',
        'Por favor verifique sus datos y vuelva intentarlo',
        [{text: 'Aceptar'}]
      )
    }else{
      //const { navigate } = this.props.navigation
      //navigate('Ticket')
      axios.get(`https://qrky-api.prestigos.info/tickets/${this.state.ticket}`).
      then((response)=>{
        console.warn(response);
        this.setState({
          visible: true
        })
        AsyncStorage.getItem('products').
        then((products)=>{
          if(products == null) {
            AsyncStorage.setItem('products', JSON.stringify(response.data.products))
            .then(()=>{
              navigate('Items', {
                recommended: _.has(response,'data.recommended') ? response.data.recommended[0] : {},
                products: response.data.products
              })
            })
          }else{
            products = JSON.parse(products)
            products = _.concat(products,response.data.products)

            AsyncStorage.setItem('products', JSON.stringify(products))
            .then(()=>{
              navigate('Items', {
                recommended: _.has(response,'data.recommended') ? response.data.recommended[0] : {},
                products: response.data.products
              })
            })
          }
        })
      }).catch((error)=>{
        console.warn('error: ', error)
      })
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.area}>
        <View style={{flex: 1}}>
          <Surface style={styles.card}>
            <View style={styles.contentInput}>
              <Icon
               name='local-atm'
               size={25}
               color="#00bcd5"
              />
              <TextInput
               value={this.state.ticket}
               onChangeText={(text)=>(this.setState({ticket: text}))}
               placeholder='Número de ticket'
               style={styles.Input}
              />
            </View>

            <Button
              mode='outlined'
              color='gray'
              icon="camera-alt"
              onPress={()=>{
                ImagePicker.openPicker({
                  cropping: false
                }).then((image) => {
                  console.log(image);
                })
              }}
              style={styles.addImage}>
              Agregue un archivo
            </Button>
          </Surface>
        </View>
        <View style={styles.contentButton}>
          <Button
           style={styles.button}
           color='#00bcd5'
           mode='text'
           onPress={this.onNext}
           >
           ACEPTAR
          </Button>
        </View>
      </SafeAreaView>
    )
  }
}

export default Ticket
