import { Stack } from 'expo-router';
import { StyleSheet } from 'react-native';
import ThemedText from '../components/ui/ThemedText';
import ThemedView from '../components/ThemedView';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { Alert } from 'react-native';

type RootStackParamList = {
  Dashboard: undefined;
  // Define other routes as needed
  // ... other routes
};

export default function NotFoundScreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    // Show an alert before redirecting
    Alert.alert("Page Not Found", "Redirecting to Dashboard...", [
      { text: "OK", onPress: () => {
        console.log('Navigating to Dashboard from NotFound screen');
        navigation.navigate('Dashboard')
      }}
    ]);
  }, [navigation]);

  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <ThemedView style={styles.container}>
        <ThemedText type="title">You are Lost!</ThemedText>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
