import React from 'react';
import {Text, View, FlatList} from 'react-native';
import cars from './cars'
import CarItem from '../CarItem/index'
import { useDispatch, useSelector } from 'react-redux';
import {  resettingCount } from "../../redux/counter";
import styles from './styles'
const CarsList = ()=>{
    const { count } = useSelector((state) => state.counter);
    const dispatch = useDispatch();
  
   
    return(
        
        <View  style ={styles.container}>
        <FlatList
        data = {cars}
        extraData={ dispatch(resettingCount())}
        renderItem={({item})=> <CarItem car ={item}/> }
        
       />
    </View>

    );

};
export default CarsList;