module.exports = require('react-native').StyleSheet.create({
  area: {
   flex: 1
  },
  card: {
  elevation: 2,
  margin: 10,
  paddingHorizontal:16,
  paddingTop:16
  },
  Input: {
  flex: 1,
   height: 40,
   borderBottomWidth:2,
   borderBottomColor:'#00bcd5',
   fontSize:16,
   marginHorizontal: 20
 },
 InputPhoto: {
   flex:1,
   height: 40,
   borderBottomWidth:2,
   borderBottomColor:'#00bcd5',
   fontSize:16,
   marginHorizontal: 20,
 },
 contentInput: {
   flexDirection: 'row',
   justifyContent: 'center',
   alignItems: 'center',
   marginBottom: 20
 },
 addImage: {
   marginBottom: 15
 },
 button: {
   marginVertical: 15,
   flexWrap: 'wrap',
   justifyContent: 'flex-end',
 },
 contentButton: {
   alignItems: 'flex-end',
   borderWidth: 0.8,
   borderColor: '#dbdcdb'
 }
})
