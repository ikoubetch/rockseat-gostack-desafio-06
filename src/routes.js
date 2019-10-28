import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import User from './pages/User';
import ShowRepo from './pages/ShowRepo';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      User,
      ShowRepo,
    },
    {
      headerLayoutPreset: 'center',
      defaultNavigationOptions: {
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: '#7159c1',
        },
        headerTintColor: '#fff',
      },
    }
  )
);

export default Routes;
