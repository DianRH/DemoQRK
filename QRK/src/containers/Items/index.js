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
import Recommend from './component/Recommend'

const styles = require('./style.js')

class Items extends Component {

  render() {
    const { navigate } = this.props.navigation

    return (
      <SafeAreaView style={styles.area}>
      <Recommend
        ref={(buy)=>(this.buy= buy)}
      />
        <View style={styles.container}>
         <View style={styles.content}>
            <View style={styles.contentTitle}>
              <Text style={styles.title}>
                Artículos de garatía próximos a activarse
              </Text>
            </View>
          <Surface style={styles.card}>
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
              </View>
            </View>
          </Surface>
          </View>
        </View>
        <View style={styles.contentButton}>
          <Button style={styles.button}
           color='#00bcd5'
           mode='text'
           onPress={()=>(this.buy.show())}>
           ACEPTAR
          </Button>
        </View>
      </SafeAreaView>
    )
  }
}

export default Items
