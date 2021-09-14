import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import uuid from 'react-native-uuid';

const App = () => {

  const [item, setItems] = useState([
    {id:uuid.v4(), text : 'Milk'},
    {id:uuid.v4(), text : 'Eggs'},
    {id:uuid.v4(), text : 'Bread'},
    {id:uuid.v4(), text : 'Juice'}
  ])


  return (
    <View style={styles.container}>
      <Header />
      <FlatList 
        data={item} 
        renderItem={({item}) => <ListItem item={item} />}
      />
      {/* <Text style={styles.text}>Hello World</Text> */}
      {/* <Image source={{uri : 'https://randomuser.me/api/portraits/men/1.jpg'}} 
      style={styles.img}/> */}
    </View>
  );
};


//create a separate styles variable to store styles
//import StyleSheet component from react-native

const styles = StyleSheet.create({

  container : {
    flex: 1, 
    // paddingTop : 60
    // justifyContent : 'center', 
    // alignItems: 'center'
  }, 

  text : {
    color :'darkslateblue', 
    fontSize : 30
  }, 
  
  img : {
    width : 100,
    height : 100, 
    borderRadius : 100/2
  }
});


export default App;