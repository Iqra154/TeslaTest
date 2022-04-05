import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View} from 'react-native';
import CarsList from './components/CarsList'
import { Provider } from 'react-redux';
import { store } from './redux/store';

export default function App() { 
  return ( 
    <Provider store={store}>
     <View style={styles.container}>
     <CarsList/>
    </View>
  </Provider>
   
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  
});
