module.exports = require('react-native').StyleSheet.create({
  area: {
   flex: 1,
   backgroundColor: '#fff'
  },
  contentTitle: {
    height: 60,
    backgroundColor: '#cdcdcd',
    alignItems: 'center',
    justifyContent: 'center'
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
    fontWeight: 'bold'
  },
  itemList: {
    flexDirection: 'row',

  },
  card: {
  elevation: 2,
  margin: 10,
  paddingHorizontal:16
  },
  img: {
    width: 65,
    height:65,
    borderColor: '#00bcd5',
    borderWidth: 1,
    margin:20
  },
  contentList: {
    flexDirection:'column',
    margin:10
  },
  containerList: {
    flexDirection: 'row'
  },
  description: {
    fontSize:16,
    color: '#6f6f6f',
    fontWeight: 'bold'
  },
  date: {
    fontSize:16,
    color: '#6f6f6f'
  },
  contentButton: {
    alignItems: 'flex-end',
    borderWidth: 0.8,
    borderColor: '#dbdcdb'
  }
})
