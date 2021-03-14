import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';

// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator,  DrawerContentScrollView, DrawerItemList  } from '@react-navigation/drawer';
// import { createStackNavigator} from '@react-navigation/stack';
// import { Icon, Card, CardItem, Body } from 'native-base';
// import PureChart from 'react-native-pure-chart';
// import CommonStyles from './components/styles/commonStyles';
// import Sidebar  from './components/sidebar/sidebar';
// import Dashboard from './components/screens/dashboard';
// import NewSettlement from './components/screens/newSettlement';

import { RecoilRoot } from 'recoil';

import Drawer from './components/sidebar/drawer';

// const Stack = createStackNavigator();


export default function App() {
  return (
    <RecoilRoot>
      <Drawer />
    </RecoilRoot>
  );
}


