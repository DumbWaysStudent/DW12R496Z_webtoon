import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './../screens/Login'
import Register from './../screens/Register'


const UnauthNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: ({ navigation }) => ({
      title: 'Login'
    }),
  },Register: {
    screen: Register,
    navigationOptions: ({ navigation }) => ({
      title: 'Register'
    }),
  }
});

export default createAppContainer(UnauthNavigator);