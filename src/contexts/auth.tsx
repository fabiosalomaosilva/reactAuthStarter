import React, {createContext, useState} from 'react';
import AuthContextData from '../models/AuthContextData';

import Api from '../services/Api';
import User from 'src/models/User';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<User | null>(null);

  async function signIn(username: string, password: string) {
    const dados = {
      username: username,
      password: password,
    };
    console.log(dados);

    const auth = await Api.post<User>('/api/account/token', dados);

    const user: User = {
      access_token: auth.data.access_token,
      email: auth.data.email,
      fotoUri: auth.data.fotoUri,
      nomeCompleto: auth.data.nomeCompleto,
    };

    setUser(user);
  }
  return (
    <AuthContext.Provider value={{signed: !!user, user, signIn}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
