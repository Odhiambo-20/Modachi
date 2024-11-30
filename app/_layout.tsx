import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen 
          name="index" 
          options={{ 
            animation: 'fade',
          }} 
        />
        <Stack.Screen 
          name="(tabs)" 
          options={{ 
            animation: 'fade',
          }} 
        />
      </Stack>
    </>
  );
}
