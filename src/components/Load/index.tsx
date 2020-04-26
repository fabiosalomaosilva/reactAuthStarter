import React from 'react';
import {SafeAreaView} from 'react-native';
import Lottie from 'lottie-react-native';
import load from '../../assets/load.json';
import styles from '../../styles/global';

const App: React.FC = () => (
  <SafeAreaView style={styles.containerCenter}>
    <Lottie
      source={load}
      resizeMode="contain"
      style={styles.load}
      autoPlay
      loop
    />
  </SafeAreaView>
);

export default App;
