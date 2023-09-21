import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {View} from 'react-native';
// Importe suas telas
import Login from '../Main/Login/index';
import DashboardScreen from '../Main/Dashboard/index';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <View style={{height: '100vh'}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" options={{headerShown: false,}} component={Login} />
          <Stack.Screen name="Dashboard" options={{headerShown: false,}} component={DashboardScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ View>
  );
};

export default Navigation;
