import React from 'react';
import Painel from '../pages/Painel';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const AppRoutes: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen name="Painel" component={Painel} />
  </Stack.Navigator>
);

export default AppRoutes;
