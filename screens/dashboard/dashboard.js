import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity,
FlatList, Dimensions  } from 'react-native';
import {Icon, Card, CardItem, Body } from 'native-base'
import SettlementChart from './settlementChart';

  const listData = [
    {
      id: '1',
      name: 'Gopal',
      surName: 'Pala',
      handle: '@gopala',
      days: 2,
      text: '',
      likes: 90,
      money: '$120',
      other: 34
    },
    {
      id: '2',
      name: 'Gopal',
      surName: 'Pala',
      handle: '@gopala',
      days: 2,
      text: '',
      likes: 90,
      money: '$120',
      other: 34
    },
    {
      id: '3',
      name: 'Gopal',
      surName: 'Pala',
      handle: '@gopala',
      days: 2,
      text: '',
      likes: 90,
      money: '$120',
      other: 34
    },
    {
      id: '4',
      name: 'Gopal',
      surName: 'Pala',
      handle: '@gopala',
      days: 2,
      text: '',
      likes: 90,
      money: '$120',
      other: 34
    },
    {
      id: '5',
      name: 'Gopal',
      surName: 'Pala',
      handle: '@gopala',
      days: 2,
      text: '',
      likes: 90,
      money: '$120',
      other: 34
    },
    {
      id: '6',
      name: 'Gopal',
      surName: 'Pala',
      handle: '@gopala',
      days: 2,
      text: '',
      likes: 90,
      money: '$120',
      other: 34
    },
    {
      id: '7',
      name: 'Gopal',
      surName: 'Pala',
      handle: '@gopala',
      days: 2,
      text: '',
      likes: 90,
      money: '$120',
      other: 34
    },
    {
      id: '8',
      name: 'Gopal',
      surName: 'Pala',
      handle: '@gopala',
      days: 2,
      text: '',
      likes: 90,
      money: '$120',
      other: 34
    },
    {
      id: '9',
      name: 'Gopal',
      surName: 'Pala',
      handle: '@gopala',
      days: 2,
      text: '',
      likes: 90,
      money: '$120',
      other: 34
    }
  ]

  const screenWidth = Math.round(Dimensions.get('window').width);
  
  const Dashboard = ({navigation}) => {
    return (<View style={{flexDirection:'column', flex: 1, backgroundColor: '#EEF8FF', paddingLeft: 5}}>
      <SettlementChart />
    {/* <View style={{flex:1}}> */}
      <SafeAreaView style={{flex: 1}}>
        {/* <ScrollView> */}
          <FlatList
            data={listData}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
          /> 
        {/* </ScrollView> */}
      </SafeAreaView>
    {/* </View> */}
    </View>)
  }
  
  const renderItem = ({item, index}) => {
    return(
    <Item title="testiaksf askf lsdjf lasdj flsajdlf jsadljfasl jflsajf lasff" />
    )
  }
  
  const Item = ({ title }) => (
   <Card>
      <CardItem header>
      <View style = {{flexDirection: 'row'}}>
              <View style={{width: 60}}>
                  <Image source={{uri: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png'}}
                  style={{width: 40, height: 40, marginTop: 5, marginLeft: 5, borderRadius: 100/2}} />
              </View> 
          </View>
          <View style={{flex: 1, marginTop: 5}}>
                  <Text style={{color: '#6CC1FC', fontSize: 18}}> Gopalakrishna Pala </Text>
                  <Text style={{color: '#6CC1FC'}}> @gopal -2 days ago</Text>
              </View>
      </CardItem>
      <CardItem>
        <Body>
          <Text style={{color: '#6CC1FC', fontSize: 18}}>
            You have to pay $1278 to gopal.0257@gamil.com to pokerrrr21
          </Text>
        </Body>
      </CardItem>
      <CardItem footer>
      <View style = {{flexDirection: 'row', flex: 1}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Icon type='FontAwesome' name='heart' color='blue' />
          <Text style={{color: '#6CC1FC', fontSize: 18}}>90</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Icon type='FontAwesome' name='usd' color='blue' />
          <Text style={{color: '#6CC1FC', fontSize: 18}}>90</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Icon type='FontAwesome' name='tag' color='blue' />
          <Text style={{color: '#6CC1FC', fontSize: 18}}>90</Text>
        </View>
      </View>
      </CardItem>
    </Card>
  )
  
  export default Dashboard;
  