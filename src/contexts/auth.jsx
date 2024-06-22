import { createContext, useContext, useEffect, useState } from 'react';

import {
  AUTH_SESSION_KEY_ID,
  AUTH_SESSION_KEY_TOKEN,
} from '../utils/constants.js';

export const AuthContext = createContext({});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState({
    id: sessionStorage.getItem(AUTH_SESSION_KEY_ID),
    token: sessionStorage.getItem(AUTH_SESSION_KEY_TOKEN)
  });

  useEffect(() => {
    setUser({
      id: sessionStorage.getItem(AUTH_SESSION_KEY_ID),
      token: sessionStorage.getItem(AUTH_SESSION_KEY_TOKEN)
    })
  }, []);

  function logIn({
    id, token
  }) {
    setUser({ id: id.toString(), token: token.toString() });

    sessionStorage.setItem(AUTH_SESSION_KEY_ID, id.toString());
    sessionStorage.setItem(AUTH_SESSION_KEY_TOKEN, token.toString());
  }

  function logOut() {
    setUser({ id: '', token: '' });

    sessionStorage.removeItem(AUTH_SESSION_KEY_ID);
    sessionStorage.removeItem(AUTH_SESSION_KEY_TOKEN);
  }

  return (
    <AuthContext.Provider value={{
      user,
      isLoggedIn: user.token && user.id,
      logIn,
      logOut
    }}>
      {children}
    </AuthContext.Provider>
  );
}