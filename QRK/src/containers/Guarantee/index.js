import React, { Component } from 'react'
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Image,
  Alert
} from 'react-native'
import {
  Surface,
  RadioButton,
  Button
} from 'react-native-paper'
import axios from 'axios'
import Icon from 'react-native-vector-icons/MaterialIcons'

const styles = require('./style.js')

class Guarantee extends Component {
  constructor(props){
    super(props)
    this.state = {
      guarantees: [],
      active: 0,
      id: ''
    }

    this.onNext = this.onNext.bind(this)
  }

  onNext(){
    if(this.state.id == ''){
      Alert.alert(
        'Datos Incorrectos',
        'Por favor verifique sus datos y vuelva intentarlo',
        [{text: 'Aceptar'}]
      )
    }else{
      const { navigate } = this.props.navigation
      navigate('Ticket')
      /*axios.get('https://qrky-api.prestigos.info/membership', {
        provider: this.state.guarantees[this.state.active].name, 
        id: this.state.id
      }).then((response)=>{
        console.warn(response.data)
      }).catch((error)=>{
        console.warn('error: ', error)
      })*/
    }
  }
  componentWillMount(){
    axios.get('https://qrky-api.prestigos.info/providers')
    .then((response)=>{
      console.warn(response.data)
      this.setState({
        guarantees: response.data
      })
    }).catch((error)=>{
      console.warn('error: ', error)
    })
  }

  render() {
    const { active, guarantees, id } = this.state
    const { navigate } = this.props.navigation

    return (
      <SafeAreaView style={styles.area}>
      <KeyboardAvoidingView
          style={styles.area}
          enabled={false}
          behavior="height"
        >
        <View style={styles.Container}>
        <Surface style={styles.card}>
          <View style={styles.titleContent}>
           <Text style={styles.title}>
            Tienda departamental
           </Text>
           <Icon
            name='keyboard-arrow-down'
            size={25}
            color='#00bcd5'
           />
          </View>
          <View style={styles.line}>
            {guarantees.map((guarantee, index)=>{
              return (
                <View style={styles.alignRadioButton}>
                   <View style={styles.contentList}>
                     <Image
                      style={styles.IconShop}
                      source={{uri: guarantee.image}}
                    />
                     <Text style={styles.shopName}>
                      {guarantee.name}
                     </Text>
                   </View>
                    <RadioButton.Android
                     color="#00bcd5"
                     status={active == index ? 'checked' : 'unchecked'}
                     onPress={()=>{this.setState({ active: index })}}
                    />
                </View>
              )
            })}
          </View>
        </Surface>

        <Surface style={styles.card}>
          <Text style={styles.membershipTitle}>
           Clave de membresía
          </Text>
          <TextInput
           value={id}
           onChangeText={(text)=>(this.setState({id: text}))}
           placeholder='D28A-26DW-CYJ9-IMA3'
           style={styles.KeyMembership}
          />
        </Surface>
      </View>
        <View style={styles.contentButton}>
          <Button style={styles.button}
           color='#00bcd5'
           mode='text'
           onPress={this.onNext}
           >
           ACEPTAR
          </Button>
        </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    )
  }
}

export default Guarantee
