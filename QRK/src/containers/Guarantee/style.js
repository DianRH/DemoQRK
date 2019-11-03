module.exports = require('react-native').StyleSheet.create({
  area: {
   flex: 1
  },
  card: {
  elevation: 2,
  margin: 10,
  paddingHorizontal:16
  },
  Container:{
    flex:1
  },
  title: {
   fontSize: 22,
  },
  titleContent: {
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical:15
  },
  IconShop: {
    width: 35,
    height:35,
    borderColor: '#00bcd5',
    borderWidth: 1,
    resizeMode: 'contain'
  },
  line: {
   marginHorizontal: 20
  },
  alignRadioButton: {
   flexDirection:'row',
   alignItems: 'center',
   justifyContent: 'space-between',
   marginVertical: 10
  },
  contentList: {
   flexDirection:'row',
   alignItems: 'center',
  },
  shopName: {
    fontSize: 16,
    marginLeft: 25
  },
  dividerLine: {
    width:'100%',
    borderWidth: 0.5,
    borderColor: '#dbdcdb',
    marginVertical: 10,
  },
  membershipTitle: {
   paddingVertical:15,
   fontSize: 22
  },
  KeyMembership: {
   height: 40,
   borderBottomWidth:2,
   borderBottomColor:'#00bcd5',
   marginBottom: 20,
   fontSize:16,
   marginHorizontal: 20
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
