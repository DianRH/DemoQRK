module.exports = require('react-native').StyleSheet.create({
  area: {
   flex: 1,
   backgroundColor: '#fff'
  },
  contentTitle: {
    height: 60,
    backgroundColor: '#cdcdcd',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
    justifyContent: 'space-between',
    paddingHorizontal:16
  },
  container: {
    flex:1
  },
  content: {
    padding:10
  },
  title: {
    fontSize: 16,
    color: '#6f6f6f',
    fontWeight: 'bold',
     marginVertical:8
  },
  itemList: {
    flexDirection: 'row',

  },
  description: {
    fontSize: 14,
    color: '#6f6f6f',
     marginVertical:8
  },
  card: {
  elevation: 2,
  margin: 10,
  paddingHorizontal:16
  },
  img: {
    width: 90,
    height:90,
    borderColor: '#00bcd5',
    borderWidth: 1,
    margin:20,
  },
  contentImg: {
    alignItems: 'center'
  },
  contentList: {
    flexDirection:'column',
    margin:10
  },
  containerList: {
    flexDirection: 'row',

  },
contentText: {
 marginVertical:10
},
  date: {
    fontSize:16,
    color: '#6f6f6f'
  },
  KeyMembership: {
   height: 40,
   borderBottomWidth:2,
   borderBottomColor:'#00bcd5',
   marginBottom: 20,
   fontSize:16,
   marginHorizontal: 20
 },
 folio:{
   textAlign: 'center',
   color: '#6f6f6f',
   fontWeight:'bold'
 }

})
