import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './header';

const AddItem = ({ navigation, route }) => {
    const titles = route.params.titles;

    return (
      <View style={styles.container}>
        <Header />
        <Text>{"Add New Item"}</Text>
        <Text>{titles}</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    }
  }); export default AddItem;