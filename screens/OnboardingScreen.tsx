import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Animated,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const slides = [
  {
    id: '1',
    title: 'Design Your Style',
    description: 'Create and customize your personal fashion designs with our intuitive tools.',
    icon: 'brush-outline',
  },
  {
    id: '2',
    title: 'Connect & Collaborate',
    description: 'Join a community of designers and share ideas with like-minded creatives.',
    icon: 'people-outline',
  },
  {
    id: '3',
    title: 'Stay Inspired',
    description: 'Discover trending styles and get inspired by the latest fashion innovations.',
    icon: 'bulb-outline',
  },
];

const OnboardingScreen = ({ navigation }: { navigation: any }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef<FlatList>(null);

  const viewableItemsChanged = useRef(({ viewableItems }: any) => {
    setCurrentIndex(viewableItems[0]?.index || 0);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollTo = () => {
    if (currentIndex < slides.length - 1) {
      slidesRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      navigation.navigate('Login');
      console.log('Navigating to Login from Onboarding (Next button)');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.skipButton}
        onPress={() => {
          console.log('Navigating to Login from Onboarding (Skip button)');
          navigation.navigate('Login');
        }}
      >
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      <FlatList
        data={slides}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <View style={styles.iconContainer}>
              <Ionicons name={item.icon as any} size={80} color="#1a1a1a" />
            </View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id} // Ensure unique keys
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
      />

      <View style={styles.pagination}>
        {slides.map((slide, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];

          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [8, 20, 8],
            extrapolate: 'clamp',
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={slide.id} // Use slide.id as the key
              style={[styles.dot, { width: dotWidth, opacity }]}
            />
          );
        })}
      </View>

      <TouchableOpacity style={styles.button} onPress={scrollTo}>
        <Text style={styles.buttonText}>
          {currentIndex === slides.length - 1 ? 'Get Started' : 'Next'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  skipButton: {
    position: 'absolute',
    top: 60,
    right: 24,
    zIndex: 1,
  },
  skipText: {
    fontSize: 16,
    color: '#666',
  },
  slide: {
    width,
    alignItems: 'center',
    padding: 24,
    paddingTop: 120,
  },
  iconContainer: {
    width: 160,
    height: 160,
    backgroundColor: '#f8f8f8',
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 16,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 24,
    lineHeight: 24,
  },
  pagination: {
    flexDirection: 'row',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    height: 8,
    borderRadius: 4,
    backgroundColor: '#1a1a1a',
    marginHorizontal: 4,
  },
  button: {
    backgroundColor: '#1a1a1a',
    paddingVertical: 16,
    paddingHorizontal: 48,
    borderRadius: 12,
    marginBottom: 40,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default OnboardingScreen;
