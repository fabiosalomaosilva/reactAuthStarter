import React, {useContext} from 'react';
import {View, Button} from 'react-native';
import AuthContext from '../../../contexts/auth';

const Login: React.FC = () => {
  const {signed, signIn} = useContext(AuthContext);

  console.log(signed);

  function handleSignIn() {
    console.log('passou aqui... ohhh');

    signIn();
  }

  return (
    <View>
      <Button title="Entrar" onPress={handleSignIn} />
    </View>
  );
};
export default Login;
