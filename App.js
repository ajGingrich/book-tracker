import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

// Login screens
import Loading from './pages/Loading';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

// App screens
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
  inbitialRouteName: 'Home',
  tabBarOptions: {
    activeTintColor: '#F44336',
  },
});

const StackNavigator = createStackNavigator({
  Loading: { screen: Loading },
  Login: { screen: Login },
  SignUp: { screen: SignUp },
  Main: {
    screen: TabNavigator,
    navigationOptions: { header: <Header /> },
  },
});


const App = createAppContainer(StackNavigator);

export default App;
