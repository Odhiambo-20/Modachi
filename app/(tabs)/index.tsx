import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import ThemedText from '../../components/ui/ThemedText';
import { LinearGradient } from 'expo-linear-gradient';

const features = [
  {
    id: '1',
    title: 'Dashboard',
    icon: require('../../assets/icons/Dashboard.png'),
    route: '/dashboard'
  },
  {
    id: '2',
    title: 'Virtual Closet',
    icon: require('../../assets/icons/VirtualCloset.png'),
    route: '/virtualcloset'
  },
  {
    id: '3',
    title: 'Moodboard',
    icon: require('../../assets/icons/Moodboard.png'),
    route: '/moodboards'
  },
  {
    id: '4',
    title: 'Trends',
    icon: require('../../assets/icons/Trends.png'),
    route: '/trends'
  }
];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={['#000000', '#1a1a1a']}
        style={StyleSheet.absoluteFill}
      />
      
      <View style={styles.header}>
        <ThemedText type="title" style={styles.welcomeText}>
          Welcome to Modachi
        </ThemedText>
        <ThemedText type="subtitle" style={styles.subtitleText}>
          Your Fashion Design Companion
        </ThemedText>
      </View>

      <View style={styles.featuresGrid}>
        {features.map((feature) => (
          <TouchableOpacity
            key={feature.id}
            style={styles.featureCard}
            activeOpacity={0.7}
          >
            <View style={styles.iconContainer}>
              <Image 
                source={feature.icon}
                style={styles.featureIcon}
                resizeMode="contain"
              />
            </View>
            <ThemedText type="subtitle" style={styles.featureTitle}>
              {feature.title}
            </ThemedText>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.recentSection}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>
          Recent Activity
        </ThemedText>
        <View style={styles.emptyState}>
          <ThemedText type="subtitle" style={styles.emptyText}>
            Start creating your fashion journey
          </ThemedText>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    padding: 20,
    paddingTop: 40,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  subtitleText: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.7)',
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    justifyContent: 'space-between',
  },
  featureCard: {
    width: '48%',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(255,255,255,0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  featureIcon: {
    width: 30,
    height: 30,
    tintColor: '#fff',
  },
  featureTitle: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
  recentSection: {
    padding: 20,
    paddingTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 16,
  },
  emptyState: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  emptyText: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 14,
    textAlign: 'center',
  },
});
