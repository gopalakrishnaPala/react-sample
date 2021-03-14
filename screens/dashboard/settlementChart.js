import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity,
FlatList, Dimensions  } from 'react-native';
import {Icon, Card, CardItem, Body } from 'native-base';
import PureChart from 'react-native-pure-chart';

const screenWidth = Math.round(Dimensions.get('window').width);

const data = [
    { seriesName: 'Online Settlements', data: [
      {x: 'Jan', y: 30 }, {x: 'Feb', y: 30 }, {x: 'Mar', y: 30 }, {x: 'Apr', y: 30 }, {x: 'May', y: 30 }], color: '#0E95FA'},
    { seriesName: 'Live Settlements', data: [
      {x: 'Jan', y: 40 }, {x: 'Feb', y: 50 }, {x: 'Mar', y: 20 }, {x: 'Apr', y: 10 }, {x: 'May', y: 30 }], color: '#B2DDFD'}
  ]

  const SettlementChart = () => {
      return(
        <View>
        <View style={{height: 30, marginTop: 5}}>
        <View style={{height: 30, backgroundColor: '#ffffff', flexDirection:'row', flex: 1}}>
          <View style={{flex:1, flexDirection: 'row'}}>
          <Icon type='FontAwesome' name='circle' color='blue' style={{fontSize: 10, color: 'blue'}} />
          <Text style={{flex: 1}}> Online Settlements</Text>
          </View>
          <View style={{flex:1, flexDirection: 'row'}}>
          <Icon type='FontAwesome' name='circle' color='blue' style={{fontSize: 10, color: 'blue'}} />
          <Text style={{flex: 1}}> abcd</Text>
          </View>
        </View>
        </View>
        <PureChart type={'bar'}
          data={data}
          width={screenWidth}
          height= {120 }
          />
      </View>
      )
  }

  export default SettlementChart;