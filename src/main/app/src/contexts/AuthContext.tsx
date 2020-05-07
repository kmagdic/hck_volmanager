import React, { createContext, useState } from "react";

export interface User {
  username?: string;
  admin?: boolean;
  changeCheck?: boolean;
  changeStatus?: boolean;
  exportAll?: boolean;
  exportForCheck?: boolean;
}

export interface UserAuth {
  isAuth: boolean;
  user?: User;
}

export interface Auth {
  isAuth: boolean;
  user?: User;
  login?: any;
  logout?: any;
}

const NonAuthUser: UserAuth = {
  isAuth: false,
}

export const AuthContext = createContext<Auth>({ isAuth: false });

export const AuthProvider = ({ children }: any) => {
  const [ authUser, setAuthUser ] = useState<UserAuth>({ isAuth: false });

  const login = (user: User) => {
    setAuthUser({...{ user }, ...{ isAuth: true }});
  }

  const logout = () => {
    setAuthUser(NonAuthUser)
  }

  return (
    <AuthContext.Provider
    value={{
      isAuth: authUser.isAuth,
      user: authUser.user,
      login,
      logout
    }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const AuthConsumer = AuthContext.Consumer
