import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';

interface ThemedTextProps extends TextProps {
  type: 'title' | 'subtitle' | 'link'; // Define your text types
}

const ThemedText: React.FC<ThemedTextProps> = ({ type, style, ...props }) => {
  return (
    <Text style={[styles[type], style]} {...props} />
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
  },
  link: {
    fontSize: 16,
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
});

export default ThemedText; 