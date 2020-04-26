import React, {useContext} from 'react';
import {View} from 'react-native';
import AuthContext from '../contexts/auth';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import styles from '../styles/global';
import Load from '../components/Load';

const Routes: React.FC = () => {
  const {signed, loading} = useContext(AuthContext);

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
