import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {createBottomTabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
export class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    );
  }
}
export class Settings extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Settings</Text>
      </View>
    );
  }
}
export default createBottomTabNavigator({
  Home:{
    screen: Home,
  navigationOptions:{
      tabBarLabel: 'Home',
      tabBarIcon: ({tintColor}) => (
      <View>
        <Icon name="ios-home" size={30} color={tintColor} />
      </View>
      )
    }
  },
  Settings:{
    screen: Settings,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({tintColor}) => (
      <View>
        <Icon name="ios-settings" size={30} color={tintColor} />
      </View>
      )
    }
  }
},{
  initialRouteNAme: 'Home',
  order: ['Settings', 'Home'],
  //navigation for complete tab navigator
  navigationOptions:{
    tabBarVisible: true
  },
  tabBarOptions:{
    activeTintColor: 'blue',
    inactiveTintColor: 'black',
  },
  tabBarIconOptions: {
    activeTintColor: 'blue',
    inactiveTintColor: 'black',
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});
