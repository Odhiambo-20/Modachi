import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const HelloWave: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.waveText}>👋</Text>
      <Text style={styles.greetingText}>Hello, welcome to Modachi!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  waveText: {
    fontSize: 24,
  },
  greetingText: {
    fontSize: 18,
    marginLeft: 8,
  },
});

export default HelloWave;
