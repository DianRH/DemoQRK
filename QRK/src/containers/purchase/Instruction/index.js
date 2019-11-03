import React, { Component } from 'react'
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  ScrollView,
  Image
} from 'react-native'
import {
  Surface,
  Button
} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons'



const styles = require('./style.js')

class   Instruction extends Component {

  render() {
    const { navigate } = this.props.navigation

    return (
      <SafeAreaView style={styles.area}>
      <ScrollView>
        <View style={styles.container}>
         <View style={styles.content}>
          <Surface style={styles.card}>
          <View style={styles.contentImg}>
            <Image style={styles.img} />
          </View>
            <View style={styles.contentText}>
              <Text style={styles.title}>
                titulo del producto
              </Text>
              <Text style={styles.description}>
                descripcion del producto dededdededseefvgrekgrg
              </Text>
              <Text style={styles.description}>
                La fecha de compra fue el 34/45/2020
              </Text>
              <Text style={styles.description}>
                La fecha máxima de garantía es 34/67/2020
              </Text>
            </View>
            <View style={styles.contentImg}>
              <Image style={styles.img} />
            </View>
            <Text style={styles.folio}>
              Folio
            </Text>
            <TextInput
             placeholder='D28A-26DW-CYJ9-IMA3'
             style={styles.KeyMembership}
            />
            <Text style={styles.title}>
              instrucciones
            </Text>
            <Text style={styles.description}>
              The option that the switch controls, as well as the state it’s in, should be made clear from the corresponding inline label.
            </Text>
            <Text style={styles.description}>
              TERMINOS DE LA GARANTIA
            </Text>
            <Text style={styles.description}>
              TERMINOS Y CONDICIONES
            </Text>
          </Surface>
          </View>
        </View>
      </ScrollView>
      </SafeAreaView>
    )
  }
}

export default   Instruction
