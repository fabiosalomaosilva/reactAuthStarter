import User from './User';

export default interface AuthContextData {
  signed: boolean;
  user: User | null;
  signIn(): Promise<void>;
}
