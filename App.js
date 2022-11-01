import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BucketList from './components/bucketlist';
import AddItem from './components/additem';
import EditItem from './components/edititem';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="BucketList"
          component={BucketList}
          options={{ title: "List View", headerShown: false }}
        />
        <Stack.Screen 
          name="AddItem"
          component={AddItem}
          options={{ title: "Add New Item" }}
        />
        <Stack.Screen 
          name="EditItem"
          component={EditItem}
          options={{ title: "Edit Existing Item" }}
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