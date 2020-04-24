import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthRoutes from './routes/auth.routes';
import {AuthProvider} from './contexts/auth';

const App: React.FC = () => (
  <NavigationContainer>
    <AuthProvider>
      <AuthRoutes />
    </AuthProvider>
  </NavigationContainer>
);

export default App;
