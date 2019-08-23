import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import EventsScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import EventDetailScreen from '../screens/EventDetailScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const EventsStack = createStackNavigator(
  {
    Events: EventsScreen,
    EventDetail: EventDetailScreen,
  },
  config
);

EventsStack.navigationOptions = {
  tabBarLabel: 'Events',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'ios-list'}
    />
  ),
};

EventsStack.path = '';

// 2.

const ProfileStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={'md-person'} />
  ),
};

ProfileStack.path = '';

// 3.

const MoreStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

MoreStack.navigationOptions = {
  tabBarLabel: 'More',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={'ios-more'} />
  ),
};

MoreStack.path = '';

const tabNavigator = createBottomTabNavigator({
  EventsStack,
  ProfileStack,
  MoreStack,
});

tabNavigator.path = '';

export default tabNavigator;
