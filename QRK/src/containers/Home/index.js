import React, { Component } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  ScrollView
} from 'react-native'
import {
  Button,
  Surface,
  Dialog
} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const styles = require('./style.js')

class Home extends Component {
  render() {
    const { navigate } = this.props.navigation

    return (
      <SafeAreaView style={styles.area}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>
            ¿Cómo quieres protegerte?
          </Text>
        </View>
          <Surface style={styles.card}>
            <ImageBackground
             source={require('../../assets/card.jpg')}
             style={styles.background}
             resizeMode='cover'>
             <View style={styles.titleContent}>
              <Text style={styles.title}>
               Garantía Extendida
              </Text>
              <Icon
               name='help-circle'
               size={25}
               color="#fff"
              />
             </View>
            </ImageBackground>
            <View>
              <Text style={styles.description}>
               Agregar productos de garantía extendida
              </Text>
              <Button style={styles.button}
               color='#00bcd5'
               mode='text'
               onPress={()=>(navigate('Guarantee'))}
               >
               COMENZAR
              </Button>
            </View>
          </Surface>
      </SafeAreaView>
    )
  }
}

export default Home
