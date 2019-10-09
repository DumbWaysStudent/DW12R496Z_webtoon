import React, { Component } from 'react';
import { Icon } from 'native-base';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import ForYou from './../screens/ForYou';
import Favorite from './../screens/Favorite';
import Profile from './../screens/Profile';

const ForYouStack = createStackNavigator({
  ForYou: {
    screen: ForYou,
    navigationOptions: ({ navigation }) => ({
      header: null
    }),
  }
});

const FavoriteStack = createStackNavigator({
  Favorite: {
    screen: Favorite,
    navigationOptions: ({ navigation }) => ({
      title: 'Favorite'
    }),
  }
});

const ProfileStack = createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => ({
      title: 'Profile'
    }),
  }
});

export default createBottomTabNavigator({ 
    ForYou: { 
        screen: ForYouStack,
        navigationOptions: {
            tabBarLabel: 'For You'
        } 
    },
    Favorite: { screen: FavoriteStack },
    Profile:{ screen: ProfileStack }
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