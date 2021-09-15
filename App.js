import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, FlatList, Alert } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import uuid from 'react-native-uuid';

const App = () => {

  const [item, setItems] = useState([
    {id:uuid.v4(), text : 'Milk'},
    {id:uuid.v4(), text : 'Eggs'},
    {id:uuid.v4(), text : 'Bread'},
    {id:uuid.v4(), text : 'Juice'}
  ])

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  }

  const addItem = (text) => {

    if(!text){
      // Alert.alert('Error', 'Please enter an item', {text: 'OK'});
      Alert.alert('Error', 'Please enter some text', [
      { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: true });  
    }
    else{
      setItems(prevItems => {
        return [{id: uuid.v4(), text}, ...prevItems];
      });
    }
    
  }


  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem}/>
      <FlatList 
        data={item} 
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem}/>
        )}
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