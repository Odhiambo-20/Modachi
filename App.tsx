// App.tsx

import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LogBox } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Notifications from 'expo-notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import all screens
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import AppTabs from './app/(tabs)/_layout';
import SearchScreen from './screens/SearchScreen';
import NotificationsScreen from './screens/NotificationScreen';
import NewDesignScreen from './screens/NewDesignScreen';
import SettingsScreen from './screens/SettingsScreen';
import MoodboardsScreen from './screens/MoodboardsScreen';
import TrendsScreen from './screens/TrendsScreen';
import CollaborationScreen from './screens/CollaborationScreen';
import VirtualClosetScreen from './screens/VirtualClosetScreen';
import OnboardingScreen from './screens/OnboardingScreen';

const Stack = createStackNavigator();

// Ignore specific warnings
LogBox.ignoreLogs([
  'Animated: `useNativeDriver`',
  'Image: style.tintColor is deprecated',
  '"shadow*" style props are deprecated',
]);

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function App() {
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null);

  useEffect(() => {
    AsyncStorage.getItem('hasLaunched').then(value => {
      if (value === null) {
        AsyncStorage.setItem('hasLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch === null) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        {/* Authentication Flow */}
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        
        {/* Main App */}
        <Stack.Screen name="MainApp" component={AppTabs} />
        
        {/* Modal Screens */}
        <Stack.Screen 
          name="Search" 
          component={SearchScreen}
          options={{ presentation: 'modal' }}
        />
        <Stack.Screen 
          name="Notifications" 
          component={NotificationsScreen}
          options={{ presentation: 'modal' }}
        />
        <Stack.Screen 
          name="NewDesign" 
          component={NewDesignScreen}
          options={{ presentation: 'modal' }}
        />
        <Stack.Screen 
          name="Settings" 
          component={SettingsScreen}
          options={{ presentation: 'modal' }}
        />
        
        {/* Feature Screens */}
        <Stack.Screen name="Moodboards" component={MoodboardsScreen} />
        <Stack.Screen name="TrendInsights" component={TrendsScreen} />
        <Stack.Screen name="CollaborationHub" component={CollaborationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}