import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Button, Alert } from 'react-native';
import Header from './header';

const BucketList = ({ navigation }) => {
  const [items, setItems] = useState([
    { title: 'Some Item', isDone: true, dateCompleted: "2021-10-12", dateDue: "2022-05-07" },
    { title: 'Bodos First', isDone: false, dateCompleted: "N/A", dateDue: "2021-12-20" },
    { title: 'Sunrise Humpback', isDone: true, dateCompleted: "2022-06-05", dateDue: "2022-11-30" },
    { title: 'Rotumpkin', isDone: true, dateCompleted: "2022-12-02", dateDue: "2024-03-24" },
    { title: 'Paint Beta Bridge', isDone: false, dateCompleted: "N/A", dateDue: "2015-11-09" },
    { title: 'Another Item', isDone: false, dateCompleted: "N/A", dateDue: "2023-05-23" },
    { title: 'Finish App', isDone: false, dateCompleted: "N/A", dateDue: "2022-04-19" },
    { title: 'Do Homework', isDone: true, dateCompleted: "2022-10-02", dateDue: "2020-01-07" },
  ]);

  const editItem = (item) => {
    navigation.navigate('EditItem', { titles: items.map(a => a.title), title: item.title, isDone: item.isDone, dateCompleted: item.dateCompleted, dateDue: item.dateDue });
  }

  const addItem = () => navigation.navigate('AddItem', { titles: items.map(a => a.title) });

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.list}>
        {items.filter(item => !item.isDone).sort(
          function (a, b) { return (a.dateDue < b.dateDue) ? -1 : (a > b) ? 1 : 0; }
        ).concat(items.filter(item => item.isDone).sort(
          function (a, b) { return (a.dateCompleted < b.dateCompleted) ? -1 : (a > b) ? 1 : 0; }
        )).map(item => (
          <TouchableOpacity style={styles.item} key={item.title} onPress={() => editItem(item)}>
            <View pressHandler={editItem}>
              <Text>{item.title}</Text>
              <Text>{"Done:  " + item.isDone}</Text>
              <Text>{"Date due:  " + item.dateDue}</Text>
              <Text>{"Date completed:  " + item.dateCompleted}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Button title="Add Item" onPress={addItem}></Button>
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
}); export default BucketList;

/***************************************************************************************
*  REFERENCES
*  Title: React Native Tutorial #6 - Lists & ScrollView
*  Author: The Net Ninja
*  Date: Nov 29, 2019
*  URL: https://www.youtube.com/watch?v=W-pg1r6-T0g
*
*  Title: React Native Tutorial #10 - Todo App (part 2)
*  Author: The Net Ninja
*  Date: Dec 04, 2019
*  URL: https://www.youtube.com/watch?v=SGEitne8N-Q
*
*  Title: Sort objects in an array alphabetically on one property of the array
*  Author: Omer Bokhari
*  Date: Jan 17, 2012
*  URL: https://stackoverflow.com/questions/8900732/sort-objects-in-an-array-alphabetically-on-one-property-of-the-array
***************************************************************************************/