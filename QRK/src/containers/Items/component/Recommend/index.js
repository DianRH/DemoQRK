import React, {Component} from 'react'
import {
  Modal,
  Portal,
  Text,
  Button,
  Surface,
  Dialog,
  Provider
} from 'react-native-paper'
import {
  SafeAreaView,
  View,
  Image
} from 'react-native'

const styles = require('./style.js')

class Recommend extends Component {
  constructor(props){
    super(props)
    this.state = {
      visible: false
    }

    this.show = this.show.bind(this)
    this.hide = this.hide.bind(this)

  }
  show(){
    this.setState({
      visible: true
    })
  }

  hide(){
    this.setState({
      visible: false
    })
  }

  render(){
    const { visible } = this.state

    return(
    <Provider>
      <Portal>
        <Modal
          contentContainerStyle={styles.modal}
          visible={this.state.visible}
          onDismiss={this.hide}
        >
          <Surface style={styles.surface}>
            <View style={styles.content}>
              <Text style={styles.title}>
                Te recomendamos
              </Text>
              <View style={styles.contentImg}>
                <Image style={styles.img}/>
              </View>
              <Text style={styles.interestInfo}>
                informacion del producto im runnig for my live
              </Text>
              <Dialog.Actions>
                <Button
                  color='#00bcd5'
                  onPress = {()=>{
                    this.hide()
                  }}>
                COMPRAR
                </Button>
              </Dialog.Actions>
            </View>
          </Surface>
        </Modal>
      </Portal>
    </Provider>
    )
  }
}
export default Recommend
