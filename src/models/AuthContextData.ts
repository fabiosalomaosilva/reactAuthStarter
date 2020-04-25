import User from './User';

export default interface AuthContextData {
  signed: boolean;
  user: User | null;
  signIn(username: string, password: string): Promise<void>;
}
