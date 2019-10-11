import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Details from './../screens/Details'
import MoreDetails from './../screens/MoreDetails';
import Creation from './../screens/Creation';


const UnauthNavigator = createStackNavigator({
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
  }   
});

export default createAppContainer(UnauthNavigator);