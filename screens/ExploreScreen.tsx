import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  Dimensions
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.7;

const ExploreScreen = ({ navigation }: { navigation: any }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const categories = ['All', 'Trending', 'Fashion', 'Accessories', 'Sustainable'];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Explore</Text>
        <TouchableOpacity>
          <Ionicons name="options-outline" size={24} color="#1a1a1a" />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Ionicons name="search-outline" size={20} color="#666" />
          <TextInput
            style={styles.searchInput}
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Search designs, designers..."
            placeholderTextColor="#999"
          />
        </View>
      </View>

      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesScroll}
        contentContainerStyle={styles.categories}
      >
        {categories.map((category) => (
          <TouchableOpacity 
            key={category} 
            style={styles.categoryChip}
          >
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Featured Designers</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>

          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.designersScroll}
          >
            {Array(5).fill(null).map((_, index) => (
              <TouchableOpacity key={index} style={styles.designerCard}>
                <Image
                  source={{ uri: 'designer-avatar' }}
                  style={styles.designerAvatar}
                />
                <Text style={styles.designerName}>Sarah J.</Text>
                <Text style={styles.designerRole}>Fashion Designer</Text>
                <TouchableOpacity style={styles.followButton}>
                  <Text style={styles.followText}>Follow</Text>
                </TouchableOpacity>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Trending Designs</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>

          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.designsScroll}
          >
            {Array(5).fill(null).map((_, index) => (
              <TouchableOpacity 
                key={index}
                style={styles.designCard}
                onPress={() => navigation.navigate('DesignDetails')}
              >
                <Image
                  source={{ uri: 'design-image' }}
                  style={styles.designImage}
                />
                <View style={styles.designInfo}>
                  <Text style={styles.designTitle}>Summer Collection</Text>
                  <View style={styles.designerInfo}>
                    <Image
                      source={{ uri: 'designer-avatar' }}
                      style={styles.smallAvatar}
                    />
                    <Text style={styles.designerLabel}>by Sarah Johnson</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  searchContainer: {
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 44,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: '#1a1a1a',
  },
  categoriesScroll: {
    marginBottom: 24,
  },
  categories: {
    paddingHorizontal: 24,
    gap: 8,
    flexDirection: 'row',
  },
  categoryChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f8f8f8',
  },
  categoryText: {
    fontSize: 14,
    color: '#1a1a1a',
  },
  section: {
    marginBottom: 32,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  seeAllText: {
    fontSize: 14,
    color: '#666',
  },
  designersScroll: {
    paddingHorizontal: 24,
    gap: 16,
    flexDirection: 'row',
  },
  designerCard: {
    alignItems: 'center',
    width: 120,
  },
  designerAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#f8f8f8',
    marginBottom: 8,
  },
  designerName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  designerRole: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },
  followButton: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: '#1a1a1a',
  },
  followText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#fff',
  },
  designsScroll: {
    paddingHorizontal: 24,
    gap: 16,
    flexDirection: 'row',
  },
  designCard: {
    width: CARD_WIDTH,
    borderRadius: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  designImage: {
    width: '100%',
    height: CARD_WIDTH * 1.2,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: '#f8f8f8',
  },
  designInfo: {
    padding: 16,
  },
  designTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  designerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  smallAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#f8f8f8',
    marginRight: 8,
  },
  designerLabel: {
    fontSize: 12,
    color: '#666',
  },
});

export default ExploreScreen; 