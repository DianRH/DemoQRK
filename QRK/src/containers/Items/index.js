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
  Button,
  Paragraph,
  Dialog,
  Portal,
  Provider
} from 'react-native-paper'
import AsyncStorage from '@react-native-community/async-storage'
import Icon from 'react-native-vector-icons/MaterialIcons'
import _ from 'lodash'
const styles = require('./style.js')

class Items extends Component {
  constructor(props){
    super(props)

    this.state = {
      visible: false
    }

    this.onCloseModal = this.onCloseModal.bind(this)
  }

  onCloseModal(){
    const { navigate } = this.props.navigation

    this.setState({
      visible: false
    }, ()=>(navigate('Home')))
  }

  render() {
    const { navigate, getParam } = this.props.navigation
    const recommended = getParam('recommended', {})
    const products = getParam('products', [])

    return (

        <SafeAreaView style={styles.area}>
        <ScrollView>
          <View style={styles.container}>
           <View style={styles.content}>
              <View style={styles.contentTitle}>
                <Text style={styles.title}>
                  Artículos de garatía próximos a activarse
                </Text>
              </View>

              <Surface style={styles.card}>
                {products.map((product)=>{
                  return (
                    <View style={styles.containerList}>
                      <View style={styles.item}>
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
                        </View>
                      </View>
                    </View>
                  )
                })}
              </Surface>

            </View>
          </View>
          </ScrollView>
          <View style={styles.contentButton}>
            <Button style={styles.button}
             color='#00bcd5'
             mode='text'
             onPress={()=>( _.isEmpty(recommended) ? navigate('Home') : this.setState({visible: true}))}>
             ACEPTAR
            </Button>
          </View>
          <Portal>
            <Dialog
               visible={this.state.visible}
               onDismiss={this.onCloseModal}>
               <View style={{justifyContent:'flex-end',alignItems: 'flex-end'}}>
                 <Icon
                  name='close'
                  size={22}
                  color='#00bcd5'
                  style={{margin:10}}
                  onPress={this.onCloseModal}
                 />
               </View>
              <Dialog.Title style={{textAlign: 'center'}}>Tus productos han sido registrados te recomendamos</Dialog.Title>
              <Dialog.Content>
                <View  style={styles.imageContainer}>
                  <Image
                    style={styles.image}
                    source={{uri: recommended.image}}
                  />
                </View>
                <Paragraph style={{textAlign: 'center'}}>{recommended.description}</Paragraph>
              </Dialog.Content>
              <Dialog.Actions>
                <Button
                onPress={this.onCloseModal}>Comprar</Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        </SafeAreaView>
    )
  }
}

export default Items
