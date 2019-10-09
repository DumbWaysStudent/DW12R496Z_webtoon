import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './../screens/Login'


const UnauthNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: ({ navigation }) => ({
      title: 'Login'
    }),
  }
});

export default createAppContainer(UnauthNavigator);