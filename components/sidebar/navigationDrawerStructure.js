import * as React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import Styles from '../../styles/navigation';

const NavigationDrawerStructure = (props) => {

  const toggleDrawer = () => {
      props.navigationProps.toggleDrawer();
    };
  
    return (
      <View>
        <TouchableOpacity onPress={toggleDrawer}>
          <Icon ios='ios-menu' android="md-menu" style={Styles.menuIcon}/>
        </TouchableOpacity>
      </View>
    )
}

export default NavigationDrawerStructure;