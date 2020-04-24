import React, {createContext, useState} from 'react';
import AuthContextData from '../models/AuthContextData';

import Api from '../services/Api';
import User from 'src/models/User';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<User | null>(null);

  async function signIn() {
    const dados = {
      username: '',
      password: '',
    };

    const auth = await Api.post<User>('/api/account/token', dados);
    setUser(auth.data);

    console.log(user);
  }
  return (
    <AuthContext.Provider value={{signed: !!user, user, signIn}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
