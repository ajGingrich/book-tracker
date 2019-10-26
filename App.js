
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './pages/HomeScreen';
import ProfileScreen from './pages/ProfileScreen';
import ConnectScreen from './pages/ConnectScreen';
import ListScreen from './pages/ListScreen';

import Header from './components/Header/Header';

const TabNavigator = createMaterialTopTabNavigator({
  Home: { screen: HomeScreen },
  List: { screen: ListScreen },
  Connect: { screen: ConnectScreen },
  Profile: { screen: ProfileScreen },
}, {
  // tabBarComponent: props => <Header {...props} />,
  inbitialRouteName: 'Home',
  tabBarOptions: {
    activeTintColor: '#F44336',
  }
});

const StackNavigator = createStackNavigator({
  Home: {
    screen: TabNavigator,
    navigationOptions: { header: () => <Header /> }
  },
});


const App = createAppContainer(StackNavigator);

export default App;
