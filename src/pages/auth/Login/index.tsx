import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  StatusBar,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AuthContext from '../../../contexts/auth';
import styles from '../../../styles/global';
import colors from 'src/styles/colors';

const Login: React.FC = () => {
  const {signed, signIn} = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  console.log(signed);

  function handleSignIn() {
    console.log('passou aqui... ohhh');

    signIn(username, password);
  }

  function handleEsqueciSenha() {
    navigation.navigate('RememberPassword');
  }

  return (
    <View style={styles.containerCenter}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F9FC" />

      <Image source={require('../../../assets/logo.jpg')} style={styles.logo} />

      <Text style={styles.HeaderForm}>Informar dados do usuário</Text>

      <TextInput
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        textContentType="emailAddress"
        returnKeyType={'next'}
        onChangeText={setUsername}
        value={username}
        style={styles.input}
      />
      <TextInput
        placeholder="Senha"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
        onChangeText={setPassword}
        value={password}
        style={styles.input}
      />
      <TouchableOpacity style={styles.botao} onPress={handleSignIn}>
        <Text style={styles.label}>Entrar</Text>
      </TouchableOpacity>
      <Text style={styles.link} onPress={handleEsqueciSenha}>
        Esqueci a senha
      </Text>
    </View>
  );
};
export default Login;