import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView, SectionList, ScrollView, Image, TouchableOpacity,
    FlatList, Button, Alert  } from 'react-native';
import {Icon, Card, CardItem, Body } from 'native-base'
import { createStackNavigator} from '@react-navigation/stack';

const DATA = [
        {
          title: "Online Games",
          data: [
              {icon: "picture-o", title: "Pokerrr2" },
              {icon: "picture-o", title: "All others"}
            ]
        },
        {
          title: "Live Games",
          data: [{icon: 'picture-o', title: "Live Poker"}]
        }
      ];

const Item = ({ item, navigation}) => (
        <View style={styles.item}>
          <Icon type='FontAwesome' name={item.icon}  style={{fontSize: 26}} />
          <Text style={styles.title}>{item.title}</Text>
          <TouchableOpacity style={{fontSize: 18, flex: 1, textAlign: 'right',
        textAlignVertical: 'center', paddingRight: 10}}
        onPress={() => navigation.navigate('CreateSettlement')} >
          <Icon type='FontAwesome' name='chevron-right'   /> 
        </TouchableOpacity>
        </View>
      );

const NewSettlementComponent = ({navigation}) =>
{
    return (
        <SafeAreaView style={styles.container}>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => index}
      renderItem={({ item }) => <Item item={item} navigation={navigation} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  </SafeAreaView>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      marginHorizontal: 16
    },
    item: {
        flexDirection: 'row',
        flex: 1,
        fontSize: 32,
        backgroundColor: "#fff",
        paddingTop: 10,
        paddingLeft: 10
    },
    header: {
      backgroundColor: "blue",
      color: '#fff',
      padding: 20,
      marginVertical: 8
    },
    title: {
      fontSize: 24,
      marginLeft: 10,
      color: 'blue'
    }
  });

  const CreateSettlement = ({navigation}) => {
    return (
    <View>
    <Text>Create Settlement </Text>
            <Button
            title="Next"
            onPress={() => navigation.navigate('MapPlayers')}/>
            </View>)
  }
  
  const MapPlayers = ({navigation}) => {
    return (<View>
        <Text>Create Settlement </Text>
            <Button
            title="Previous"
            onPress={() => navigation.navigate('CreateSettlement')}/>
                <Button
                title="Next"
                onPress={() => navigation.navigate('VerifyPayments')}/>
                </View>)
  }
  
  const VerifyPayments = () => {
    return (<Text>Verify Payments</Text>)
  }
  
  const SelectHost = () => {
    return (<Text>Select Host</Text>)
  }
  
export default NewSettlementComponent;