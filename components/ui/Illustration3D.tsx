import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

export const CubeIllustration = () => {
  return (
    <Svg width="200" height="200" viewBox="0 0 200 200">
      <Defs>
        <LinearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <Stop offset="0%" stopColor="#4A90E2" stopOpacity="0.8" />
          <Stop offset="100%" stopColor="#357ABD" stopOpacity="0.9" />
        </LinearGradient>
      </Defs>
      <Path
        d="M100 20L180 70L100 120L20 70L100 20Z"
        fill="url(#gradient1)"
        opacity="0.9"
      />
      <Path
        d="M100 120L180 70L180 170L100 220L100 120Z"
        fill="url(#gradient1)"
        opacity="0.7"
      />
      <Path
        d="M100 120L100 220L20 170L20 70L100 120Z"
        fill="url(#gradient1)"
        opacity="0.5"
      />
    </Svg>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CubeIllustration;
