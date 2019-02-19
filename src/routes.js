import { createAppContainer, createStackNavigator } from 'react-navigation';
import { colors, metrics } from '~/styles';

import Main from './pages/main';
import Search from './pages/search';
import Album from './pages/album';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Search,
      Album,
    },
    {
      navigationOptions: {
        headerStyle: {
          backgroundColor: colors.secondary,
          borderBottomWidth: 0,
        },
        headerTintColor: colors.white,
        headerBackTitle: null,
      },
    },
  ),
);

export default Routes;
