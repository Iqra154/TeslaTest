import React, { useEffect } from "react";
import{View, Text,ImageBackground} from 'react-native'
import styles from './styles'
import StyledButton from "../StyledButton";
import StyleButton from '../StyleButton';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from "../../redux/counter";
import AntIcon from "react-native-vector-icons/AntDesign";

const CarItem = (props) => {
    
    
    const { count } = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    const {name, tagline, image,taglineCTA} =props.car
   
    
    return(
    <View style={styles.carContainer}>
        <ImageBackground source= {image} style={styles.image}/>
        <View style={styles.titles}>
          <Text style={styles.title}>{name}</Text> 
          <Text style={styles.subtitle}>{tagline}&nbsp;
          <Text style={styles.subtitleCTA}>{taglineCTA}</Text> 
          </Text> 
          </View>
        <View style = {styles.buttoncontainer}>
            <StyledButton
             type = "primary" 
             content = {"Add to Cart"} 
             onPress={()=>{
                 console.warn("add to cart was pressed")

             }}
             />
             
            <View style ={styles.itemLeft}>
            <AntIcon name="minuscircleo" 
              style={[styles.minus]}
              size={24} color="black"  
              onPress={() =>{
                dispatch(decrement());
             }}
                /> 
            </View>
            <View style ={styles.itemLeft}>
            <Text style={styles.text} >{count}
            </Text> 


            </View>
            
            <View style ={styles.itemLeft}>
            <AntIcon name="pluscircleo" 
               style={[styles.icon]}
               size={24} color="black" 
               onPress={() =>{
                dispatch(increment());
                }} /> 

            </View>

            <View style ={styles.itemLeft}>
            <AntIcon name="shoppingcart" 
               size={24} color="black" 
               style={[styles.itemLeft]}
               />   
            </View>
             <StyleButton
             type = "secondary" 
             content = {"Existing Inventory"} 
             onPress={()=>{
                 console.warn("Existing Inventory was pressed")
             }}   
             />
        </View>      
    </View>

    );
};
export default CarItem;