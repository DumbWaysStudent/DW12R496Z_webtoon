import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Details from './../screens/Details'
import MoreDetails from './../screens/MoreDetails';
import Creation from './../screens/Creation';
import Create from './../screens/Create';
import CreateEpisode from './../screens/CreateEpisode';
import Edit from './../screens/Edit';
import EditEpisode from './../screens/EditEpisode';


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
  },CreateEpisode: {
    screen: CreateEpisode,
    navigationOptions: ({ navigation }) => ({
      title:'Create Episode',
    }),
  },Edit: {
    screen: Edit,
    navigationOptions: ({ navigation }) => ({
      title:'Edit Webtoon',
    }),
  },EditEpisode: {
    screen: EditEpisode,
    navigationOptions: ({ navigation }) => ({
      title:'Edit Episode',
    }),
  }  

});

export default createAppContainer(UnauthNavigator);