import React from 'react';
import { View, ViewProps, StyleSheet } from 'react-native';

const ThemedView: React.FC<ViewProps> = ({ style, ...props }) => {
  return (
    <View style={[styles.container, style]} {...props} />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff', // Default background color
    padding: 10, // Default padding
  },
});

export default ThemedView; 