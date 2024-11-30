import React, { createContext, useState, useEffect, useContext } from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

export interface SignUpResult {
  uid: string;
}

interface AuthContextType {
  user: FirebaseAuthTypes.User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<SignUpResult>;
  signOut: () => Promise<void>;
}

// Create context with undefined initial value
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Custom hook to use auth context with type safety
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signIn: async (email, password) => {
          await auth().signInWithEmailAndPassword(email, password);
        },
        signUp: async (email: string, password: string) => {
          const userCredential = await auth().createUserWithEmailAndPassword(email, password);
          return { uid: userCredential.user.uid };
        },
        signOut: async () => {
          await auth().signOut();
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};