import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Details from './../screens/Details'
import MoreDetails from './../screens/MoreDetails';
import Creation from './../screens/Creation';
import Create from './../screens/Create';


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
  },Create: {
    screen: Create,
    navigationOptions: ({ navigation }) => ({
      title:'Create Webtoon',
    }),
  }   
});

export default createAppContainer(UnauthNavigator);