import React from 'react';
import {View, StatusBar, Image, Button} from 'react-native';

import styles from '../../styles/global';
import colors from '../../styles/colors';
import {useAuth} from '../../contexts/auth';

const Painel: React.FC = () => {
  const {signOut} = useAuth();

  function handleSignOut() {
    signOut();
  }

  return (
    <View style={styles.containerCenter}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />

      <Image source={require('../../assets/logo.jpg')} style={styles.logo} />

      <Button title="Sair" onPress={handleSignOut} />
    </View>
  );
};

export default Painel;
