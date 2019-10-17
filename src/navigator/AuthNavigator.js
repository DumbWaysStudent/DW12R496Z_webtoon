import React, { Component } from 'react'
import { Icon } from 'native-base';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Details from './../screens/Details'
import MoreDetails from './../screens/MoreDetails';
import Creation from './../screens/Creation';
import Create from './../screens/Create';
import CreateEpisode from './../screens/CreateEpisode';
import Edit from './../screens/Edit';
import EditEpisode from './../screens/EditEpisode';

import ForYou from './../screens/ForYou';
import Favorite from './../screens/Favorite';
import Profile from './../screens/Profile';

const stackNavigator = createStackNavigator({
  Details: {
    screen: Details,
    navigationOptions: ({ navigation }) => ({
      header:null
    }),
  },MoreDetails: {
    screen: MoreDetails,
    navigationOptions: ({ navigation }) => ({
      header:null
    }),
  },Creation: {
    screen: Creation,
    navigationOptions: ({ navigation }) => ({
      title:'My Weebtoon',
    }),
  },Create: {
    screen: Create,
    navigationOptions: ({ navigation }) => ({
      title:'Create Webtoon',
    }),
  },CreateEpisode: {
    screen: CreateEpisode,
    navigationOptions: ({ navigation }) => ({
      title:'Create Episode',
    }),
  },Edit: {
    screen: Edit,
    navigationOptions: ({ navigation }) => ({
      title:'Edit Webtoon',
    }),
  },EditEpisode: {
    screen: EditEpisode,
    navigationOptions: ({ navigation }) => ({
      title:'Edit Episode',
    }),
  }  

});


const buttomTabNavigator =  createBottomTabNavigator({ 

  ForYou: { 
        screen: ForYou,
        navigationOptions: {
            tabBarLabel: 'For You'
        } 
    },
    Favorite: { screen: Favorite },
    Profile:{ screen: Profile }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName,iconColor;
        if (routeName === 'ForYou') {
          iconName = `apps${focused ? '' : ''}`;
        } else if (routeName === 'Favorite') {
          iconName = `star${focused ? '' : ''}`;
        }else if (routeName === 'Profile') {
            iconName = `person${focused ? '' : ''}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Icon name={iconName} size={25} style={{fontSize: 30, color: 'blue' }}/>;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  });


export default Drawer = createStackNavigator({
  buttomTabNavigator: {
    screen: buttomTabNavigator,
    navigationOptions: ({ navigation }) => ({
      header:null
    }),
  },  
  stackNavigator: {
    screen: stackNavigator,
    navigationOptions: ({ navigation }) => ({
      header:null,
    }),
  },
})