import React from 'react';
import { StyleSheet } from 'react-native';
import { Colors, FontSizes } from './blueTheme';

const Styles = StyleSheet.create({
    ...Colors,
    ...FontSizes,
    container: {
            flex: 1, 
            backgroundColor: Colors.primaryColor,
            color: Colors.textColor, 
            paddingLeft: 15,
            paddingTop: 15
    },
    headerContainer: {
        height: 50, 
        flexDirection: 'row',
        marginBottom: 15,
    },
    profileImage: {
        width: 50, 
        height: 50, 
        marginTop: 5, 
        marginLeft: 5, 
        borderRadius: 100/2
    },
    userDetails: {
        flex: 1,
        marginTop: 5
    },
    userName: {
        color: Colors.textColor, 
        fontSize: FontSizes.primaryText,
        fontWeight: 'bold',
        marginLeft: 5
    },
    userLocation: {
        color: Colors.textColor,
        marginLeft: 5
    }
})


export default Styles;