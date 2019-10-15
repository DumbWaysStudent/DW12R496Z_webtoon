import { createAppContainer,createSwitchNavigator } from 'react-navigation';

import UnauthNavigator from './UnauthNavigator'
import AuthNavigator from './AuthNavigator'
import DetailsNavigator from './DetailsNavigator'
const RootNavigator = createSwitchNavigator({
  UnauthNavigator,
  AuthNavigator,
  DetailsNavigator
});

export default createAppContainer(RootNavigator);
