import React from 'react';
import Login from '../pages/auth/Login';
import RememberPassword from '../pages/auth/RememberPassword';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="RememberPassword" component={RememberPassword} />
  </Stack.Navigator>
);

export default AuthRoutes;
