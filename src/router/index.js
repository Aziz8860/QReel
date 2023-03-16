import React from 'react';
import {StyleSheet, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Home,
  Splash,
  Profile,
  Notification,
  Scan,
  UserLogin,
  UserRegister,
  CashierLogin,
  CashierRegister,
  ExpenseChart,
  TransactionHistory,
  TransactionDetail,
  CashierHome,
  ShowQR,
  Budgeting,
  Redeem,
  ScannerComp
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
      <Tab.Screen name="Budgeting" component={Budgeting} options={{headerShown: false}} />
      <Tab.Screen name="Scan" component={Scan} options={{headerShown: false}} />
      <Tab.Screen name="Redeem" component={Redeem} options={{headerShown: false}} />
      
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
        name="ScannerComp"
        component={ScannerComp}
        options={{
          headerBackImageSource: require('../assets/icons/arrow-back-png.png'),
          title: 'Scan QR Code',
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
      <Stack.Screen
        name="UserLogin"
        component={UserLogin}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UserRegister"
        component={UserRegister}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CashierLogin"
        component={CashierLogin}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Budgeting"
        component={Budgeting}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Redeem"
        component={Redeem}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CashierRegister"
        component={CashierRegister}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ExpenseChart"
        component={ExpenseChart}
        options={{
          headerBackImageSource: require('../assets/icons/arrow-back-png.png'),
          title: 'Grafik Pengeluaran',
          headerTitleStyle: {
            fontFamily: fonts.primary.semiBold,
            fontSize: 18,
          },
        }}
      />
      <Stack.Screen
        name="TransactionHistory"
        component={TransactionHistory}
        options={{
          headerBackImageSource: require('../assets/icons/arrow-back-png.png'),
          title: 'Riwayat Transaksi',
          headerTitleStyle: {
            fontFamily: fonts.primary.semiBold,
            fontSize: 18,
          },
        }}
      />
      <Stack.Screen
        name="TransactionDetail"
        component={TransactionDetail}
        options={{
          headerBackImageSource: require('../assets/icons/arrow-back-png.png'),
          title: 'Detail Transaksi',
          headerTitleStyle: {
            fontFamily: fonts.primary.semiBold,
            fontSize: 18,
          },
        }}
      />
      <Stack.Screen
        name="CashierHome"
        component={CashierHome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ShowQR"
        component={ShowQR}
        options={{
          headerBackImageSource: require('../assets/icons/arrow-back-png.png'),
          title: 'Tampilkan QR',
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
