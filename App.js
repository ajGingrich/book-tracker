
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import HomeScreen from './pages/HomeScreen';
import ProfileScreen from './pages/ProfileScreen';
import ConnectScreen from './pages/ConnectScreen';
import ListScreen from './pages/ListScreen';

const MainNavigator = createMaterialTopTabNavigator({
  Home: { screen: HomeScreen },
  List: { screen: ListScreen },
  Connect: { screen: ConnectScreen },
  Profile: { screen: ProfileScreen },
}, {
  inbitialRouteName: 'Home',
  tabBarOptions: {
    activeTintColor: '#F44336',
  }
});

const App = createAppContainer(MainNavigator);

export default App;
