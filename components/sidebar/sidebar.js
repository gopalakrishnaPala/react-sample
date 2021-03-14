import React from 'react';
import { SafeAreaView, Image, View, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Styles from '../../styles/sidebar';
import {
    useRecoilValue,
  } from 'recoil';
import { userDetailsState } from '../../state/atoms'

const Sidebar = (props) => {
    const userDetails = useRecoilValue(userDetailsState);

    return (
        <SafeAreaView style = {Styles.container}>
        <View style = {Styles.headerContainer}>
            <View>
                <Image source={{uri: userDetails.profilePicture}}
                style={Styles.profileImage} />
            </View> 
            <View style={Styles.userDetails}>
                <Text style={Styles.userName}> {userDetails.firstName} {userDetails.lastName}</Text>
                <Text style={Styles.userLocation}> {userDetails.city}, {userDetails.state}</Text>
            </View>
        </View>

        <DrawerContentScrollView {...props}>
            <DrawerItemList 
                inactiveTintColor='#fff'
                activeTintColor='#fff' 
                {...props} />
        </DrawerContentScrollView>
        </SafeAreaView>
    )
}

export default Sidebar
