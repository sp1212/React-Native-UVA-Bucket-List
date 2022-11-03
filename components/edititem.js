import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Alert, Button } from 'react-native';
import DatePicker from 'react-native-date-picker';
import Header from './header';

const EditItem = ({ navigation, route }) => {
    const titles = route.params.titles;
    const titleOld = route.params.title;

    const tempDate = new Date(route.params.dateDue);
    tempDate.setDate(tempDate.getDate() + 1);

    const [title, setTitle] = useState(titleOld);
    const [dateDue, setDateDue] = useState(tempDate);
    const isDone = route.params.isDone;
    const dateCompleted = route.params.dateCompleted;

    const completionStatus = (status) => {
      if (status) {
        return 'Completed ' + dateCompleted;
      } else {
        return 'Incomplete';
      }
    };

    const handleTitle = (text) => setTitle(text);

    const editItem = () => {
      if (titles.includes(title) && titleOld.localeCompare(title) !== 0) {
        Alert.alert('Invalid Title', 'An item with the title "' + title +'" already exists.  Please enter a unique title.')
      } else if (title.length < 1 || title.length > 30) {
        Alert.alert('Invalid Title', 'Please enter a title between 1 and 30 characters in length.')
      } else {
        navigation.navigate('BucketList', { actionType: 'edit', title, dateDue: formatDate(dateDue), isDone, dateCompleted, titleOld });
      }
    };

    const deleteItem = () => {
      Alert.alert("Confirm Delete", "Are you sure you'd like to delete this item?", [
        {
          text: "Cancel",
          style: "cancel"
        },
        { text: "Confirm", onPress: () => navigation.navigate('BucketList', { actionType: 'delete', title: titleOld }) }
      ])
    };

    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>{"Edit Item"}</Text>
        <View>
          <Text style={styles.dueText}>{"Item Title"}</Text>
          <TextInput
            style={styles.inputText}
            placeholder={"Item Title"}
            value={title}
            onChangeText={handleTitle} />
        </View>
        <View>
          <Text style={styles.dueText}>{"Due Date"}</Text>
          <View style={styles.sideMargins}>
            <DatePicker
              date={dateDue}
              onDateChange={setDateDue}
              mode='date' />
            </View>
        </View>
        <Text style={styles.dueText}>{completionStatus(isDone)}</Text>
        <View style={styles.sideMargins}>
          <Button color={'#E57200'} title="Edit Item" onPress={editItem}></Button>
          </View>
        <View style={styles.sideMargins}>
          <Button color={'red'} title="Delete" onPress={deleteItem}></Button>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'space-evenly'
    },
    sideMargins: {
      marginLeft: 20,
      marginRight: 20,
      flexDirection: 'row',
      justifyContent: 'center',
      alignContent: 'center',
    },
    headerText: {
      fontSize: 40,
      color: 'black',
      textAlign: 'center'
    },
    dueText: {
      fontSize: 22,
      color: 'black',
      textAlign: 'center',
      marginBottom: 6
    },
    inputText: {
      fontSize: 18,
      textAlign: 'center'
    }
  }); export default EditItem;

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