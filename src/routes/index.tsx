import React from 'react';
import {View} from 'react-native';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import styles from '../styles/global';
import Load from '../components/Load';
import {useAuth} from '../contexts/auth';

const Routes: React.FC = () => {
  const {signed, loading} = useAuth();

  if (loading) {
    return (
      <View style={styles.containerCenter}>
        <Load />
      </View>
    );
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
