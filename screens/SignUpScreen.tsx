import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useAuth } from '../src/contexts/AuthContext';
import ThemedText from '../components/ui/ThemedText';
import database from '@react-native-firebase/database';
import { NavigationProp } from '@react-navigation/native';

import { SignUpResult } from '../src/contexts/AuthContext';

interface SignUpScreenProps {
  navigation: NavigationProp<any>;
}

const DEFAULT_USER_SETTINGS = {
  emailNotifications: true,
  pushNotifications: true,
  darkMode: false,
  language: 'en',
  privacySettings: {
    profileVisibility: 'public',
    showOnline: true,
    showActivity: true,
    allowMessages: 'everyone',
  },
};

export const SignUpScreen = ({ navigation }: SignUpScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [loading, setLoading] = useState(false);
  const { signUp } = useAuth();

  const validateForm = () => {
    if (!displayName.trim()) {
      Alert.alert('Error', 'Display Name cannot be empty');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return false;
    }
    if (password.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters');
      return false;
    }
    return true;
  };

  const handleSignUp = async () => {
    if (!validateForm()) return;

    setLoading(true);
    try {
      const result: SignUpResult = await signUp(email, password);
      if (!result?.uid) throw new Error('Failed to create account');

      // Save user profile in Realtime Database
      await database()
        .ref(`/users/${result.uid}`)
        .set({
          displayName,
          email,
          settings: DEFAULT_USER_SETTINGS,
        });

      setLoading(false);
      Alert.alert('Success', 'Account created successfully!');
      navigation.navigate('Dashboard');
    } catch (error: unknown) {
      setLoading(false);
      const errorMessage =
        error instanceof Error ? error.message : 'An unknown error occurred';
      Alert.alert('Error', errorMessage);
    }
  };

  return (
    <View style={styles.container}>
      <ThemedText type="title">Create Account</ThemedText>

      <TextInput
        style={styles.input}
        placeholder="Display Name"
        value={displayName}
        onChangeText={setDisplayName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {loading ? (
        <ActivityIndicator size="large" color="#007AFF" />
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <ThemedText type="title" style={styles.buttonText}>
            Sign Up
          </ThemedText>
        </TouchableOpacity>
      )}

      <TouchableOpacity
        style={styles.linkButton}
        onPress={() => navigation.navigate('Login')}
      >
        <ThemedText type="link">Already have an account? Login</ThemedText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
    opacity: 0.9,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  linkButton: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default SignUpScreen;
