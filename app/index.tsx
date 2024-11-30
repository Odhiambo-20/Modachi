import React, { useState, useRef } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import CubeIllustration from '../components/ui/Illustration3D';
import ThemedText from '../components/ui/ThemedText';

const { width } = Dimensions.get('window');

const slides = [
  {
    id: '1',
    title: 'Design Your Style',
    description: 'Create and customize your virtual wardrobe with our intuitive design tools.',
    illustration: <CubeIllustration />
  },
  {
    id: '2',
    title: 'Explore Trends',
    description: 'Stay updated with the latest fashion trends and style inspirations.',
    illustration: <CubeIllustration />
  },
  {
    id: '3',
    title: 'Connect & Share',
    description: 'Join the fashion community and share your unique style with others.',
    illustration: <CubeIllustration />
  }
];

export default function OnboardingScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const router = useRouter();

  const renderDot = (index: number) => (
    <View
      style={[
        styles.dot,
        { backgroundColor: currentIndex === index ? '#fff' : 'rgba(255,255,255,0.3)' }
      ]}
    />
  );

  const handleNext = () => {
    if (currentIndex === slides.length - 1) {
      router.replace('/(tabs)');
    } else {
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true
      });
    }
  };

  const handleSkip = () => {
    router.replace('/(tabs)');
  };

  const renderItem = ({ item }: { item: typeof slides[0] }) => (
    <View style={styles.slide}>
      <View style={styles.illustrationContainer}>
        {item.illustration}
      </View>
      <ThemedText type="title" style={styles.title}>
        {item.title}
      </ThemedText>
      <ThemedText type="subtitle" style={styles.description}>
        {item.description}
      </ThemedText>
    </View>
  );

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#000000', '#1a1a1a']}
        style={StyleSheet.absoluteFill}
      />

      <FlatList
        ref={flatListRef}
        data={slides}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(e) => {
          const newIndex = Math.round(e.nativeEvent.contentOffset.x / width);
          setCurrentIndex(newIndex);
        }}
        keyExtractor={(item) => item.id}
      />

      <View style={styles.footer}>
        <View style={styles.pagination}>
          {slides.map((_, index) => renderDot(index))}
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleSkip}>
            <ThemedText type="link" style={styles.skipButton}>
              Skip
            </ThemedText>
          </TouchableOpacity>

          <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
            <ThemedText type="link" style={styles.nextButtonText}>
              {currentIndex === slides.length - 1 ? 'Get Started' : 'Next'}
            </ThemedText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  slide: {
    width,
    alignItems: 'center',
    padding: 40,
    paddingTop: 60,
  },
  illustrationContainer: {
    marginBottom: 60,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.7)',
    textAlign: 'center',
    lineHeight: 24,
    maxWidth: '80%',
  },
  footer: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  skipButton: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 16,
  },
  nextButton: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
