import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  StatusBar,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../../../styles/global';
import colors from '../../../styles/colors';
import {useAuth} from '../../../contexts/auth';

const Login: React.FC = () => {
  const {signed, signIn} = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  console.log(signed);

  function handleSignIn() {
    signIn(username, password);
  }

  function handleEsqueciSenha() {
    navigation.navigate('RememberPassword');
  }

  return (
    <View style={styles.containerCenter}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />

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
