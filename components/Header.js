import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


const Header = ({title}) => {
  return (
    <View style={styles.haeder}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

Header.defaultProps = {
    title : 'Shopping List'
};


//create a separate styles variable to store styles
//import StyleSheet component from react-native

const styles = StyleSheet.create({

  haeder : {
    height : 60, 
    padding : 15, 
    backgroundColor : 'darkslateblue'
  }, 

  text : {
    color :'#fff', 
    fontSize : 23
  }, 
  
});


export default Header;