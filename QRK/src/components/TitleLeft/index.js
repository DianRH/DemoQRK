import React, { Component } from 'react'
import {
  Text,
  TouchableOpacity
} from 'react-native'

const styles = require('./style.js')

class TitleLeft extends Component<props> {
  render() {
    return(
      <TouchableOpacity
        activeOpacity={1}
        onPress={this.props.onPress}
      >
        <Text style={styles.title}>MIS COMPRAS</Text>
      </TouchableOpacity>
    )
  }
}

export default TitleLeft
