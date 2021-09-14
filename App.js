import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const App = () => {
  return (
    <View style={styles.container}>
      <Text style={{color :'darkslateblue', fontSize : 30}}>Hello World</Text>
    </View>
  );
};


//create a separate styles variable to store styles
//import StyleSheet component from react-native

const styles = StyleSheet.create({

  container : {
    flex: 1, 
    justifyContent : 'center', 
    alignItems: 'center'
  }
});


export default App;