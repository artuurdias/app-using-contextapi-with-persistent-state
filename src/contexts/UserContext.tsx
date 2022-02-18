import React, { createContext, useContext } from 'react';

import usePersistedState from '../hooks/usePersistedState';

import { User } from '../types';

type IUserContextData = {
  user: User | null;
  signIn: (user: User) => void;
  signOut: () => void;
}

export const UserContext = createContext<IUserContextData | null>(null);

const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = usePersistedState<User | null>('user', null);

  const contextValue: IUserContextData = {
    user: user,
    signIn: (user: User) => setUser(user),
    signOut: () => setUser(null),
  }

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;

export const useUserContext = () => useContext(UserContext);