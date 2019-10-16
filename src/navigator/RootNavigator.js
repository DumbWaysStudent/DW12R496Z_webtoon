import { createAppContainer,createSwitchNavigator } from 'react-navigation';

import UnauthNavigator from './UnauthNavigator'
import TestNavigator from './TestNavigator'
import DetailsNavigator from './DetailsNavigator'
const RootNavigator = createSwitchNavigator({
  UnauthNavigator,
  TestNavigator
});

export default createAppContainer(RootNavigator);
