import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BucketList from './components/bucketlist';
import AddItem from './components/additem';
import EditItem from './components/edititem';
import Header from './components/header';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="BucketList"
          component={BucketList}
          options={{ title: "UVA Bucket List", headerTitleAlign: 'center', headerTintColor: 'white', headerStyle: { backgroundColor: '#E57200' } }}
        />
        <Stack.Screen 
          name="AddItem"
          component={AddItem}
          options={{ title: "UVA Bucket List", headerTitleAlign: 'center', headerTintColor: 'white', headerStyle: { backgroundColor: '#E57200' } }}
        />
        <Stack.Screen 
          name="EditItem"
          component={EditItem}
          options={{ title: "UVA Bucket List", headerTitleAlign: 'center', headerTintColor: 'white', headerStyle: { backgroundColor: '#E57200' } }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/***************************************************************************************
  *  REFERENCES
  *  Title: Navigating Between Screens
  *  Author: React Native
  *  URL: https://reactnative.dev/docs/navigation
  ***************************************************************************************/