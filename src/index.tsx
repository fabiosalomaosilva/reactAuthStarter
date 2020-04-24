import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthRoutes from './routes/auth.routes';

const App: React.FC = () => (
  <NavigationContainer>
    <AuthRoutes />
  </NavigationContainer>
);

export default App;
