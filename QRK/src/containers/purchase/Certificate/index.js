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

class Certificate extends Component {

  render() {
    const { navigate } = this.props.navigation

    return (
      <SafeAreaView style={styles.area}>
        <View style={styles.container}>
         <View style={styles.content}>

          <Surface style={styles.card}>
            <View style={styles.contentTitle}>
              <Text style={styles.title}>
                Certificados de garantía extendida
              </Text>
              <Icon
               name='keyboard-arrow-down'
               size={25}
               color='#00bcd5'
              />
            </View>
             <View style={styles.containerList}>
                <View style={styles.itemList}>
                  <View style={styles.img}/>
                </View>
                <View style={styles.contentList}>
                  <Text style={styles.description}>
                    texto
                  </Text>
                  <Text style={styles.date}>
                    Vigencia: 23/09/2012
                  </Text>
                  <View style={styles.contentButton}>
                    <Button style={styles.button}
                     color='#00bcd5'
                     mode='text'
                     compact='true'
                     onPress={()=>(navigate('Instruction'))}
                     >
                     Generar reclamo
                    </Button>
                  </View>
                </View>
              </View>
          </Surface>
          </View>
        </View>

      </SafeAreaView>
    )
  }
}

export default Certificate
