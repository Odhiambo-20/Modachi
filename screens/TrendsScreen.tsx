// Modachi/screens/TrendsScreen.tsx
import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView, 
  Image,
  Dimensions 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Images } from '../constants/Images';

const { width } = Dimensions.get('window');
const cardWidth = width * 0.8;

const TrendsScreen = ({ navigation }: { navigation: any }) => {
  const [activeTab, setActiveTab] = useState('Trending');
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Trends</Text>
        <TouchableOpacity>
          <Ionicons name="bookmark-outline" size={24} color="#1a1a1a" />
        </TouchableOpacity>
      </View>

      <View style={styles.tabBar}>
        {['Trending', 'Latest', 'For You'].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <ScrollView 
          horizontal 
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          style={styles.featuredScroll}
        >
          {[1, 2, 3].map((item) => (
            <View key={item} style={styles.featuredCard}>
              <Image
                source={Images.placeholders.trend}
                style={styles.featuredImage}
              />
              <View style={styles.featuredOverlay}>
                <Text style={styles.trendTitle}>Summer 2024 Trends</Text>
                <Text style={styles.trendSubtitle}>Discover what's hot this season</Text>
              </View>
            </View>
          ))}
        </ScrollView>

        <Text style={styles.sectionTitle}>Popular Categories</Text>
        <View style={styles.categoryGrid}>
          {['Streetwear', 'Minimalist', 'Vintage', 'Sustainable'].map((category) => (
            <TouchableOpacity key={category} style={styles.categoryCard}>
              <Text style={styles.categoryName}>{category}</Text>
              <Text style={styles.categoryCount}>24 items</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Latest Insights</Text>
        {[1, 2].map((item) => (
          <TouchableOpacity key={item} style={styles.insightCard}>
            <Image
              source={Images.placeholders.insight}
              style={styles.insightImage}
            />
            <View style={styles.insightContent}>
              <Text style={styles.insightTitle}>Color Trends 2024</Text>
              <Text style={styles.insightPreview}>
                Explore the upcoming color palettes that will dominate fashion...
              </Text>
              <Text style={styles.insightDate}>2 hours ago</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  tabBar: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  tab: {
    marginRight: 24,
    paddingBottom: 8,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#1a1a1a',
  },
  tabText: {
    fontSize: 16,
    color: '#666',
  },
  activeTabText: {
    color: '#1a1a1a',
    fontWeight: '500',
  },
  featuredScroll: {
    height: 280,
  },
  featuredCard: {
    width: cardWidth,
    height: 280,
    marginLeft: 24,
    borderRadius: 20,
    overflow: 'hidden',
  },
  featuredImage: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f8f8f8',
  },
  featuredOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 24,
    backgroundColor: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
  },
  trendTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 8,
  },
  trendSubtitle: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1a1a1a',
    marginTop: 32,
    marginBottom: 16,
    paddingHorizontal: 24,
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    gap: 16,
  },
  categoryCard: {
    width: '45%',
    padding: 16,
    backgroundColor: '#f8f8f8',
    borderRadius: 16,
    marginHorizontal: 8,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  categoryCount: {
    fontSize: 14,
    color: '#666',
  },
  insightCard: {
    marginHorizontal: 24,
    marginBottom: 16,
    borderRadius: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  insightImage: {
    width: '100%',
    height: 160,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: '#f8f8f8',
  },
  insightContent: {
    padding: 16,
  },
  insightTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  insightPreview: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  insightDate: {
    fontSize: 12,
    color: '#999',
  },
});

export default TrendsScreen;