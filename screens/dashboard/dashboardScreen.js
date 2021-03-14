import * as React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import NavigationDrawerStructure from '../../components/sidebar/navigationDrawerStructure';
import Dashboard from './dashboard';
import Styles from './styles';

const Stack = createStackNavigator();

const DashboardScreen = ({navigation}) => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name = "Dashboard"
          component = {Dashboard}
          options = {{
            title: "Dashboard Activity",
            headerLeft: () => (
                <NavigationDrawerStructure
                  navigationProps={navigation}
                />
            ),
            headerStyle: {
              backgroundColor: '#B2DDFD',
              textAlign: 'center',
              borderBottomWidth: 0
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold'
            }
          }}
          />
      </Stack.Navigator>
    )
  }

  export default DashboardScreen;