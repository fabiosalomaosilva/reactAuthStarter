import React from 'react';
import Login from '../pages/auth/Login';
import ChangePassword from '../pages/auth/ChangePassword';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="ChangePassword" component={ChangePassword} />
  </Stack.Navigator>
);

export default AuthRoutes;
