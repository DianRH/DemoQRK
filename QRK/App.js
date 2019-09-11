import {
  Button
} from 'react-native'

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

export default createAppContainer(AppNavigator)
