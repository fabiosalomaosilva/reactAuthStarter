import React, {createContext, useState, useEffect} from 'react';
import AuthContextData from '../models/AuthContextData';

import Api from '../services/Api';
import User from 'src/models/User';
import AsyncStorage from '@react-native-community/async-storage';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storageUser = await AsyncStorage.getItem('@MyApp1:user');
      const storageToken = await AsyncStorage.getItem('@MyApp1:token');

      if (storageUser && storageToken) {
        Api.defaults.headers.Authorization = `Bearer ${storageToken}`;
        setUser(JSON.parse(storageUser));
        setLoading(false);
      }
    }
    loadStorageData();
  }, []);

  async function signIn(username: string, password: string) {
    const dados = {
      username: username,
      password: password,
    };
    setLoading(true);

    const auth = await Api.post<User>('/api/account/token', dados);

    const user: User = {
      access_token: auth.data.access_token,
      email: auth.data.email,
      fotoUri: auth.data.fotoUri,
      nomeCompleto: auth.data.nomeCompleto,
    };

    setUser(user);
    Api.defaults.headers.Authorization = `Bearer ${user.access_token}`;

    await AsyncStorage.setItem('@MyApp1:user', JSON.stringify(user));
    await AsyncStorage.setItem('@MyApp1:token', user.access_token);
    setLoading(false);
  }

  function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }

  return (
    <AuthContext.Provider
      value={{signed: !!user, user, loading, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
