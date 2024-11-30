import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider, useAuth } from '../src/contexts/AuthContext';
import DashboardScreen from '@/screens/DashboardScreen';
import { LoginScreen } from '@/screens/LoginScreen';
import { SignUpScreen } from '@/screens/SignUpScreen';
import React from 'react';
import { LoadingScreen } from '@/screens/LoadingScreen';

const Stack = createStackNavigator();

function RootNavigator() {
  const { user, loading } = useAuth();

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Stack.Navigator>
      {user ? (
        // Authenticated stack
        <>
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
          {/* Other authenticated screens */}
        </>
      ) : (
        // Auth stack
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </>
      )}
    </Stack.Navigator>
  );
}

export default function Navigation() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}
