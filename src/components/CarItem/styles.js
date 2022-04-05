import { StyleSheet, Dimensions } from "react-native";


const styles = StyleSheet.create({
    carContainer:{
      width: '100%',
      height: Dimensions.get('window').height,
    },
    titles: {
      marginTop: '30%',
      width: '100%',
      alignItems: 'center',
    },
    title:{
       fontSize:40,
      fontWeight: '500',
    },
    subtitle:{
      fontSize: 16,
      color: '#5c5e62',
    },
    subtitleCTA:{
      textDecorationLine: 'underline'
    },
    image:{
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      position: 'absolute'
  
  
    },
    buttoncontainer:{
      position: 'absolute',
      bottom:50,
      width: '100%'
    },
    text:{
      marginBottom: 20,
      fontSize: 12,
      fontWeight: 'bold',
      textTransform: 'uppercase' 
    },
    item: {
      backgroundColor: '#FFF',
      padding: 15,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    itemLeft: {

      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap'
    },
    square: {
      width: 24,
      height: 24,
      backgroundColor: '#55BCF6',
      opacity: 0.4,
      borderRadius: 5,
      marginRight: 15,
    },
    itemText: {
      maxWidth: '80%',
    },
    circular: {
      width: 12,
      height: 12,
      borderColor: '#55BCF6',
      borderWidth: 2,
      borderRadius: 5,
    },
  });
  export default styles;