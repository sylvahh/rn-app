import React, { createContext, useContext, ReactNode } from 'react';

interface AuthContextType {}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Create a custom hook to use the context
export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps): JSX.Element {
  const value: AuthContextType = {};

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
