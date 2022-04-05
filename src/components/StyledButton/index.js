import React from "react";
import{View, Text,TouchableHighlight, Button} from 'react-native'
import styles from './styles'
import AntIcon from "react-native-vector-icons/AntDesign";

const StyledButton = (props) => {
    // const type = props.type;
     //const content = props.content
     //const onPress = props.onPress
 
     const{type,content,onPress,totals} = props
     const backgroundColor = type ==='primary'? '#171A20CC': '#FFFFFfA6';
     const textColor = type==='primary'? 'white': '#171A20';
     return(
     <View style={styles.container}>
     <TouchableHighlight 
     style={[styles.button,{backgroundColor: backgroundColor}]}
          onPress={() =>{
          onPress()
          }}>

      <View>
     <Text style={[styles.text, {color: textColor}]}>{content}</Text>
      </View>
  </TouchableHighlight>
     </View>
     )
 }
 export default StyledButton;
