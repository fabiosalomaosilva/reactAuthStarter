import React, {useContext} from 'react';
import {View, StatusBar, Image, Button} from 'react-native';
import AuthContext from '../../contexts/auth';

import styles from '../../styles/global';
import colors from '../../styles/colors';

const Painel: React.FC = () => {
  const {signOut} = useContext(AuthContext);

  function handleSignOut() {
    signOut();
  }

  return (
    <View style={styles.containerCenter}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />

      <Image source={require('../../assets/logo.jpg')} style={styles.logo} />

      <Button title="Sair" onPress={handleSignOut} styles={styles.botao} />
    </View>
  );
};

export default Painel;
