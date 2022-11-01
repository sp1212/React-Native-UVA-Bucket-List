import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './header';

const EditItem = ({ navigation, route }) => {
    const titles = route.params.titles;
    const title = route.params.title;
    const isDone = route.params.isDone.toString();
    const dateCompleted = route.params.dateCompleted;
    const dateDue = route.params.dateDue;

    return (
      <View style={styles.container}>
        <Header />
        <Text>{"Edit Existing Item"}</Text>
        <Text>{titles}</Text>
        <Text>{title}</Text>
        <Text>{isDone}</Text>
        <Text>{dateCompleted}</Text>
        <Text>{dateDue}</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    }
  }); export default EditItem;