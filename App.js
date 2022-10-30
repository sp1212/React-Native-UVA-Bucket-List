import React, {
  useState
} from 'react';

import {
  StyleSheet, Text, View, ScrollView
} from 'react-native';

import Header from './components/header';

export default function App() {
  const [items, setItems] = useState([
    { title: 'Some Item', id: '1' },
    { title: 'Bodos First', id: '2' },
    { title: 'Sunrise Humpback', id: '3' },
    { title: 'Rotumpkin', id: '4' },
    { title: 'Paint Beta Bridge', id: '5' },
    { title: 'Another Item', id: '6' },
    { title: 'Finish App', id: '7' },
    { title: 'Do Homework', id: '8' },
  ]);

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.list}>
        {items.map(item => (
          <View key={item.id}>
            <Text style={styles.item}>{item.title}</Text>
          </View>
        ))}
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  item: {
    marginHorizontal: 12,
    marginTop: 24,
    padding: 30,
    backgroundColor: 'orange',
    fontSize: 24,
    borderRadius: 4
  },
  list: {
    marginHorizontal: 4,
    marginBottom: 24
  }
});

/***************************************************************************************
*  REFERENCES
*  Title: React Native Tutorial #6 - Lists & ScrollView
*  Author: The Net Ninja
*  Date: Nov 29, 2019
*  URL: https://www.youtube.com/watch?v=W-pg1r6-T0g
***************************************************************************************/