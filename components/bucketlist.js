import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Button, Alert } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
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
            <CheckBox
              disabled={false}
              value={item.isDone}
              onValueChange={(newValue) => 
                setItems(items.map(a => {
                  if (a.title.localeCompare(item.title) === 0) {
                    if (item.dateCompleted.localeCompare('N/A') === 0) {
                      return {...a, isDone: newValue, dateCompleted: getCurrentDate()};
                    }
                    return {...a, isDone: newValue, dateCompleted: 'N/A'};
                  }
                  return a;
                }))
              }
            />
            <View pressHandler={editItem}>
              <Text style={styles.itemText}>{item.title}</Text>
              <Text style={styles.itemText}>{"Done:  " + item.isDone}</Text>
              <Text style={styles.itemText}>{"Date due:  " + item.dateDue}</Text>
              <Text style={styles.itemText}>{"Date completed:  " + item.dateCompleted}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Button color={'#E57200'} title="Add Item" onPress={addItem}></Button>
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
    backgroundColor: '#232D4B',
    fontSize: 24,
    borderRadius: 4
  },
  itemText: {
    color: 'white'
  },
  list: {
    marginHorizontal: 4,
    marginBottom: 24
  }
}); export default BucketList;

function getCurrentDate() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  return yyyy + '-' + mm + '-' + dd;
}

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
*
*  Title: Update an Object's Property in Array of Objects in JS
*  Author: Borislav Hadzhiev
*  Date: Jul 25, 2022
*  URL: https://bobbyhadz.com/blog/javascript-update-property-of-object-in-array
*
*  Title: How do I get the current date in JavaScript?
*  Author: Samuel Meddows
*  Date: Feb 8, 2011
*  URL: https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript?page=1&tab=scoredesc#tab-top
***************************************************************************************/