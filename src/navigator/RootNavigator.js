import { createAppContainer,createSwitchNavigator } from 'react-navigation';

import UnauthNavigator from './UnauthNavigator'
import AuthNavigator from './AuthNavigator'

const RootNavigator = createSwitchNavigator({
  UnauthNavigator,
  AuthNavigator
});

export default createAppContainer(RootNavigator);
