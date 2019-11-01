import React, { Component } from 'react'
import {
  Button,
  View
} from 'react-native'
import {
  Provider,
  DefaultTheme
} from 'react-native-paper'
import AsyncStorage from '@react-native-community/async-storage'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

//SCREENS
import HomeScreen from './src/containers/Home'
import GuaranteeScreen from './src/containers/Guarantee'
import TicketScreen from './src/containers/Ticket'
import ItemsScreen from './src/containers/Items'
import CertificateScreen from './src/containers/purchase/Certificate'
import InstructionScreen from './src/containers/purchase/Instruction'

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'QRK',
    },
  },
  Guarantee: {
    screen: GuaranteeScreen,
  },
  Ticket: {
    screen: TicketScreen,
  },
  Items: {
    screen: ItemsScreen,
  },
  Certificate: {
    screen: CertificateScreen,
  } ,
  Instruction: {
    screen:   InstructionScreen,
  }
}, {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Garantía extendida',
      headerTintColor:'#fff',
      headerStyle: {
        backgroundColor:'#000'
      },
    },

})

class App extends Component {
  render() {
    const Root = createAppContainer(AppNavigator)
    AsyncStorage.clear()

    return (
      <View style={{
        flex: 1
      }}>
        <Provider theme={{
          ...DefaultTheme,
            roundness: 2,
            colors: {
              ...DefaultTheme.colors,
              primary: '#00bcd5'
            }
        }}>
          <Root />
        </Provider>
      </View>
    )
  }
}
export default App
