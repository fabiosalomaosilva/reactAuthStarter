import React from 'react';
import Painel from '../pages/Painel';

import {createStackNavigator} from '@react-navigation/stack';
import colors from '../styles/colors';

const Stack = createStackNavigator();

const AppRoutes: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Painel"
      component={Painel}
      options={{
        headerStyle: {elevation: 0, backgroundColor: colors.primary},
        headerTintColor: colors.white,
        headerTitleAlign: 'center',
        headerTitleStyle: {fontSize: 18},
      }}
    />
  </Stack.Navigator>
);

export default AppRoutes;
