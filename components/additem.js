import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';
import DatePicker from 'react-native-date-picker';
import Header from './header';

const AddItem = ({ navigation, route }) => {
    const titles = route.params.titles;

    const [title, setTitle] = useState('Item Title');
    const [dateDue, setDateDue] = useState(new Date());

    const handleTitle = (text) => setTitle(text);
    const addItem = () => {
      if (titles.includes(title)) {
        Alert.alert('Invalid Title', 'An item with the title "' + title +'" already exists.  Please enter a unique title.')
      } else if (title.length < 1 || title.length > 30) {
        Alert.alert('Invalid Title', 'Please enter a title between 1 and 30 characters in length.')
      } else {
        navigation.navigate('BucketList', { actionType: 'add', title, dateDue: formatDate(dateDue) });
      }
    };

    return (
      <View style={styles.container}>
        <Header />
        <Text>{"New Item"}</Text>
        <TextInput
          placeholder={'Item Title'}
          onChangeText={handleTitle} />
        <Text>{"Due Date"}</Text>
        <DatePicker
          date={dateDue}
          onDateChange={setDateDue}
          mode='date' />
        <Button color={'#E57200'} title="Add Item" onPress={addItem}></Button>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    }
  }); export default AddItem;

  function formatDate(input) {
    let date = new Date(input);
    let yyyy = date.getFullYear();
    let month = date.getMonth() + 1;
    let mm = '00';
    if (month.toString().length < 2) {
      mm = '0' + month.toString();
    } else {
      mm = month.toString();
    }
    let day = date.getDate();
    let dd = '00';
    if (day.toString().length < 2) {
      dd = '0' + day.toString();
    } else {
      dd = day.toString();
    }
    return yyyy + '-' + mm + '-' + dd;
  }