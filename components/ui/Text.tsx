import React from 'react';
import { Text as RNText, TextProps, StyleSheet } from 'react-native';

interface ThemedTextProps extends TextProps {
  type?: 'title' | 'subtitle' | 'link' | 'defaultSemiBold' | 'default';
}
const ThemedText: React.FC<ThemedTextProps> = ({ type, style, ...props }) => {
  const textStyle = [styles.default, styles[type || 'default']];

  return <RNText style={[textStyle, style]} {...props} />;
};

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    color: '#11181C',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  link: {
    color: '#0a7ea4',
    textDecorationLine: 'underline',
  },
  defaultSemiBold: {
    fontWeight: '600',
  },
});

export default ThemedText; 