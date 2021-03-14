import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Sidebar from './sidebar';
import { Icon } from 'native-base';
import Routes from './routes';

const DrawerNav = createDrawerNavigator();


const Drawer =() => {
    return (
          <NavigationContainer>
            <DrawerNav.Navigator
              drawerCotentOptions={{
              itemStyle: { marginVerical: 5 }
            }} 
            drawerContent={(props) => <Sidebar {...props} /> }>
              { Routes.map((route, index) => (
                <DrawerNav.Screen name={route.name} component={route.component}
                  options={{ drawerLabel: route.label, drawerIcon: ({ tintColor }) =>
                    <Icon type="FontAwesome" name={route.icon} style={{color: '#fff'}} /> 
                  }} /> 
                ))
              }
            </DrawerNav.Navigator>
          </NavigationContainer>
        );
  }

  export default Drawer;