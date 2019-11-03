import React, { Component } from 'react'
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  Image,
  ScrollView
} from 'react-native'
import {
  Surface,
  Button
} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons'
import AsyncStorage from '@react-native-community/async-storage'
import axios from 'axios'
import _ from 'lodash'

const styles = require('./style.js')

class Certificate extends Component {
  constructor(props){
    super(props)

    this.state = {
      products: []
    }
  }

  componentWillMount(){
    axios.get(`https://qrky-api.prestigos.info/warrantyProducts`).
    then((response)=>{
      console.warn(response)
      AsyncStorage.getItem('products').
      then((products)=>{
        products = products != null ?  JSON.parse(products) : []

        this.setState({
         products: _.concat(response.data, products)
        })
      })
    }).catch((error)=>{
      console.warn('error: ', error)
    })
  }

  render() {
    const { navigate } = this.props.navigation

    return (
      <SafeAreaView style={styles.area}>
        <ScrollView>
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
              {this.state.products.map((product)=>{
                return (
                   <View style={styles.containerList}>
                     <View style={styles.itemList}>
                       <Image
                         style={styles.img}
                         source={{uri: product.image}}
                       />
                     </View>
                     <View style={styles.contentList}>
                       <Text style={styles.description}>
                         {product.name}
                       </Text>
                       <Text style={styles.date}>
                         Vigencia: {product.warrantyDueDate}
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
                )
              })}
            </Surface>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default Certificate
