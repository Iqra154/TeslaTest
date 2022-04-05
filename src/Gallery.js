import { Text, View } from 'react-native';
export default function Gallery() {

    return (
  
      <View style={styles.container}>
        <Text> Gallery</Text>
      </View>
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