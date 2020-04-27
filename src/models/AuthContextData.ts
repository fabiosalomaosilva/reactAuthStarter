import {User} from './User';

export interface AuthContextData {
  signed: boolean;
  user: User | null;
  loading: boolean;
  signIn(username: string, password: string): Promise<void>;
  signOut(): void;
}
