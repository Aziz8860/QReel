import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Home,
  Splash,
  Profile,
  Transaction,
  Notification,
  Register,
  Login,
  AddCatalogue,
  Receipt,
} from '../pages';
import {BottomNavigator} from '../components';
import {LogoText} from '../assets';
import {fonts} from '../utils';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="Transaction"
        component={Transaction}
        options={{
          headerStyle: {
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.3,
            shadowRadius: 4.65,
            elevation: 8,
          },
          headerTitle: 'Transaction',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: fonts.primary.semiBold,
            fontSize: 18,
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitle: () => (
            <View style={{alignItems: 'center'}}>
              <LogoText />
            </View>
          ),
          headerTitleAlign: 'center',
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Receipt"
        component={Receipt}
        options={{
          headerBackImageSource: require('../assets/icons/arrow-back-png.png'),
          headerStyle: {
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.3,
            shadowRadius: 4.65,
            elevation: 8,
          },
          headerTitle: 'Receipt',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: fonts.primary.semiBold,
            fontSize: 18,
          },
        }}
      />
      <Stack.Screen
        name="AddCatalogue"
        component={AddCatalogue}
        options={{
          headerBackImageSource: require('../assets/icons/arrow-back-png.png'),
          title: 'Add Catalogue',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: fonts.primary.semiBold,
            fontSize: 18,
          },
        }}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          headerBackImageSource: require('../assets/icons/arrow-back-png.png'),
          title: 'Notification',
          headerTitleStyle: {
            fontFamily: fonts.primary.semiBold,
            fontSize: 18,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default Router;
