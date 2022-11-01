import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './header';

export default function AddItem() {
    return (
      <View style={styles.container}>
        <Header />
        <Text>{"Add new item"}</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    }
  });