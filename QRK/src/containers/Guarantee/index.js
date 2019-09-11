import React, { Component } from 'react'
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView
} from 'react-native'
import {
  Surface,
  RadioButton,
  Button
} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons'

const styles = require('./style.js')

class Guarantee extends Component {
  state = {
    checked: 'first',
  }

  render() {
    const { checked } = this.state;
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
           <View style={styles.alignRadioButton}>
             <View style={styles.contentList}>
               <View style={styles.IconShop}/>
               <Text style={styles.shopName}>
                Liverpool
               </Text>
             </View>
              <RadioButton
               value="first"
               color="#00bcd5"
               status={checked === 'first' ? 'checked' : 'unchecked'}
               onPress={() => { this.setState({ checked: !false }); }}
              />
           </View>
            <View style={styles.dividerLine}/>
           </View>
        </Surface>

        <Surface style={styles.card}>
          <Text style={styles.membershipTitle}>
           Clave de membresía
          </Text>
          <TextInput
           placeholder='D28A-26DW-CYJ9-IMA3'
           style={styles.KeyMembership}
          />
        </Surface>
      </View>
        <View style={styles.contentButton}>
          <Button style={styles.button}
           color='#00bcd5'
           mode='text'
           onPress={()=>{navigate('Ticket')}}
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
