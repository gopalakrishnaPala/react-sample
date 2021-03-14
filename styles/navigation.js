import React from 'react';
import { StyleSheet } from 'react-native';
import { Colors, FontSizes } from './blueTheme';

const Styles = StyleSheet.create({
    ...Colors,
    ...FontSizes,
    menuIcon: {
        fontSize: 32, 
        color: Colors.primaryColor
    }
})


export default Styles;