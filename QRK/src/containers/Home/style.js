module.exports = require('react-native').StyleSheet.create({
  area: {
   flex: 1
  },
  header: {
   height: 50,
   backgroundColor: '#00bcd5',
   justifyContent: 'center'
  },
  headerTitle: {
    textAlign: 'center',
    fontSize: 16,
    color: '#fff'
  },
  background: {
   width: '100%',
   height: 180
  },
  title: {
    color: '#fff',
    fontSize: 22
  },
  card: {
  elevation: 2,
  margin: 10,
},
titleContent: {
  flexDirection: 'row',
  alignItems:'center',
  backgroundColor: 'rgba(44, 44, 44, 0.3)',
  height: 60,
  paddingHorizontal:15,
  justifyContent:'space-between',
  position: 'relative',
  top: 120
},
description : {
  color: '#6f6f6f',
  fontSize: 14,
  paddingHorizontal:16,
  paddingTop:15
},
button: {
  marginVertical: 18,
  flexWrap: 'wrap',
  justifyContent: 'space-between'
}
})
